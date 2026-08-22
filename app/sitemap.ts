import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

const routes = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  {
    path: '/blog/handle-sanity-content-with-a-nextjs-website-ssr',
    changeFrequency: 'yearly',
    priority: 0.7,
  },
  {
    path: '/blog/one-destination-plateform-laax-success-story',
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  {
    path: '/blog/one-destination-plateform-laax-success-story/what-i-learned-and-tech-stack',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    path: '/blog/one-destination-plateform-laax-success-story/what-the-data-says',
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  { path: '/choose-your-team', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/jt-company', changeFrequency: 'monthly', priority: 0.9 },
  {
    path: '/choose-your-team/privacy-policy',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    path: '/choose-your-team/support',
    changeFrequency: 'monthly',
    priority: 0.4,
  },
] satisfies Array<{
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
}>

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, WEBSITE_URL).toString(),
    changeFrequency,
    priority,
  }))
}
