import { Footer } from './footer'
import { Header } from './header'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <div id="main-content" tabIndex={-1} className="site-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}
