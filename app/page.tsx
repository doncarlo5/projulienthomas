import Image from 'next/image'
import Link from 'next/link'
import {
  ARCHIVE_PROJECTS,
  BLOG_POSTS,
  EMAIL,
  FEATURED_PROJECTS,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
} from './data'
import { WorkShowcase } from './work-showcase'

export default function Personal() {
  return (
    <main className="portfolio-home">
      <section className="intro editorial-grid" aria-labelledby="intro-title">
        <div className="intro-identity">
          <Image
            className="intro-portrait"
            src="/profile.jpg"
            alt="Julien Thomas"
            width={881}
            height={827}
            priority
          />
          <div>
            <h1 id="intro-title">Full-stack developer</h1>
            <p className="intro-location">Based in Barcelona</p>
          </div>
        </div>
        <p className="intro-summary">
          I build digital products from first decision to production, working
          across architecture, product, and the client conversation. My
          engineering and sales background keeps the work technical, useful,
          and grounded in the people it serves.
        </p>
      </section>

      <section className="profile-index editorial-grid" aria-label="Profile">
        <div>
          <h2>Experience</h2>
          <ol>
            {WORK_EXPERIENCE.map((job) => (
              <li key={job.id}>
                <span>
                  {job.start}—{job.end}
                </span>
                <span>
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                  <small>{job.title}</small>
                </span>
              </li>
            ))}
          </ol>
          <p className="profile-context">
            Five years in construction sales before moving into product
            engineering. That commercial background still shapes how I lead
            client work.
          </p>
        </div>

        <div>
          <h2>Selected products</h2>
          <ul>
            {FEATURED_PROJECTS.map((project) => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Capabilities</h2>
          <ul>
            <li>Product engineering</li>
            <li>Frontend systems</li>
            <li>Backend architecture</li>
            <li>Technical direction</li>
            <li>Client partnership</li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={`mailto:${EMAIL}`}>Email</a>
            </li>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WorkShowcase />

      <section
        className="after-work editorial-grid"
        aria-label="More information"
      >
        <div className="archive-block">
          <h2>Archive</h2>
          <ul>
            {ARCHIVE_PROJECTS.map((project) => (
              <li key={project.id}>
                {project.link ? (
                  project.link.startsWith('/') ? (
                    <Link href={project.link}>{project.name}</Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  )
                ) : (
                  <span>{project.name}</span>
                )}
                <span>{project.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="notes-block" id="notes">
          <h2>Notes</h2>
          <ul>
            {BLOG_POSTS.map((post) => (
              <li key={post.uid}>
                <Link href={post.link}>{post.title}</Link>
                <span>{post.description}</span>
                <span>{post.year}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-block" id="contact">
          <p>
            Available for ambitious product work and technical partnerships.
          </p>
          <a href={`mailto:${EMAIL}`}>{EMAIL} ↗︎</a>
        </div>
      </section>
    </main>
  )
}
