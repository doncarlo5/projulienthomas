import { Footer } from './footer'
import { Header } from './header'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-geist)]">
      <a
        href="#main-content"
        className="bg-foreground text-background fixed top-3 left-3 z-50 -translate-y-20 rounded-md px-3 py-2 text-sm font-medium transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-screen w-full max-w-[960px] flex-col px-5 sm:px-8">
        <Header />
        <div id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
