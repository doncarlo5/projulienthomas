'use client'

import mermaid from 'mermaid'
import { ReactNode, useEffect, useId, useRef, useState } from 'react'

let isInitialized = false

type MermaidProps = {
  code?: string
  children?: ReactNode
  className?: string
}

export function Mermaid({ code, children, className }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reactId = useId()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  // Extract diagram code from props
  // Handle both string children and React node children from MDX
  let source = code
  if (!source && children !== undefined && children !== null) {
    if (typeof children === 'string') {
      source = children
    } else if (Array.isArray(children)) {
      // Handle arrays - extract strings and join them
      source = children
        .map((child) => {
          if (typeof child === 'string') return child
          if (typeof child === 'object' && child !== null && 'props' in child) {
            // Try to extract from React element props
            const propsChildren = (child as any).props?.children
            return typeof propsChildren === 'string' ? propsChildren : ''
          }
          return ''
        })
        .filter(Boolean)
        .join('\n')
    } else if (typeof children === 'object' && children !== null) {
      // Handle single React element
      if ('props' in children && typeof (children as any).props?.children === 'string') {
        source = (children as any).props.children
      }
    }
  }
  const diagram = (source ?? '').trim()

  const wrapperClassName = [
    'my-6 overflow-x-auto rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  useEffect(() => {
    if (!diagram || !containerRef.current) {
      setIsLoading(false)
      return
    }

    // Initialize Mermaid once
    if (!isInitialized) {
      try {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          flowchart: {
            htmlLabels: true,
            useMaxWidth: true,
          },
          theme: 'default',
        })
        isInitialized = true
      } catch (err) {
        console.error('Failed to initialize Mermaid:', err)
        setError('Failed to initialize Mermaid')
        setIsLoading(false)
        return
      }
    }

    let cancelled = false
    setIsLoading(true)
    setError(null)

    const renderDiagram = async () => {
      try {
        // Clear previous content
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
        setIsLoading(false)
      } catch (err) {
        if (cancelled || !containerRef.current) {
          return
        }

        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        console.error('Mermaid rendering error:', err)
        setError(errorMessage)
        setIsLoading(false)
        
        // Show error in container
        containerRef.current.innerHTML = `
          <div class="text-red-600 dark:text-red-400 p-4">
            <p class="font-semibold">Mermaid Diagram Error:</p>
            <p class="text-sm mt-2">${errorMessage}</p>
            <pre class="mt-4 text-xs bg-zinc-100 dark:bg-zinc-900 p-2 rounded overflow-auto">${diagram}</pre>
          </div>
        `
      }
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      renderDiagram()
    }, 0)

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
      {isLoading && !error && (
        <div className="flex items-center justify-center p-8 text-zinc-500">
          <span>Loading diagram...</span>
        </div>
      )}
      <div ref={containerRef} className={isLoading ? 'hidden' : ''} />
    </div>
  )
}
