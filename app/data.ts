type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
  category: 'professional' | 'personal'
  platform: string[]
}

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
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'LAAX',
    description: 'Ski resort in Switzerland',
    link: 'https://laax.com/',
    // video:
    //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image: './LAAX.png',
    id: 'project1',
    category: 'professional',
    platform: ['nextjs', 'sanity', 'apple', 'playstore'],
  },
  {
    name: 'Céhèrem',
    description: 'CRM to manage business creation process',
    link: 'https://ceherem.com/',
    image: './CRM.png',
    id: 'project2',
    category: 'professional',
    platform: ['vite', 'express'],
  },
  {
    name: 'Hero App',
    description: 'A fitness app to track your progress at the gym.',
    link: 'https://hero-app.org/',
    image: './hero.png',
    id: 'project3',
    category: 'personal',
    platform: ['vite', 'expo', 'apple', 'playstore'],
  },
  {
    name: 'Dunk Hunt',
    description: 'Self made game inspired by the famous game on NES',
    link: 'https://duck-hunt-seven.vercel.app/',
    image: './duck.png',
    id: 'project4',
    category: 'personal',
    platform: ['html5', 'css'],
  },
  {
    name: 'Choose Your Team',
    description: 'A game to choose your team',
    link: '/choose-your-team',
    image: './choose-your-team.png',
    id: 'project5',
    category: 'personal',
    platform: ['apple', 'playstore'],
  },
  {
    name: 'Selegrow',
    description: 'LinkedIn automation tool',
    link: 'https://app.grow.selego.co/',
    image: './selegrow.png',
    id: 'project6',
    category: 'professional',
    platform: ['vite', 'expo', 'express'],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Selego',
    title: 'Full Stack Developer',
    start: '2023',
    end: 'Present',
    link: 'https://selego.co',
    id: 'work1',
  },
  {
    company: 'Saint-Gobain',
    title: 'Solutions Integration Manager - Northern France',
    start: '2022',
    end: '2023',
    link: 'https://saint-gobain.com',
    id: 'work2',
  },
  {
    company: 'Saint-Gobain PAM',
    title: 'Sales & Specification Engineer',
    start: '2020',
    end: '2018',
    link: 'https://saint-gobain.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'One Destination Plateform: LAAX Success Story',
    description:
      'A look back at my experience of building the LAAX platform and what I learned',
    link: '/blog/one-destination-plateform-laax-success-story',
    uid: 'blog-3',
  },
  {
    title: 'What I learned from my experience of sales',
    description: 'A look back at my experience of sales and what I learned',
    link: '/blog/what-i-learned-from-my-experience-of-sales',
    uid: 'blog-2',
  },
  {
    title: 'Why I left my job to start a developer career',
    description:
      'A deep dive into my decision to leave my job and start a developer career',
    link: '/blog/why-i-left-my-job-to-start-a-developer-career',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/doncarlo5',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/DonCarlospro',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/julienthomaspro',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/julienths_____',
  },
]

export const EMAIL = 'pro.julien.thomas@gmail.com'
