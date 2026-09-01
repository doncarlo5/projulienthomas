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
  statement: string
  longDescription: string[]
  media: ProjectMedia[]
}

export type ProjectMedia = {
  src: string
  alt: string
  width: number
  height: number
  layout?: 'full' | 'half'
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
    role: 'Owned the ski school system end to end. Booking flow, admin panel, automated emails. Started at three devs, grew to six.',
    result: '1.15M visitors · 3.15M page views · +30% school revenue',
    caseStudyLink: '/blog/one-destination-plateform-laax-success-story',
    statement: 'One destination. Every mountain experience.',
    longDescription: [
      'LAAX brings a complex resort ecosystem into one product: inspiration, live mountain information, accommodation, tickets, ski school, retail, and the operational tools behind them.',
      'I owned the ski school system end to end, from product decisions and booking flows to the admin experience and automated communication. The work grew from a three-person delivery team into a six-person product team.',
    ],
    media: [
      {
        src: '/LAAX.webp',
        alt: 'LAAX resort homepage across a mountain landscape',
        width: 1800,
        height: 1052,
      },
      {
        src: '/laax/cover.jpg',
        alt: 'LAAX destination experience on desktop and mobile',
        width: 2400,
        height: 1600,
        layout: 'half',
      },
      {
        src: '/laax/cover1.jpg',
        alt: 'LAAX digital product interface detail',
        width: 1620,
        height: 1082,
        layout: 'half',
      },
      {
        src: '/laax/shop.webp',
        alt: 'LAAX online shop experience',
        width: 2000,
        height: 1200,
      },
      {
        src: '/laax/map.webp',
        alt: 'Interactive LAAX mountain map',
        width: 2200,
        height: 1329,
        layout: 'half',
      },
      {
        src: '/laax/sanity.webp',
        alt: 'LAAX content management interface',
        width: 2000,
        height: 1204,
        layout: 'half',
      },
      {
        src: '/laax/visitor-chart.png',
        alt: 'LAAX visitor growth chart',
        width: 2398,
        height: 1024,
      },
    ],
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
    name: 'Les Bonnes Recettes de Maman',
    description:
      'A family recipe archive built to preserve and share dishes across generations.',
    link: 'https://les-bonnes-recettes-de-maman.vercel.app/fr',
    image: '/les-bonnes-recettes-de-maman.jpg',
    imageAlt:
      'Les Bonnes Recettes de Maman recipe library with food photography and recipe cards',
    id: 'project9',
    category: 'personal',
    platform: ['Next.js', 'Convex', 'Vercel'],
    year: '2026',
    featured: true,
    role: 'Designed and built the product end to end: multilingual recipe library, guided cooking, community contributions, and publishing tools.',
    result: '38 family recipes published · French and English',
    statement: 'Family recipes, preserved for the next generation.',
    longDescription: [
      'A bilingual family archive that turns handwritten recipes and shared memories into a calm, practical cooking product.',
      'I designed and built the complete system: guided cooking, community contributions, multilingual publishing, and the tools that keep the collection growing.',
    ],
    media: [
      {
        src: '/les-bonnes-recettes-de-maman.jpg',
        alt: 'Family recipe library with food photography and recipe cards',
        width: 1728,
        height: 907,
      },
    ],
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
    statement: 'Modernising a live learning platform without standing still.',
    longDescription: [
      'Cercle des Langues pairs learners with live classes and a growing set of digital learning tools.',
      'Working in a four-person team, I am rebuilding the front end away from legacy Bootstrap while the Rails product continues serving its customers.',
    ],
    media: [
      {
        src: '/cercle-des-langues.png',
        alt: 'Cercle des Langues learning platform interface',
        width: 1150,
        height: 1150,
      },
    ],
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
    statement: 'Care workflows designed around practitioners, not software.',
    longDescription: [
      'Volvamed gives medical practitioners a focused place to manage schedules, patient relationships, and the daily work surrounding care.',
      'As sole developer, I lead architecture, product decisions, implementation, analytics, SEO, and the client relationship.',
    ],
    media: [
      {
        src: '/volvamed.png',
        alt: 'Volvamed practitioner scheduling interface',
        width: 1280,
        height: 1280,
      },
    ],
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
