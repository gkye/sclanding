import Link from "next/link"
import ManifestoCard from "./app-showcase-card"
import type { Metadata } from 'next'

const description = 'We make apps.'

export const metadata: Metadata = {
  title: 'Lauper Labs',
  description: description,
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
  return (
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
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center container py-12">
        <Link href="/shotcal" className="hover:text-red">
         <ManifestoCard />
        </Link>
      </main>
    </div>
  )
}
