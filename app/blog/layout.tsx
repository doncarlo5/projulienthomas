'use client'

import { ScrollProgress } from '@/components/ui/scroll-progress'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function CopyButton() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')

  useEffect(() => {
    if (status === 'idle') return

    const timeout = window.setTimeout(() => setStatus('idle'), 2000)
    return () => window.clearTimeout(timeout)
  }, [status])

  const label =
    status === 'copied'
      ? 'Copied'
      : status === 'error'
        ? 'Copy failed'
        : 'Copy link'

  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href)
          setStatus('copied')
        } catch {
          setStatus('error')
        }
      }}
      className="rounded-sm py-2 text-sm text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-50"
      type="button"
      aria-live="polite"
    >
      {label}
    </button>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgress className="fixed top-0 z-20 h-px bg-zinc-950 dark:bg-zinc-50" />

      <div className="mx-auto mt-10 flex max-w-[45rem] items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <Link
          href="/"
          className="rounded-sm py-2 text-sm text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Portfolio
        </Link>
        <CopyButton />
      </div>
      <main className="prose prose-zinc prose-headings:text-balance prose-p:text-pretty prose-a:decoration-zinc-300 prose-a:underline-offset-4 prose-figcaption:text-sm prose-figcaption:text-zinc-500 prose-h1:text-4xl prose-h1:leading-[1.08] prose-h1:font-semibold prose-h1:tracking-[-0.035em] prose-h2:mt-16 prose-h2:scroll-m-20 prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-[-0.02em] prose-h3:text-lg prose-h3:font-medium prose-h4:text-base prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-semibold dark:prose-invert sm:prose-h1:text-5xl mx-auto mt-14 max-w-[45rem] pb-24">
        {children}
      </main>
    </>
  )
}
