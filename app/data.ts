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
  role: string
  outcome: string
  impact: string
  impactLabel?: 'Impact' | 'Scope'
  year: string
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
      'A single destination platform for discovering, booking, and navigating a Swiss mountain resort.',
    link: 'https://laax.com/',
    image: '/LAAX.webp',
    imageAlt:
      'Screenshot of the LAAX resort homepage with a mountain landscape and navigation',
    id: 'project1',
    category: 'professional',
    platform: ['Next.js', 'Sanity', 'MapLibre'],
    year: '2024–2026',
    featured: true,
    role: 'Product-minded full-stack developer',
    outcome:
      'Three launches brought marketing, commerce, school bookings, and live mountain services into one product.',
    impact:
      '1.15m visitors, 3.15m page views, and 30% year-on-year growth in school revenue.',
    caseStudyLink: '/blog/one-destination-plateform-laax-success-story',
  },
  {
    name: 'Hero App',
    description: 'A focused strength-training companion for tracking progress.',
    link: 'https://hero-app.org/',
    image: '/hero.png',
    imageAlt: 'Hero App workout tracking interface on a mobile phone',
    id: 'project3',
    category: 'personal',
    platform: ['Vite', 'Expo', 'iOS', 'Android'],
  },
  {
    name: 'Dunk Hunt',
    description:
      'A browser game inspired by the rhythm and charm of the NES era.',
    link: 'https://duck-hunt-seven.vercel.app/',
    image: '/duck.png',
    imageAlt: 'Pixel-art Dunk Hunt browser game in play',
    id: 'project4',
    category: 'personal',
    platform: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Choose Your Team',
    description:
      'A touch-first game that divides a group into teams in seconds.',
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
      'A digital learning platform connecting language students with tailored training.',
    link: 'https://www.cercledeslangues.com/',
    image: '/cercle-des-langues.png',
    imageAlt: 'Screenshot of the Cercle des Langues marketing homepage',
    id: 'project8',
    category: 'professional',
    platform: ['Ruby on Rails', 'Vite'],
    year: '2026',
    featured: true,
    role: 'Full-stack developer',
    outcome: 'Contributed full-stack development to its learning platform.',
    impact: 'Ruby on Rails application work with a Vite-powered frontend.',
    impactLabel: 'Scope',
  },
  {
    name: 'Volvamed',
    description:
      'A medical product designed to make complex care workflows easier to navigate.',
    link: 'https://volvamed.fr/',
    image: '/volvamed.png',
    imageAlt:
      'Screenshot of the Volvamed therapist agenda with scheduled appointments',
    id: 'project7',
    category: 'professional',
    platform: ['React', 'Express', 'Brevo', 'Sentry'],
    year: '2026',
    featured: true,
    role: 'Full-stack developer',
    outcome: 'Contributed full-stack development to its digital care platform.',
    impact:
      'Work across the React interface, Express services, email delivery, and error monitoring.',
    impactLabel: 'Scope',
  },
  {
    name: 'Selegrow',
    description:
      'A prospecting tool that turns LinkedIn workflows into repeatable campaigns.',
    image: '/selegrow.png',
    imageAlt: 'Selegrow campaign and prospect management interface',
    id: 'project6',
    category: 'professional',
    platform: ['Vite', 'Expo', 'Express'],
  },
  {
    name: 'Céhèrem',
    description:
      'A CRM for guiding customers through the business-creation process.',
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
    title: 'Full-stack developer',
    start: '2023',
    end: 'Present',
    link: 'https://selego.co',
    id: 'work1',
  },
  {
    company: 'Saint-Gobain',
    title: 'Solutions integration manager · Northern France',
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
    description:
      'A practical walkthrough of Sanity webhooks and tag revalidation.',
    link: '/blog/handle-sanity-content-with-a-nextjs-website-ssr',
    uid: 'blog-4',
    year: '2026',
  },
  {
    title: 'One destination platform: the LAAX story',
    description:
      'Three launches, a mountain of stakeholders, and the results behind the build.',
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
