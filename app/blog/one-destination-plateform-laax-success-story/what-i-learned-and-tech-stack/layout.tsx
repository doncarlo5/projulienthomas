import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const title = 'What I Learned Building the LAAX Platform'
const description =
  'Lessons from building the LAAX destination platform, plus the technical stack behind its marketing, commerce, and live resort experiences.'
const path =
  '/blog/one-destination-plateform-laax-success-story/what-i-learned-and-tech-stack'

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

export default function LaaxLearningsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
