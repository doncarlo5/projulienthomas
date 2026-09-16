'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FEATURED_PROJECTS, PROJECT_GROUPS, type FeaturedProject } from './data'

const orderedProjects = PROJECT_GROUPS.flatMap((group) => group.featured)

function ProjectLink({ project }: { project: FeaturedProject }) {
  if (project.caseStudyLink) {
    return <Link href={project.caseStudyLink}>Read case study →</Link>
  }

  if (project.link.startsWith('/')) {
    return <Link href={project.link}>Discover the app →</Link>
  }

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      Visit project ↗︎
    </a>
  )
}

export function WorkShowcase() {
  const [view, setView] = useState<'list' | 'grid'>('list')
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const projects = [
      ...document.querySelectorAll<HTMLElement>('[data-project]'),
    ]
    const projectObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveProject(
            Number((visible.target as HTMLElement).dataset.project),
          )
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.3] },
    )

    projects.forEach((project) => projectObserver.observe(project))

    const media = [...document.querySelectorAll<HTMLElement>('.project-media')]
    const mediaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            mediaObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    media.forEach((item) => mediaObserver.observe(item))

    return () => {
      projectObserver.disconnect()
      mediaObserver.disconnect()
    }
  }, [view])

  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="work-nav editorial-grid">
        <h2 id="work-title">Selected work</h2>
        <p>Product engineering · Design · Development</p>
        <div className="view-switcher" aria-label="Project view">
          <span>Show</span>
          <button
            type="button"
            aria-pressed={view === 'list'}
            onClick={() => setView('list')}
          >
            List
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            aria-pressed={view === 'grid'}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
        </div>
        <p className="work-counter" aria-live="polite">
          {String(activeProject + 1).padStart(2, '0')} —{' '}
          {String(FEATURED_PROJECTS.length).padStart(2, '0')}
        </p>
      </div>

      {PROJECT_GROUPS.map((group) => (
        <section
          key={group.id}
          id={`${group.id}-projects`}
          className="project-group"
          aria-labelledby={`${group.id}-title`}
        >
          <header className="project-group-heading">
            <h3 id={`${group.id}-title`}>{group.title}</h3>
            <p>{group.description}</p>
          </header>
          <div className="work-showcase" data-view={view}>
            {group.featured.map((project) => {
              const projectIndex = orderedProjects.indexOf(project)
              return (
                <article
                  key={project.id}
                  className="project-case editorial-grid"
                  data-project={projectIndex}
                >
                  <header className="project-sidebar">
                    <div className="project-number">
                      {String(projectIndex + 1).padStart(2, '0')} /{' '}
                      {String(FEATURED_PROJECTS.length).padStart(2, '0')}
                    </div>
                    <h4>{project.name}</h4>
                    <p className="project-description">{project.description}</p>
                    <dl className="project-facts">
                      <div>
                        <dt>Year</dt>
                        <dd>{project.year}</dd>
                      </div>
                      <div>
                        <dt>Stack</dt>
                        <dd>{project.platform.join(' · ')}</dd>
                      </div>
                      <div>
                        <dt>Role</dt>
                        <dd>{project.role}</dd>
                      </div>
                      {project.result ? (
                        <div>
                          <dt>Result</dt>
                          <dd>{project.result}</dd>
                        </div>
                      ) : null}
                    </dl>
                    <div className="project-link">
                      <ProjectLink project={project} />
                    </div>
                  </header>

                  <div className="project-content">
                    <div className="project-narrative">
                      <p className="project-statement">{project.statement}</p>
                      <div className="project-copy">
                        {project.longDescription.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div
                      className="project-media-grid"
                      data-layout={project.mediaLayout}
                    >
                      {project.media.map((media, mediaIndex) => (
                        <figure
                          key={`${media.src}-${mediaIndex}`}
                          className={`project-media project-media--${media.layout ?? 'full'}`}
                        >
                          <Image
                            src={media.src}
                            alt={media.alt}
                            width={media.width}
                            height={media.height}
                            priority={projectIndex === 0 && mediaIndex === 0}
                            sizes={
                              project.mediaLayout === 'mobile'
                                ? '(max-width: 760px) 78vw, 24vw'
                                : media.layout === 'half'
                                  ? '(max-width: 760px) calc(100vw - 36px), 34vw'
                                  : '(max-width: 760px) calc(100vw - 36px), 72vw'
                            }
                          />
                        </figure>
                      ))}
                    </div>

                    <div className="project-end">
                      <span>{project.name}</span>
                      <span>End of project</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="archive-block">
            <h4>More {group.title.toLowerCase()}</h4>
            <ul>
              {group.archive.map((project) => (
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
        </section>
      ))}
    </section>
  )
}
