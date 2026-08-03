import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const title = 'Choose Your Team Privacy Policy'
const description =
  'Privacy policy for the Choose Your Team mobile app, which works offline and does not collect personal data.'
const path = '/choose-your-team/privacy-policy'

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

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children
}
