import type { Metadata } from 'next'
import PeekLUTFilmPage from "@/components/PeekLUTFilmPage"

const baseUrl = 'https://lauperlabs.com'
const pageUrl = `${baseUrl}/peeklut`
const appStoreUrl = 'https://apps.apple.com/us/app/color-grade-video-peeklut/id6473661560'
const description = 'Professional color grading for iPhone. Edit photos & videos with LUTs, film emulation, halation, and grain. Export custom .cube LUTs for DaVinci Resolve & Premiere.'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
  alternates: {
    canonical: pageUrl,
  },
  icons: {
    icon: '/peeklut_app_icon.png',
    apple: '/peeklut_app_icon.png',
  },
  openGraph: {
    title: 'PeekLUT – Photo & Video LUT Editor for iOS',
    description,
    url: pageUrl,
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
  appLinks: {
    ios: {
      url: appStoreUrl,
      app_store_id: '6473661560',
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
    url: pageUrl,
    downloadUrl: appStoreUrl,
    image: `${baseUrl}/peeklut_app_icon.png`,
    inLanguage: 'en-US',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: description,
    featureList: [
      'Import and preview .cube LUTs on iPhone',
      'Edit photos and videos with the same color grading workflow',
      'Build film looks with grain, halation, bloom, and color controls',
      'Use linear and radial masks for selective adjustments',
      'Export a finished look as a .cube LUT for desktop editors',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '346',
    },
    author: {
      '@type': 'Organization',
      name: 'Lauper Labs',
      url: baseUrl,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is PeekLUT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PeekLUT is an iPhone photo and video color grading app for importing LUTs, building film looks, applying masks, and exporting finished grades as .cube LUT files.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can PeekLUT export LUTs for desktop editors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. PeekLUT can convert your adjustments into .cube LUT files that can be used in editors such as DaVinci Resolve and Adobe Premiere Pro.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does PeekLUT work with photos and videos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. PeekLUT supports both photo and video editing, with real-time preview, LUT stacking, film effects, masks, and export controls.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PeekLUTFilmPage />
    </>
  )
}
