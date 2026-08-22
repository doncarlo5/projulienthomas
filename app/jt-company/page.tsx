import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { EMAIL, PROJECTS, SOCIAL_LINKS, type Project } from '../data'

const ARROW_OUT = '↗︎'

const STUDIO_PROJECT_IDS = new Set([
  'project3',
  'project4',
  'project5',
  'project9',
])

const STUDIO_PROJECTS = PROJECTS.filter((project) =>
  STUDIO_PROJECT_IDS.has(project.id),
)
const CLIENT_PROJECTS = PROJECTS.filter(
  (project) => !STUDIO_PROJECT_IDS.has(project.id),
)

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

function ProjectLink({
  project,
  children,
}: {
  project: Project
  children: ReactNode
}) {
  if (!project.link) return <>{children}</>

  if (project.link.startsWith('/')) {
    return (
      <Link href={project.link} className="group block">
        {children}
      </Link>
    )
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {children}
    </a>
  )
}

function ProjectCard({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  return (
    <article className="border-border border-t pt-5">
      <ProjectLink project={project}>
        {project.image ? (
          <figure className="border-border bg-card relative aspect-[4/3] overflow-hidden rounded-[10px] border">
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.name} product preview`}
              fill
              priority={priority}
              sizes="(max-width: 640px) calc(100vw - 40px), 440px"
              className={`transition-transform duration-500 ease-out group-hover:scale-[1.015] ${
                project.id === 'project1' || project.id === 'project9'
                  ? 'object-cover object-top'
                  : 'object-contain p-[8%]'
              }`}
            />
          </figure>
        ) : null}

        <div className={project.image ? 'mt-5' : ''}>
          <div className="flex items-baseline justify-between gap-5">
            <h3 className="text-lg font-medium tracking-[-0.02em]">
              {project.name}
            </h3>
            <span className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-[11px]">
              {project.link ? ARROW_OUT : 'Private'}
            </span>
          </div>
          <p className="text-muted-foreground mt-2 max-w-[32rem] text-sm leading-6 text-pretty">
            {project.description}
          </p>
          <p className="text-muted-foreground mt-4 font-[family-name:var(--font-geist-mono)] text-[11px] leading-5">
            {project.platform.join(' · ')}
          </p>
        </div>
      </ProjectLink>
    </article>
  )
}

export default function JTCompany() {
  return (
    <main className="pb-4">
      <section
        className="reveal border-border border-b pt-16 pb-16 sm:pt-24 sm:pb-24"
        aria-labelledby="company-title"
      >
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_15rem] sm:items-end sm:gap-16">
          <div>
            <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-xs">
              Independent product studio · Barcelona
            </p>
            <h1
              id="company-title"
              className="mt-6 max-w-[40rem] text-5xl leading-[0.96] font-medium tracking-[-0.055em] text-balance sm:text-7xl"
            >
              JT Company
            </h1>
            <p className="text-muted-foreground mt-7 max-w-[38rem] text-lg leading-8 text-pretty">
              A small studio for useful digital products, founded and run by
              Julien Thomas. From the first brief to the last release.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="bg-foreground text-background flex aspect-square w-full max-w-40 items-end rounded-[10px] p-5 sm:max-w-none"
          >
            <span className="text-5xl leading-none font-medium tracking-[-0.08em] sm:text-7xl">
              JT
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium sm:mt-14">
          <a
            href="#work"
            className="editorial-underline inline-flex items-center gap-2"
          >
            See the work <span aria-hidden="true">↓</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="editorial-underline text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
          >
            Start a conversation <span aria-hidden="true">{ARROW_OUT}</span>
          </a>
        </div>
      </section>

      <section
        id="work"
        className="reveal reveal-delay-1 mt-16 scroll-mt-8 sm:mt-24"
        aria-labelledby="studio-work-title"
      >
        <SectionLabel id="studio-work-title">01 / Studio products</SectionLabel>
        <div className="mt-7 grid gap-x-8 gap-y-12 sm:mt-9 sm:grid-cols-2">
          {STUDIO_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section
        className="reveal reveal-delay-2 mt-20 sm:mt-28"
        aria-labelledby="client-work-title"
      >
        <SectionLabel id="client-work-title">
          02 / Client & team work
        </SectionLabel>
        <p className="mt-4 max-w-[38rem] text-base leading-7 text-pretty">
          Selected products delivered by Julien, independently and alongside
          specialist teams.
        </p>
        <div className="mt-7 grid gap-x-8 gap-y-12 sm:mt-9 sm:grid-cols-2">
          {CLIENT_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section
        className="reveal reveal-delay-3 mt-20 sm:mt-28"
        aria-labelledby="approach-title"
      >
        <SectionLabel id="approach-title">
          03 / How the studio works
        </SectionLabel>
        <div className="border-border mt-7 grid border-t sm:mt-9 sm:grid-cols-3">
          {[
            [
              '01',
              'Shape',
              'Turn a real need into a focused product and a practical plan.',
            ],
            [
              '02',
              'Build',
              'Design the system, write the product, and keep the feedback loop short.',
            ],
            [
              '03',
              'Ship',
              'Release to the web and app stores, then improve from real usage.',
            ],
          ].map(([number, title, copy]) => (
            <article
              key={number}
              className="border-border border-b py-6 sm:border-r sm:px-6 sm:py-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <p className="text-muted-foreground font-[family-name:var(--font-geist-mono)] text-[11px]">
                {number}
              </p>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-6 text-pretty">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="reveal reveal-delay-4 border-border mt-20 border-t pt-10 sm:mt-28 sm:pt-14"
        aria-labelledby="company-contact-title"
      >
        <SectionLabel id="company-contact-title">
          04 / Company & contact
        </SectionLabel>
        <div className="mt-5 grid gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-16">
          <div>
            <p className="max-w-[34rem] text-xl leading-8 font-medium tracking-[-0.02em] text-pretty sm:text-2xl sm:leading-9">
              Have a product to build, or a useful problem worth solving?
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="editorial-underline mt-6 inline-block text-base font-medium"
            >
              {EMAIL} <span aria-hidden="true">{ARROW_OUT}</span>
            </a>
          </div>
          <div className="text-muted-foreground text-sm leading-6">
            <p>
              JT Company is the independent product studio of Julien Thomas.
            </p>
            <p className="mt-3">Based in Barcelona, working across Europe.</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
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
          </div>
        </div>
      </section>
    </main>
  )
}
