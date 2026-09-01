import type { Metadata, Viewport } from 'next'
import {
  Atkinson_Hyperlegible_Mono,
  Instrument_Sans,
} from 'next/font/google'
import './globals.css'
import { ThemeProviderWrapper } from './theme-provider'
import { LayoutShell } from './layout-shell'
import { EMAIL, SOCIAL_LINKS } from './data'
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  WEBSITE_URL,
} from '@/lib/constants'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: WEBSITE_URL,
  image: `${WEBSITE_URL}/profile.jpg`,
  jobTitle: 'Full-stack developer',
  email: `mailto:${EMAIL}`,
  description: SITE_DESCRIPTION,
  homeLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barcelona',
      addressCountry: 'ES',
    },
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Selego',
    url: 'https://selego.co',
  },
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'Node.js'],
  sameAs: SOCIAL_LINKS.map((social) => social.link),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3eb' },
    { media: '(prefers-color-scheme: dark)', color: '#14110e' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: WEBSITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME}, full-stack developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@DonCarlospro',
    images: ['/twitter-image'],
  },
}

const instrumentSans = Instrument_Sans({
  variable: '--font-display',
  subsets: ['latin'],
})

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  adjustFontFallback: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${instrumentSans.variable} ${atkinsonMono.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProviderWrapper>
          <LayoutShell>{children}</LayoutShell>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
