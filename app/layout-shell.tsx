'use client'

import { usePathname } from 'next/navigation'
import { Header } from './header'
import { Footer } from './footer'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideChrome = pathname === '/magic-card'

  return (
    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
        {!hideChrome && <Header />}
        {children}
        {!hideChrome && <Footer />}
      </div>
    </div>
  )
}
