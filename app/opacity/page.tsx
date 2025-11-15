import Link from "next/link"
import Image from "next/image"
import { Sliders, Eye, Zap, Download, Smartphone, Images, Film, Palette, Sparkles, Clock, Lock, Camera, Video, Star } from "lucide-react"
import type { Metadata } from 'next'
import WaterfallGallery from "./components/WaterfallGallery"

const description = 'The fastest way to edit your entire photo album at once. Apply cinematic color grades, import LUTs, add film effects, and batch-export photos and videos with one streamlined workflow.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lauperlabs.com'),
  title: 'Opacity – Batch Photo & Video Editor with LUTs for iOS',
  description,
  keywords: [
    'Opacity', 'batch photo editor', 'batch video editor', 'LUT editor iOS', 'cinematic presets', 'color grading app', 'film effects', 'halation', 'film grain', 'batch export', 'photo album editor', 'video color grading'
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
    title: 'Opacity – Batch Photo & Video Editor with LUTs for iOS',
    description,
    url: 'https://lauperlabs.com/opacity',
    siteName: 'Opacity',
    locale: 'en_US',
    type: 'website',
    images: [
      { url: '/opacity_screenshot.svg', width: 1200, height: 630, alt: 'Opacity – Batch Photo & Video Editor' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opacity – Batch Photo & Video Editor with LUTs for iOS',
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
                <span className="text-white">Edit your entire album.</span>
                <br />
                <span className="bg-gradient-to-r from-violet-200 via-purple-300 to-violet-200 bg-clip-text text-transparent">In one go.</span>
              </h1>
              <p className="mt-3 text-lg md:text-xl text-white/80">Apply cinematic color grades, import LUTs, add film effects, and batch-export photos and videos with one streamlined workflow.</p>
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center">Why creators choose Opacity</h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Images className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Batch Edit Everything</h3>
                    <p className="text-sm text-white/70">Select dozens of photos or videos and apply adjustments instantly across your entire set for consistent color and mood</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Film className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cinematic Presets</h3>
                    <p className="text-sm text-white/70">Premium, film-inspired looks designed for photographers, filmmakers, and creators. Perfect for travel edits, vintage tones, and moody portraits</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Import Custom LUTs</h3>
                    <p className="text-sm text-white/70">Use industry-standard .cube LUTs from your favorite creators and apply them across multiple images and videos at once</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Film Emulation Effects</h3>
                    <p className="text-sm text-white/70">Halation glow for real film-stock feel, adjustable film grain, and bloom for cinematic highlight roll-off</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Sliders className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pro Color Grading</h3>
                    <p className="text-sm text-white/70">Exposure, contrast, highlights, shadows, white balance, temperature, saturation, color mix, split tone, and luminance control</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fast Batch Export</h3>
                    <p className="text-sm text-white/70">Export dozens of photos and multiple videos at once with high-quality output ready for social platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="w-full py-12 md:py-16 bg-white/[0.02] border-t border-white/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-center mb-8">Complete workflow in one app</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                      <Video className="w-5 h-5 text-violet-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Edit Photos & Videos Together</h3>
                      <p className="text-sm text-white/70">Grade mixed media in the same session. Use the same presets, LUTs, and grading tools across all formats</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                      <Clock className="w-5 h-5 text-violet-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Saves Hours of Time</h3>
                      <p className="text-sm text-white/70">Skip repetitive one-by-one editing. Ideal for large albums and full shoots with consistent aesthetic across all content</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                      <Eye className="w-5 h-5 text-violet-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Real-Time Preview</h3>
                      <p className="text-sm text-white/70">See your changes instantly across your entire album as you adjust presets and color grades</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mt-1">
                      <Lock className="w-5 h-5 text-violet-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Non-Destructive Editing</h3>
                      <p className="text-sm text-white/70">Your original photos and videos are always preserved. Experiment freely and revert anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional feature highlights */}
            <div className="mx-auto max-w-4xl mt-12">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Perfect for</h3>
                <div className="grid gap-4 md:grid-cols-3 text-center">
                  <div>
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                        <Camera className="w-6 h-6 text-violet-300" />
                      </div>
                    </div>
                    <div className="font-semibold mb-1">Photographers</div>
                    <p className="text-sm text-white/70">Travel shoots, portraits, full galleries</p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                        <Video className="w-6 h-6 text-violet-300" />
                      </div>
                    </div>
                    <div className="font-semibold mb-1">Filmmakers</div>
                    <p className="text-sm text-white/70">Cinematic edits, video sequences, reels</p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                        <Star className="w-6 h-6 text-violet-300" />
                      </div>
                    </div>
                    <div className="font-semibold mb-1">Content Creators</div>
                    <p className="text-sm text-white/70">Social media, consistent branding, batch posts</p>
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Stop editing one photo at a time</h2>
              <p className="text-lg text-white/70">Download Opacity and transform your entire album with cinematic grades, custom LUTs, and film effects—all in one powerful batch workflow.</p>
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
