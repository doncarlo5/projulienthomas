import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SITE_NAME } from '@/lib/constants'

const title = 'Choose Your Team — Random Team Picker'
const description =
  'Create fair random teams in seconds. Free on iPhone and Android, with no ads, no signup, and full offline support.'
const path = '/choose-your-team'
const imagePath = '/choose-your-team/opengraph-image'

export const metadata: Metadata = {
  title: {
    absolute: `${title} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: 'Choose Your Team',
  category: 'games',
  keywords: [
    'random team generator',
    'team picker',
    'group generator',
    'iPhone app',
    'Android app',
  ],
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    url: path,
    siteName: 'Choose Your Team',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    title,
    description,
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Choose Your Team — fair random teams in seconds, free on iPhone and Android',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imagePath],
  },
  other: {
    'apple-itunes-app': 'app-id=6756816697',
    'google-play-app': 'app-id=com.doncarlos.chooseyourteam',
    'al:ios:url': 'chooseyourteam://',
    'al:ios:app_store_id': '6756816697',
    'al:ios:app_name': 'Choose Your Team',
    'al:android:url': 'chooseyourteam://',
    'al:android:package': 'com.doncarlos.chooseyourteam',
    'al:android:app_name': 'Choose Your Team',
    'al:web:should_fallback': 'true',
  },
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Choose Your Team',
  applicationCategory: 'GameApplication',
  operatingSystem: 'iOS, Android',
  description,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  downloadUrl: 'https://projulienthomas.vercel.app/choose-your-team',
}

export default function ChooseYourTeamLayout(
  props: Readonly<{ children: ReactNode }>,
) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      {props.children}
    </>
  )
}
