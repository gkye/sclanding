import type { Metadata } from "next"
import StemLabLandingPage from "@/components/StemLabLandingPage"
import {
  APP_NAME,
  APP_META_DESCRIPTION,
  APP_STORE_URL,
  KEYWORDS,
  PAGE_URL,
  SITE_URL,
} from "@/lib/stemlab"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "StemLab – AI Stem Separator for iOS",
  description: APP_META_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "Lauper Labs" }],
  creator: "Lauper Labs",
  publisher: "Lauper Labs",
  applicationName: APP_NAME,
  category: "Music",
  alternates: { canonical: "/stemlab" },
  icons: {
    icon: "/stemlab_app_icon.png",
    apple: "/stemlab_app_icon.png",
  },
  openGraph: {
    title: "StemLab – AI Stem Separator for iOS",
    description: APP_META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "StemLab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/stemlab_app_icon.png",
        width: 1024,
        height: 1024,
        alt: "StemLab – iOS Stem Separator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StemLab – AI Stem Separator for iOS",
    description: APP_META_DESCRIPTION,
    images: ["/stemlab_app_icon.png"],
    creator: "@lauperlabs",
    site: "@lauperlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function StemLabPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    operatingSystem: "iOS",
    applicationCategory: "MusicApplication",
    description: APP_META_DESCRIPTION,
    image: `${SITE_URL}/stemlab_app_icon.png`,
    // TODO: replace with real App Store URL on launch
    url: APP_STORE_URL === "#" ? PAGE_URL : APP_STORE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Lauper Labs",
      url: SITE_URL,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StemLabLandingPage />
    </>
  )
}
