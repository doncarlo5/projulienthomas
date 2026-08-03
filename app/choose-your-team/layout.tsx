import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SITE_NAME } from '@/lib/constants'

const title = 'Choose Your Team — Random Team Picker'
const description =
  'Split a group into random teams in seconds by placing fingers on the screen. Available for iOS and Android.'
const path = '/choose-your-team'

export const metadata: Metadata = {
  title: {
    absolute: `${title} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
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

export default function ChooseYourTeamLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
