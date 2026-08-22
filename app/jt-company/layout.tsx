import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { EMAIL, SOCIAL_LINKS } from '../data'
import { SITE_NAME, WEBSITE_URL } from '@/lib/constants'

const title = 'JT Company · Independent Product Studio'
const description =
  'JT Company is the independent product studio of Julien Thomas, building and shipping useful web and mobile products from Barcelona.'
const path = '/jt-company'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JT Company',
  alternateName: 'Julien Thomas Company',
  url: `${WEBSITE_URL}${path}`,
  founder: {
    '@type': 'Person',
    name: SITE_NAME,
    url: WEBSITE_URL,
  },
  email: `mailto:${EMAIL}`,
  description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressCountry: 'ES',
  },
  sameAs: SOCIAL_LINKS.map((social) => social.link),
}

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    url: path,
    siteName: 'JT Company',
    title,
    description,
    images: [
      {
        url: `${path}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'JT Company, independent product studio by Julien Thomas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${path}/opengraph-image`],
  },
}

export default function JTCompanyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {children}
    </>
  )
}
