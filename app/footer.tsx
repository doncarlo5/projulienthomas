import { EMAIL, SOCIAL_LINKS } from './data'

export function Footer() {
  return (
    <footer className="site-footer editorial-grid">
      <p>© {new Date().getFullYear()} Julien Thomas</p>
      <div className="footer-contact">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
      <p className="footer-place">Barcelona, Spain</p>
    </footer>
  )
}
