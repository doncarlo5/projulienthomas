'use client'

import {
  isValidElement,
  type ReactNode,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'

let isInitialized = false
let mermaidPromise: Promise<(typeof import('mermaid'))['default']> | null = null

type MermaidProps = {
  code?: string
  children?: ReactNode
  className?: string
}

function extractText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node
      .flatMap((child) => {
        const text = extractText(child)
        return text ? [text] : []
      })
      .join('\n')
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractText(node.props.children)
  }

  return ''
}

export function Mermaid({ code, children, className }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reactId = useId()
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const diagram = useMemo(
    () => (code ?? extractText(children)).trim(),
    [children, code],
  )

  const wrapperClassName = [
    'my-6 overflow-x-auto rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  useEffect(() => {
    if (!diagram || !containerRef.current) return

    let cancelled = false

    const renderDiagram = async () => {
      try {
        setStatus('loading')
        setError(null)

        mermaidPromise ??= import('mermaid').then((module) => module.default)
        const mermaid = await mermaidPromise

        if (!isInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'strict',
            flowchart: {
              htmlLabels: true,
              useMaxWidth: true,
            },
            theme: 'default',
          })
          isInitialized = true
        }

        if (containerRef.current) {
          containerRef.current.innerHTML = ''
        }

        const id = `mermaid-${reactId.replace(/:/g, '-')}`
        const { svg, bindFunctions } = await mermaid.render(id, diagram)

        if (cancelled || !containerRef.current) {
          return
        }

        containerRef.current.innerHTML = svg
        bindFunctions?.(containerRef.current)
        setStatus('ready')
      } catch (err) {
        if (cancelled || !containerRef.current) {
          return
        }

        const errorMessage =
          err instanceof Error ? err.message : 'Unknown error'
        console.error('Mermaid rendering error:', err)
        setError(errorMessage)
        setStatus('error')
      }
    }

    const timeoutId = window.setTimeout(() => void renderDiagram(), 0)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [diagram, reactId])

  if (!diagram) {
    return null
  }

  return (
    <div className={wrapperClassName}>
      {error && (
        <div className="p-4 text-red-700 dark:text-red-300" role="alert">
          <p className="font-semibold">Diagram could not be rendered.</p>
          <p className="mt-2 text-sm">{error}</p>
          <pre className="mt-4 overflow-auto rounded bg-zinc-100 p-2 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            {diagram}
          </pre>
        </div>
      )}
      {status === 'loading' && (
        <div className="flex items-center justify-center p-8 text-zinc-500">
          <span>Loading diagram...</span>
        </div>
      )}
      <div
        ref={containerRef}
        className={status === 'ready' ? undefined : 'hidden'}
      />
    </div>
  )
}
