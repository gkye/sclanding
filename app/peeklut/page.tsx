import Link from "next/link"
import Image from "next/image"
import { Eye, Palette, Zap, Download, Share, Smartphone } from "lucide-react"
import type { Metadata } from 'next'
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"
import PeeklutCarousel from "@/components/PeeklutCarousel"

const description = 'Your gateway to a new realm of video enhancement. Apply multiple LUTs, add masks and grain, make precise adjustments, and export filters to LUT—fast.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lauperlabs.com'),
  title: 'PeekLUT – Photo & Video LUT Editor for iOS',
  description,
  keywords: [
    'PeekLUT', 'LUT editor', 'LUT app iOS', 'video color grading', 'photo color grading', 'cube LUT', 'haldclut', 'export LUT', 'masks', 'grain', 'color adjustments', 'iPhone video editor'
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
      { url: '/peeklut_screenshot.png', width: 1200, height: 630, alt: 'PeekLUT – iOS LUT Editor' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeekLUT – Photo & Video LUT Editor for iOS',
    description,
    images: ['/peeklut_screenshot.png'],
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
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header (match ShotCal) */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image 
                src="/peeklut_app_icon.png"
                alt="PeekLUT Icon"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg overflow-hidden"
              />
            </div>
            <span className="text-xl font-bold">PeekLUT</span>
          </div>

          <nav className="hidden md:flex gap-8"></nav>

          <div className="flex items-center gap-2">
            <Link href="https://apps.apple.com/us/app/peeklut-photo-video-editor/id6473661560">
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=40&width=200"
                alt="Download on the App Store"
                width={200}
                height={40}
                className="h-[40px] w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-4 md:py-8 lg:py-12 xl:py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/grain.jpg?height=1080&width=1920" alt="Background" fill className="object-cover opacity-20" priority />
            {/* Polished gradient ribbons */}
            <div className="absolute -top-20 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(148,163,184,0.18),transparent)] blur-2xl" />
            <div className="absolute -bottom-24 right-[-10%] h-72 w-[36rem] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,102,241,0.12),transparent)] blur-2xl" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">Color grade</span>
                <br />
                <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-clip-text text-transparent">beautifully. simply. fast.</span>
              </h1>
              <p className="mt-3 text-lg md:text-xl text-white/80">Apply multiple LUTs, add masks and grain, make precise adjustments, and export filters to LUT.</p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[280px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] ring-1 ring-white/10 shadow-[0_10px_40px_-20px_rgba(148,163,184,0.45)]">
                  <Image src="/peeklut_screenshot.png?height=800&width=600" alt="App screenshot" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="https://apps.apple.com/us/app/peeklut-photo-video-editor/id6473661560" className="inline-flex items-center justify-center">
                <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=80&width=200" alt="Download on the App Store" width={200} height={80} className="h-[60px] w-auto" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* See it in action - Before/After Carousel (moved up) */}
        <section id="gallery" className="w-full border-t border-white/10 bg-gradient-to-b from-black via-black to-black py-8 md:py-14 lg:py-18">
          <div className="container px-4 md:px-6">
            <PeeklutCarousel />

            <div className="mt-10 flex justify-center">
              <Link href="https://apps.apple.com/us/app/peeklut-photo-video-editor/id6473661560" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow hover:bg-white/90 transition">
                Get PeekLUT
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-t border-white/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center">What you can do</h2>

              {[
                {
                  title: 'Apply and combine multiple LUTs',
                  desc: 'Layer creative and technical LUTs with live preview. Build complex looks and tweak each layer non‑destructively.',
                  image: '/peeklut_before.jpeg',
                },
                {
                  title: 'Export filters to LUT',
                  desc: 'Turn your final look into a reusable .cube LUT to share or use in desktop editors like DaVinci Resolve.',
                  image: '/peek_lut_after.jpeg',
                },
                {
                  title: 'Masks and precise adjustments',
                  desc: 'Target regions with shape and feather controls. Adjust exposure, contrast, temperature, hue, saturation, and more.',
                  image: '/peeklut_before.jpeg',
                },
                {
                  title: 'Film grain and photo/video support',
                  desc: 'Add authentic film grain with adjustable intensity. Grade both photos and videos for a cohesive aesthetic.',
                  image: '/peek_lut_after.jpeg',
                },
              ].map((f, idx) => (
                <div key={idx} className={`grid items-center gap-6 md:grid-cols-2 ${idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  {/* Media */}
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 ring-1 ring-white/10">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Image src={f.image} alt="Feature preview" fill className="object-cover" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-tight">{f.title}</h3>
                    <p className="text-white/70">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer (unchanged) */}
      <footer className="w-full border-t border-white/10 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/peeklut_app_icon.png" alt="PeekLUT Icon" width={24} height={24} className="h-6 w-6 rounded-md overflow-hidden" />
            <p className="text-sm font-medium">© {new Date().getFullYear()} PeekLUT. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/peeklut/privacy" className="text-xs text-white/70 hover:text-white">Privacy Policy</Link>
            <Link href="/peeklut/terms" className="text-xs text-white/70 hover:text-white">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/70" />
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-white/70">{desc}</div>
      </div>
    </li>
  )
}
