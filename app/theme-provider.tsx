'use client'

import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

export function ThemeProviderWrapper({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      storageKey="theme"
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  )
}

