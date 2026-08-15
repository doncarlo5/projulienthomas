import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  BLOG_POSTS,
  EMAIL,
  PROJECTS,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
  type FeaturedProject,
} from './data'

const FEATURED_PROJECTS = PROJECTS.filter(
  (project): project is FeaturedProject => project.featured === true,
)

const ARCHIVE_PROJECTS = PROJECTS.filter((project) => !project.featured)

// iOS gives a bare ↗ emoji presentation. U+FE0E forces it back to a glyph.
const ARROW_OUT = '↗︎'

function isExternalLink(href: string) {
  return href.startsWith('http')
}

function SmartLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href?: string
  className?: string
  children: ReactNode
  ariaLabel?: string
}) {
  if (!href) {
    return <div className={className}>{children}</div>
  }

  if (isExternalLink(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}

function ProjectVisual({
  project,
  priority,
}: {
  project: FeaturedProject
  priority?: boolean
}) {
  const isLAAX = project.id === 'project1'

  return (
    <SmartLink
      href={project.link}
      className="group mt-7 block"
      ariaLabel={`Visit ${project.name} project`}
    >
      <figure className="border-border bg-card relative aspect-[4/3] overflow-hidden rounded-[10px] border sm:aspect-[16/9]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) calc(100vw - 40px), 896px"
          className={
            isLAAX
              ? 'object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.01]'
              : 'object-contain p-[8%] transition-transform duration-500 ease-out group-hover:scale-[1.01] sm:p-[6%]'
          }
        />
      </figure>
    </SmartLink>
  )
}

function SectionLabel({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs"
    >
      {children}
    </h2>
  )
}

export default function Personal() {
  return (
    <main className="portfolio-home pb-2">
      <section
        className="reveal pt-16 pb-20 sm:pt-24 sm:pb-28"
        aria-labelledby="intro-title"
      >
        <h1
          id="intro-title"
          className="max-w-[34rem] text-xl leading-8 font-medium tracking-[-0.02em] text-pretty sm:text-2xl sm:leading-9"
        >
          Full-stack developer in Barcelona. I take projects end to end:
          architecture, product, and the client conversation.
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium">
          <a
            href="#work"
            className="editorial-underline inline-flex items-center gap-2"
          >
            Work <span aria-hidden="true">↓</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="editorial-underline text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
          >
            Email <span aria-hidden="true">{ARROW_OUT}</span>
          </a>
        </div>
      </section>

      <section
        id="work"
        className="reveal reveal-delay-1 scroll-mt-8"
        aria-labelledby="selected-work-title"
      >
        <SectionLabel id="selected-work-title">01 / Selected work</SectionLabel>

        <div className="mt-6 sm:mt-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="border-border border-t py-8 sm:py-14"
            >
              <div className="grid gap-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
                <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs tabular-nums">
                  {project.year}
                </p>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                    <SmartLink
                      href={project.link}
                      className="editorial-underline"
                    >
                      {project.name} <span aria-hidden="true">{ARROW_OUT}</span>
                    </SmartLink>
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-[38rem] text-base leading-7 text-pretty">
                    {project.description}
                  </p>
                </div>
              </div>

              <ProjectVisual project={project} priority={index === 0} />

              <div className="mt-6 grid gap-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
                <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
                  {project.platform.join(' · ')}
                </p>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-sm">
                    <p className="max-w-[34rem] leading-6 text-pretty">
                      {project.role}
                    </p>
                    {project.caseStudyLink ? (
                      <Link
                        href={project.caseStudyLink}
                        className="editorial-underline font-medium whitespace-nowrap"
                      >
                        Case study <span aria-hidden="true">→</span>
                      </Link>
                    ) : null}
                  </div>
                  {project.result ? (
                    <p className="text-muted-foreground mt-2 text-sm tabular-nums">
                      {project.result}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-16">
          <h3 className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
            Archive
          </h3>
          <ul className="border-border mt-6 border-t sm:mt-8">
            {ARCHIVE_PROJECTS.map((project) => (
              <li key={project.id} className="border-border border-b">
                <SmartLink
                  href={project.link}
                  className={`group grid gap-1 py-4 transition-colors duration-200 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_7rem] sm:items-baseline sm:gap-6 ${
                    project.link ? 'hover:text-muted-foreground' : ''
                  }`}
                >
                  <span className="flex items-baseline justify-between gap-4 font-medium sm:block">
                    {project.name}
                    <span className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-[11px] font-normal sm:hidden">
                      {project.category === 'professional'
                        ? 'Client'
                        : 'Personal'}
                    </span>
                  </span>
                  <span className="text-muted-foreground text-sm leading-6">
                    {project.description}
                  </span>
                  <span className="text-muted-foreground hidden text-right font-[family-name:var(--font-geist-mono)] text-[11px] sm:block">
                    {project.category === 'professional'
                      ? 'Client'
                      : 'Personal'}{' '}
                    {project.link ? (
                      <span aria-hidden="true">{ARROW_OUT}</span>
                    ) : null}
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="reveal reveal-delay-2 mt-20 sm:mt-28"
        aria-labelledby="experience-title"
      >
        <SectionLabel id="experience-title">02 / Experience</SectionLabel>

        <p className="mt-4 max-w-[36rem] text-base leading-7 text-pretty">
          Five years selling and specifying in the construction industry, then a
          switch: Scrimba, a three-month bootcamp, and a long run of personal
          projects. Those sales years still shape how I run a client project.
        </p>

        <ol className="border-border mt-6 border-t sm:mt-8">
          {WORK_EXPERIENCE.map((job) => (
            <li key={job.id} className="border-border border-b">
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:text-muted-foreground grid gap-1 py-5 transition-colors duration-200 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_9rem] sm:items-baseline sm:gap-6"
              >
                <span className="font-medium">
                  {job.company} <span aria-hidden="true">{ARROW_OUT}</span>
                </span>
                <span className="text-muted-foreground text-sm">
                  {job.title}
                </span>
                <span className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-[11px] tabular-nums sm:text-right">
                  {job.start}–{job.end}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="notes"
        className="reveal reveal-delay-3 mt-20 scroll-mt-8 sm:mt-28"
        aria-labelledby="notes-title"
      >
        <SectionLabel id="notes-title">03 / Notes</SectionLabel>

        <ul className="border-border mt-6 border-t sm:mt-8">
          {BLOG_POSTS.map((post) => (
            <li key={post.uid} className="border-border border-b">
              <Link
                href={post.link}
                className="group hover:text-muted-foreground grid gap-1 py-5 transition-colors duration-200 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_4rem] sm:items-baseline sm:gap-6"
              >
                <span className="font-medium">
                  {post.title} <span aria-hidden="true">→</span>
                </span>
                <span className="text-muted-foreground text-sm leading-6">
                  {post.description}
                </span>
                <span className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-[11px] tabular-nums sm:text-right">
                  {post.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact"
        className="reveal reveal-delay-4 border-border mt-20 scroll-mt-8 border-t pt-10 sm:mt-28 sm:pt-14"
        aria-labelledby="contact-title"
      >
        <SectionLabel id="contact-title">04 / Contact</SectionLabel>
        <p className="mt-4 max-w-[36rem] text-base leading-7 text-pretty">
          Currently at Selego, a startup studio in Paris and Barcelona. Open to
          new projects. Most drawn to Next.js, TanStack, and Vercel&rsquo;s eve.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="editorial-underline mt-6 inline-block text-lg font-medium tracking-[-0.02em] sm:text-xl"
        >
          {EMAIL} <span aria-hidden="true">{ARROW_OUT}</span>
        </a>
        <ul className="text-muted-foreground mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-underline hover:text-foreground"
              >
                {social.label} <span aria-hidden="true">{ARROW_OUT}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
