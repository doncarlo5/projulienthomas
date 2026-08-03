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

function SectionHeading({
  index,
  title,
  description,
  titleId,
}: {
  index: string
  title: string
  description: string
  titleId: string
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
      <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
        {index}
      </p>
      <div>
        <h2
          id={titleId}
          className="text-2xl font-medium tracking-[-0.035em] text-balance sm:text-3xl"
        >
          {title}
        </h2>
        <p className="text-muted-foreground mt-3 max-w-[42rem] text-base leading-7 text-pretty">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Personal() {
  return (
    <main className="portfolio-home pb-2">
      <section
        className="reveal pt-20 pb-28 sm:pt-28 sm:pb-36"
        aria-labelledby="intro-title"
      >
        <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
          Full-stack development · Product delivery
        </p>
        <h1
          id="intro-title"
          className="mt-6 max-w-[52rem] text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.94] font-medium tracking-[-0.065em] text-balance"
        >
          I build digital products that hold up in the real world.
        </h1>
        <p className="text-muted-foreground mt-8 max-w-[43rem] text-lg leading-8 text-pretty sm:text-xl sm:leading-9">
          I work across engineering, product, and client teams to turn complex
          requirements into clear, dependable experiences—from high-traffic
          platforms to focused business tools.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium">
          <a
            href="#work"
            className="editorial-underline inline-flex items-center gap-2"
          >
            View selected work <span aria-hidden="true">↓</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="editorial-underline text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section
        id="work"
        className="reveal reveal-delay-1 scroll-mt-8"
        aria-labelledby="selected-work-title"
      >
        <SectionHeading
          index="01 / Selected work"
          title="Products shaped around real constraints."
          description="Three recent builds where the work extended beyond writing code—into product decisions, delivery, and measurable outcomes."
          titleId="selected-work-title"
        />

        <div className="mt-14 sm:mt-20">
          {FEATURED_PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="border-border border-t py-10 sm:py-14"
            >
              <div className="grid gap-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
                <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs tabular-nums">
                  {String(index + 1).padStart(2, '0')} · {project.year}
                </p>
                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
                    <SmartLink
                      href={project.link}
                      className="editorial-underline"
                    >
                      {project.name} <span aria-hidden="true">↗</span>
                    </SmartLink>
                  </h3>
                  <p className="text-muted-foreground mt-4 max-w-[42rem] text-lg leading-8 text-pretty">
                    {project.description}
                  </p>
                </div>
              </div>

              <ProjectVisual project={project} priority={index === 0} />

              <dl className="border-border mt-7 grid gap-6 border-b pb-9 sm:grid-cols-3 sm:gap-8">
                <div>
                  <dt className="text-muted-foreground text-xs">Role</dt>
                  <dd className="mt-2 text-sm leading-6">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-xs">Outcome</dt>
                  <dd className="mt-2 text-sm leading-6">{project.outcome}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-xs">
                    {project.impactLabel ?? 'Impact'}
                  </dt>
                  <dd className="mt-2 text-sm leading-6">{project.impact}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <p className="text-muted-foreground">
                  {project.platform.join(' · ')}
                </p>
                {project.caseStudyLink ? (
                  <Link
                    href={project.caseStudyLink}
                    className="editorial-underline font-medium"
                  >
                    Read the case study <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 sm:mt-24">
          <h3 className="text-lg font-medium tracking-[-0.02em]">
            Project archive
          </h3>
          <p className="text-muted-foreground mt-2 max-w-[40rem] text-sm leading-6">
            Professional tools and small personal products, kept intentionally
            compact.
          </p>
          <ul className="border-border mt-7 border-t">
            {ARCHIVE_PROJECTS.map((project) => (
              <li key={project.id} className="border-border border-b">
                <SmartLink
                  href={project.link}
                  className={`group grid gap-2 py-4 transition-colors duration-200 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_7rem] sm:items-baseline sm:gap-6 ${
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
                    {project.link ? <span aria-hidden="true">↗</span> : null}
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="reveal reveal-delay-2 mt-28 sm:mt-40"
        aria-labelledby="experience-title"
      >
        <SectionHeading
          index="02 / Experience"
          title="A technical practice grounded in people."
          description="Engineering is my current craft. Years in sales, specification, and project leadership still shape how I listen, decide, and ship."
          titleId="experience-title"
        />

        <ol className="border-border mt-12 border-t sm:mt-16">
          {WORK_EXPERIENCE.map((job) => (
            <li key={job.id} className="border-border border-b">
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:text-muted-foreground grid gap-1 py-5 transition-colors duration-200 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_9rem] sm:items-baseline sm:gap-6"
              >
                <span className="font-medium">
                  {job.company} <span aria-hidden="true">↗</span>
                </span>
                <span className="text-muted-foreground text-sm">
                  {job.title}
                </span>
                <span className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-[11px] tabular-nums sm:text-right">
                  {job.start}—{job.end}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="notes"
        className="reveal reveal-delay-3 mt-28 scroll-mt-8 sm:mt-40"
        aria-labelledby="notes-title"
      >
        <SectionHeading
          index="03 / Notes"
          title="Writing from the work."
          description="Practical notes on architecture, product decisions, and what changes when software meets real users."
          titleId="notes-title"
        />

        <ul className="border-border mt-12 border-t sm:mt-16">
          {BLOG_POSTS.map((post) => (
            <li key={post.uid} className="border-border border-b">
              <Link
                href={post.link}
                className="group hover:text-muted-foreground grid gap-2 py-5 transition-colors duration-200 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_4rem] sm:items-baseline sm:gap-6"
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
        className="reveal reveal-delay-4 border-border mt-28 scroll-mt-8 border-t pt-10 sm:mt-40 sm:grid sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 sm:pt-14"
        aria-labelledby="contact-title"
      >
        <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
          04 / Contact
        </p>
        <div className="mt-5 sm:mt-0">
          <h2
            id="contact-title"
            className="max-w-[40rem] text-3xl font-medium tracking-[-0.045em] text-balance sm:text-5xl"
          >
            Have a useful product to build?
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="editorial-underline mt-7 inline-block text-lg font-medium sm:text-xl"
          >
            {EMAIL} <span aria-hidden="true">↗</span>
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
                  {social.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
