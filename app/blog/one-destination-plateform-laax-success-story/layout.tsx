import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SITE_NAME } from '@/lib/constants'

const title = 'One Destination Platform: LAAX Success Story'
const description =
  'How a unified resort platform shipped three major launches, reached 6,000 daily visitors, and increased LAAX School revenue by 30%.'
const path = '/blog/one-destination-plateform-laax-success-story'

export const metadata: Metadata = {
  title: {
    absolute: `${title} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'article',
    url: path,
    title,
    description,
    images: [
      {
        url: '/laax/cover.jpg',
        width: 2400,
        height: 1600,
        alt: 'Snow-covered mountain landscape in LAAX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/laax/cover.jpg'],
  },
}

export default function LaaxArticleLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
