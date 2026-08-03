import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const title = 'Handle CMS Content with Next.js and Sanity'
const description =
  'A practical walkthrough of tag-based revalidation for keeping Sanity CMS content fresh in a cached Next.js App Router site.'
const path = '/blog/handle-sanity-content-with-a-nextjs-website-ssr'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'article',
    url: path,
    title,
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Julien Thomas — full-stack developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/twitter-image'],
  },
}

export default function SanityArticleLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
