import type { Metadata } from 'next'
import PeekLUTFilmPage from "@/components/PeekLUTFilmPage"

const description = 'Professional color grading for iPhone. Edit photos & videos with LUTs, film emulation, halation, and grain. Export custom .cube LUTs for DaVinci Resolve & Premiere.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lauperlabs.com'),
  title: 'PeekLUT – Photo & Video LUT Editor for iOS',
  description,
  keywords: [
    'PeekLUT', 'LUT editor', 'LUT app iOS', 'video color grading', 'photo color grading', 'cube LUT', 'haldclut', 'export LUT', 'masks', 'grain', 'color adjustments', 'iPhone video editor',
    'film emulation iPhone', 'cinematic video editor', 'color grade video app', 'import cube luts ios', 'video filters app', 'davinci resolve lut export', 'mobile color grading', 'halation effect', 'film grain app'
  ],
  authors: [{ name: 'Lauper Labs' }],
  creator: 'Lauper Labs',
  publisher: 'Lauper Labs',
  applicationName: 'PeekLUT',
  category: 'Video',
  icons: {
    icon: '/peeklut_app_icon.png',
    apple: '/peeklut_app_icon.png',
  },
  openGraph: {
    title: 'PeekLUT – Photo & Video LUT Editor for iOS',
    description,
    url: 'https://lauperlabs.com/peeklut',
    siteName: 'PeekLUT',
    locale: 'en_US',
    type: 'website',
    images: [
      { url: '/peeklut_app_icon.png', width: 512, height: 512, alt: 'PeekLUT – iOS LUT Editor' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeekLUT – Photo & Video LUT Editor for iOS',
    description,
    images: ['/peeklut_app_icon.png'],
    creator: '@lauperlabs',
    site: '@lauperlabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PeekLUTLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PeekLUT',
    operatingSystem: 'iOS',
    applicationCategory: 'PhotoVideoApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '346',
    },
    image: 'https://lauperlabs.com/peeklut_app_icon.png',
    url: 'https://lauperlabs.com/peeklut',
    author: {
      '@type': 'Organization',
      name: 'Lauper Labs',
      url: 'https://lauperlabs.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PeekLUTFilmPage />
    </>
  )
}
