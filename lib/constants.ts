export const SITE_NAME = 'Julien Thomas'
export const SITE_TITLE = 'Julien Thomas · Full-Stack Developer'
export const SITE_DESCRIPTION =
  'Full-stack developer in Barcelona. I take projects end to end: architecture, product, and the client conversation.'

const DEFAULT_WEBSITE_URL = 'https://projulienthomas.vercel.app'

export const WEBSITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_WEBSITE_URL
).replace(/\/$/, '')
