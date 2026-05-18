import type { Metadata } from "next"
import StemLabLandingPage from "@/components/StemLabLandingPage"
import {
  APP_NAME,
  APP_META_DESCRIPTION,
  APP_STORE_ID,
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
  appLinks: {
    ios: {
      url: APP_STORE_URL,
      app_store_id: APP_STORE_ID,
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
    url: PAGE_URL,
    downloadUrl: APP_STORE_URL,
    inLanguage: "en-US",
    featureList: [
      "Split songs into vocals, drums, bass, guitar, piano, and other stems",
      "Run stem separation on-device without uploading audio",
      "Mix stems with solo, mute, volume, and timeline controls",
      "Add per-stem effects including pitch, reverb, delay, compressor, EQ, and saturation",
      "Export individual stems or stereo mixes as WAV, FLAC, or M4A",
    ],
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What stems can StemLab separate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StemLab can separate a song into vocals, drums, bass, guitar, piano, and other stems. You can choose 4-stem or 6-stem separation depending on the source track and workflow.",
        },
      },
      {
        "@type": "Question",
        name: "Does StemLab upload my songs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. StemLab runs separation, mixing, effects, and rendering on your iPhone, so your audio does not need to be uploaded to a cloud server.",
        },
      },
      {
        "@type": "Question",
        name: "What file formats does StemLab support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StemLab imports common audio and video files including MP3, WAV, FLAC, M4A, MP4, and MOV up to 500 MB, and exports stems or mixdowns as WAV, FLAC, or M4A.",
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
      <StemLabLandingPage />
    </>
  )
}
