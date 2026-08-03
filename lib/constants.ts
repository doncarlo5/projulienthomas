export const SITE_NAME = 'Julien Thomas'
export const SITE_TITLE = 'Julien Thomas — Full-Stack Developer'
export const SITE_DESCRIPTION =
  'Full-stack developer building thoughtful digital products, performant web experiences, and reliable platforms.'

const DEFAULT_WEBSITE_URL = 'https://julienthomas.vercel.app'

export const WEBSITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_WEBSITE_URL
).replace(/\/$/, '')
