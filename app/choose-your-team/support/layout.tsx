import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const title = 'Choose Your Team Support'
const description =
  'Help, compatibility information, and contact details for the Choose Your Team mobile app.'
const path = '/choose-your-team/support'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    url: path,
    title,
    description,
    images: [
      {
        url: '/choose-your-team.png',
        width: 1206,
        height: 2622,
        alt: 'Choose Your Team mobile app',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/choose-your-team.png'],
  },
}

export default function SupportLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
