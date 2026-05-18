import Link from "next/link"
import ManifestoCard from "./app-showcase-card"
import type { Metadata } from 'next'

const siteUrl = "https://lauperlabs.com"
const description =
  "Lauper Labs is an independent iOS app studio building focused creative and productivity tools: PeekLUT, Opacity, ShotCal, StemLab, and ShutterCraft."

const apps = [
  {
    name: "PeekLUT",
    url: `${siteUrl}/peeklut`,
    description: "Photo and video color grading with LUTs, film emulation, masks, and .cube LUT export.",
  },
  {
    name: "Opacity",
    url: `${siteUrl}/opacity`,
    description: "Batch photo and video editing for iPhone with LUTs, cinematic presets, and fast export.",
  },
  {
    name: "ShotCal",
    url: `${siteUrl}/shotcal`,
    description: "AI screenshot-to-calendar conversion for iPhone events, flyers, invites, and messages.",
  },
  {
    name: "StemLab",
    url: `${siteUrl}/stemlab`,
    description: "On-device AI stem separation for vocals, drums, bass, guitar, piano, and other stems.",
  },
  {
    name: "ShutterCraft",
    url: `${siteUrl}/shuttercraft`,
    description: "Professional iPhone video recording with planned timelines, focus peaking, LUTs, and exposure tools.",
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lauper Labs',
  description: description,
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "Lauper Labs" }],
  creator: "Lauper Labs",
  publisher: "Lauper Labs",
  generator: 'Lauper Site',
  icons: {
    icon: [
      { url: '/favicon_lauper.ico' },
      { url: '/favicon_lauper.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_lauper.png' },
    ],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon_lauper.png',
    },
  },
  
   openGraph: {
    title: 'Lauper Labs',
    description: description,
    url: 'https://lauperlabs.com',
    siteName: 'Lauper Labs',
    locale: 'en_US',
    type: 'website',
  },
  // Add Twitter card tags
  twitter: {
    card: 'summary_large_image',
    title: 'Lauper Labs.',
    description: description,
  },
}


export default function LandingPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Lauper Labs",
      url: siteUrl,
      logo: `${siteUrl}/favicon_lauper.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Lauper Labs iOS apps",
      itemListElement: apps.map((app, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: app.name,
          operatingSystem: "iOS",
          url: app.url,
          description: app.description,
          author: {
            "@type": "Organization",
            name: "Lauper Labs",
            url: siteUrl,
          },
        },
      })),
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-bold text-white/120 hover:text-white">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* <Image 
                src="/icon.svg"
                alt="ShutterCraft Icon"
                width={32}
                height={32}
                className="h-8 w-8"
              /> */}
            </div>
            <span className="text-xl font-bold">LauperLabs</span>
          </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/shotcal" className="text-lg font-bold text-white/120 hover:text-white">
              Download ShotCal
            </Link>
            <Link href="/peeklut" className="text-lg font-bold text-white/120 hover:text-white">
              Download PeekLUT
            </Link>
            <Link href="/stemlab" className="text-lg font-bold text-white/120 hover:text-white">
              Download StemLab
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center container py-12">
        <ManifestoCard />
      </main>
      </div>
    </>
  )
}
