import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SITE_NAME, WEBSITE_URL } from '@/lib/constants'

const title = 'Choose Your Team — Créez vos équipes au hasard'
const description =
  'Formez des équipes équitables en quelques secondes avec vos doigts. Gratuit sur iPhone et Android — hors ligne, sans publicité, sans inscription. Random finger team picker for pool, darts, padel & parties.'
const path = '/choose-your-team'
const imagePath = '/choose-your-team/opengraph-image'

const APP_STORE_LINK = 'https://apps.apple.com/app/id6756816697'
const PLAY_STORE_LINK =
  'https://play.google.com/store/apps/details?id=com.doncarlos.chooseyourteam'

export const metadata: Metadata = {
  title: {
    absolute: `${title} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: 'Choose Your Team',
  category: 'games',
  keywords: [
    "générateur d'équipes aléatoires",
    "créateur d'équipes",
    'répartir des joueurs',
    'équipes au hasard',
    'application iPhone',
    'application Android',
    'random team picker',
    'finger team chooser',
    'team generator app',
    'split into teams',
    'finger picker teams',
  ],
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    url: path,
    siteName: 'Choose Your Team',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    title,
    description,
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Choose Your Team — des équipes équitables en quelques secondes, gratuitement sur iPhone et Android',
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
  url: `${WEBSITE_URL}${path}`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  downloadUrl: [APP_STORE_LINK, PLAY_STORE_LINK],
  installUrl: [APP_STORE_LINK, PLAY_STORE_LINK],
  author: {
    '@type': 'Person',
    name: 'Julien Thomas',
    url: WEBSITE_URL,
  },
  featureList: [
    'One finger = one player',
    'Split into 2 to 5 random teams',
    'Multi-round mode for 6–10 players',
    'Works fully offline',
    'Free, no ads, no tracking',
    'Light and dark themes',
    'Haptic feedback',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Choose Your Team work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Everyone places one finger on the phone screen. Each finger is a player. Choose 2 to 5 groups, hold to reveal colors and team numbers, then lift to lock the result. No names to type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Choose Your Team free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The app is free on iPhone and Android, with no ads, no account, and no tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it work offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Choose Your Team works fully offline — ideal for bars, gyms, and places with poor signal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many players and teams are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Form 2 to 5 teams in a single round. For larger groups, multi-round mode supports 6 to 10 players with the same fairness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What games is it good for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pool, darts, foosball, table tennis, padel or tennis doubles, party games, icebreakers, and any quick matchup where nobody wants to pick teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment former des équipes aléatoires rapidement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chacun pose un doigt sur l’écran. Choisissez le nombre de groupes (2 à 5), maintenez pour révéler les couleurs, relâchez pour valider. Gratuit, hors ligne, sans publicité.',
      },
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {props.children}
    </>
  )
}
