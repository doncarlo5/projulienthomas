import Link from 'next/link'
import { EMAIL, SOCIAL_LINKS } from './data'

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
        {SOCIAL_LINKS.filter((social) => social.label !== 'X / Twitter').map(
          (social) => (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ),
        )}
      </nav>

      <Link className="site-work-link" href="/#work">
        Work
      </Link>
    </header>
  )
}
