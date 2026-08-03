import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const title = 'LAAX Platform Results and KPIs'
const description =
  'Traffic, device usage, booking behavior, and post-purchase satisfaction data from the LAAX destination platform.'
const path =
  '/blog/one-destination-plateform-laax-success-story/what-the-data-says'

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

export default function LaaxDataLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
