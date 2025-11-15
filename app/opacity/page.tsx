import Link from "next/link"
import Image from "next/image"
import { Sliders, Sparkles, Image as ImageIcon, Zap, Download, Smartphone } from "lucide-react"
import type { Metadata } from 'next'
import WaterfallGallery from "./components/WaterfallGallery"

const description = 'Transform your photos with real-time filter adjustments. Control brightness, temperature, saturation, and contrast with precision.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lauperlabs.com'),
  title: 'Opacity – Photo Filter & Adjustment App for iOS',
  description,
  keywords: [
    'Opacity', 'photo editor', 'filter app iOS', 'brightness', 'contrast', 'saturation', 'temperature', 'photo filters', 'image adjustment', 'iPhone photo editor'
  ],
  authors: [{ name: 'Lauper Labs' }],
  creator: 'Lauper Labs',
  publisher: 'Lauper Labs',
  applicationName: 'Opacity',
  category: 'Photo & Video',
  icons: {
    icon: '/opacity_app_icon.svg',
    apple: '/opacity_app_icon.svg',
  },
  openGraph: {
    title: 'Opacity – Photo Filter & Adjustment App for iOS',
    description,
    url: 'https://lauperlabs.com/opacity',
    siteName: 'Opacity',
    locale: 'en_US',
    type: 'website',
    images: [
      { url: '/opacity_screenshot.svg', width: 1200, height: 630, alt: 'Opacity – iOS Photo Filter App' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opacity – Photo Filter & Adjustment App for iOS',
    description,
    images: ['/opacity_screenshot.svg'],
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

export default function OpacityLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/opacity_app_icon.svg"
                alt="Opacity Icon"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg overflow-hidden"
              />
            </div>
            <span className="text-xl font-bold">Opacity</span>
          </div>

          <nav className="hidden md:flex gap-8"></nav>

          <div className="flex items-center gap-2">
            <Link href="https://apps.apple.com/us/app/opacity">
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
        {/* Hero Section with Split Layout */}
        <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/grain.jpg?height=1080&width=1920" alt="Background" fill className="object-cover opacity-20" priority />
            {/* Gradient overlays */}
            <div className="absolute -top-20 left-1/4 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(139,92,246,0.18),transparent)] blur-2xl" />
            <div className="absolute -bottom-24 right-[-10%] h-72 w-[36rem] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(168,85,247,0.12),transparent)] blur-2xl" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            {/* Title Section */}
            <div className="mx-auto max-w-5xl text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">Adjust.</span>
                <br />
                <span className="bg-gradient-to-r from-violet-200 via-purple-300 to-violet-200 bg-clip-text text-transparent">Filter. Perfect.</span>
              </h1>
              <p className="mt-3 text-lg md:text-xl text-white/80">Real-time photo adjustments with precision control over brightness, temperature, saturation, and contrast.</p>
            </div>

            {/* Split Layout: Screenshot Left, Waterfall Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left: Main Screenshot */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] ring-1 ring-white/10 shadow-[0_10px_40px_-20px_rgba(168,85,247,0.45)]">
                    <Image src="/opacity_screenshot.svg" alt="Opacity app screenshot" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Right: Waterfall Gallery with Auto-scroll and Filters */}
              <div className="relative h-[600px] rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <WaterfallGallery />
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="https://apps.apple.com/us/app/opacity" className="inline-flex items-center justify-center">
                <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=80&width=200" alt="Download on the App Store" width={200} height={80} className="h-[60px] w-auto" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-t border-white/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center">Powerful photo adjustments at your fingertips</h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Sliders className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Precision Controls</h3>
                    <p className="text-sm text-white/70">Fine-tune brightness, contrast, saturation, and temperature with intuitive sliders</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Real-Time Preview</h3>
                    <p className="text-sm text-white/70">See your changes instantly as you adjust filters for perfect results</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Non-Destructive Editing</h3>
                    <p className="text-sm text-white/70">Your original photos are always preserved and safe</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
                    <p className="text-sm text-white/70">Optimized performance for smooth, lag-free editing experience</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Download className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Easy Export</h3>
                    <p className="text-sm text-white/70">Save and share your enhanced photos in high quality</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">iPhone Optimized</h3>
                    <p className="text-sm text-white/70">Designed specifically for iOS with native performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Adjustments Section */}
        <section className="w-full py-12 md:py-16 bg-white/[0.02] border-t border-white/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-center mb-8">Complete control over every aspect</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Brightness</h3>
                      <p className="text-sm text-white/70">Make your photos lighter or darker with precise control over exposure levels</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                      <span className="text-2xl">🌡️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Temperature</h3>
                      <p className="text-sm text-white/70">Adjust color temperature from cool blues to warm oranges for the perfect mood</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Saturation</h3>
                      <p className="text-sm text-white/70">Control color intensity from vibrant and bold to subtle and muted</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Contrast</h3>
                      <p className="text-sm text-white/70">Enhance the difference between lights and darks for more dynamic photos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-20 border-t border-white/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to perfect your photos?</h2>
              <p className="text-lg text-white/70">Download Opacity today and start creating stunning images with professional-grade adjustments.</p>
              <div className="flex justify-center">
                <Link href="https://apps.apple.com/us/app/opacity" className="inline-flex items-center justify-center">
                  <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=80&width=200" alt="Download on the App Store" width={200} height={80} className="h-[60px] w-auto" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/opacity_app_icon.svg" alt="Opacity Icon" width={24} height={24} className="h-6 w-6 rounded-md overflow-hidden" />
            <p className="text-sm font-medium">© {new Date().getFullYear()} Opacity. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/opacity/privacy" className="text-xs text-white/70 hover:text-white">Privacy Policy</Link>
            <Link href="/opacity/terms" className="text-xs text-white/70 hover:text-white">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
