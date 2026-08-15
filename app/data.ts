type ProjectBase = {
  name: string
  description: string
  link?: string
  image?: string
  imageAlt?: string
  id: string
  category: 'professional' | 'personal'
  platform: string[]
}

export type FeaturedProject = ProjectBase & {
  featured: true
  link: string
  image: string
  imageAlt: string
  year: string
  role: string
  result?: string
  caseStudyLink?: string
}

type ArchiveProject = ProjectBase & {
  featured?: false
}

export type Project = FeaturedProject | ArchiveProject

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  year: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'LAAX',
    description:
      'One platform for a Swiss mountain resort: booking, ski school, live mountain data.',
    link: 'https://laax.com/',
    image: '/LAAX.webp',
    imageAlt:
      'Screenshot of the LAAX resort homepage with a mountain landscape and navigation',
    id: 'project1',
    category: 'professional',
    platform: ['Next.js', 'Sanity', 'MapLibre'],
    year: '2024–2026',
    featured: true,
    role: 'Owned the ski school system end to end — booking flow, admin panel, automated emails. Started at three devs, grew to six.',
    result: '1.15M visitors · 3.15M page views · +30% school revenue',
    caseStudyLink: '/blog/one-destination-plateform-laax-success-story',
  },
  {
    name: 'Hero App',
    description:
      'Strength-training tracker. Built to replace my paper notebook.',
    link: 'https://hero-app.org/',
    image: '/hero.png',
    imageAlt: 'Hero App workout tracking interface on a mobile phone',
    id: 'project3',
    category: 'personal',
    platform: ['Vite', 'Expo', 'iOS', 'Android'],
  },
  {
    name: 'Dunk Hunt',
    description: 'NES-era browser game.',
    link: 'https://duck-hunt-seven.vercel.app/',
    image: '/duck.png',
    imageAlt: 'Pixel-art Dunk Hunt browser game in play',
    id: 'project4',
    category: 'personal',
    platform: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Choose Your Team',
    description: 'Splits a group into teams with one touch.',
    link: '/choose-your-team',
    image: '/choose-your-team.png',
    imageAlt: 'Choose Your Team mobile app assigning players to colored teams',
    id: 'project5',
    category: 'personal',
    platform: ['iOS', 'Android'],
  },
  {
    name: 'Cercle des Langues',
    description:
      'Language-learning platform pairing students with live classes.',
    link: 'https://www.cercledeslangues.com/',
    image: '/cercle-des-langues.png',
    imageAlt: 'Screenshot of the Cercle des Langues marketing homepage',
    id: 'project8',
    category: 'professional',
    platform: ['Ruby on Rails', 'React', 'TypeScript', 'Bun'],
    year: '2026',
    featured: true,
    role: 'Rebuilding the front end off legacy Bootstrap onto a modern stack, in a team of four on a Rails backend.',
    result: 'Shipping September 2026',
  },
  {
    name: 'Volvamed',
    description: 'Scheduling and care workflows for medical practitioners.',
    link: 'https://volvamed.fr/',
    image: '/volvamed.png',
    imageAlt:
      'Screenshot of the Volvamed therapist agenda with scheduled appointments',
    id: 'project7',
    category: 'professional',
    platform: ['React', 'Express', 'PostHog', 'Sentry'],
    year: '2026',
    featured: true,
    role: 'Sole developer. Architecture, product, analytics, SEO, and the client relationship.',
    result: 'In production · 10 therapists · 400+ of their clients',
  },
  {
    name: 'Selegrow',
    description: 'LinkedIn prospecting as repeatable campaigns.',
    image: '/selegrow.png',
    imageAlt: 'Selegrow campaign and prospect management interface',
    id: 'project6',
    category: 'professional',
    platform: ['Vite', 'Expo', 'Express'],
  },
  {
    name: 'Céhèrem',
    description: 'CRM for business-creation advisors.',
    link: 'https://ceherem.com/',
    image: '/CRM.png',
    imageAlt: 'Céhèrem customer relationship management dashboard',
    id: 'project2',
    category: 'professional',
    platform: ['Vite', 'Express'],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Selego',
    title: 'Full-stack developer · Amsterdam, then Barcelona',
    start: '2023',
    end: 'Present',
    link: 'https://selego.co',
    id: 'work1',
  },
  {
    company: 'Saint-Gobain Solutions',
    title: 'Prescription & lobbying · Construction industry',
    start: '2022',
    end: '2023',
    link: 'https://saint-gobain.com',
    id: 'work2',
  },
  {
    company: 'Saint-Gobain PAM',
    title: 'Sales & specification engineer',
    start: '2018',
    end: '2022',
    link: 'https://saint-gobain.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Handling CMS content with Next.js and SSR',
    description: 'Sanity webhooks and tag revalidation.',
    link: '/blog/handle-sanity-content-with-a-nextjs-website-ssr',
    uid: 'blog-4',
    year: '2026',
  },
  {
    title: 'One destination platform: the LAAX story',
    description: 'Three launches, and the numbers behind them.',
    link: '/blog/one-destination-plateform-laax-success-story',
    uid: 'blog-3',
    year: '2026',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/doncarlo5',
  },
  {
    label: 'X / Twitter',
    link: 'https://twitter.com/DonCarlospro',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/julienthomaspro',
  },
]

export const EMAIL = 'pro.julien.thomas@gmail.com'
