import Link from 'next/link'
import { EMAIL } from './data'

export function Header() {
  return (
    <header className="site-header editorial-grid">
      <div className="site-identity">
        <Link href="/" aria-label="Julien Thomas, home">
          Julien Thomas
        </Link>
        <span aria-hidden="true">2018—2026</span>
      </div>

      <nav className="site-links" aria-label="Primary navigation">
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a
          href="https://github.com/doncarlo5"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/julienthomaspro"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>

      <Link className="site-work-link" href="/#work">
        Work
      </Link>
    </header>
  )
}
