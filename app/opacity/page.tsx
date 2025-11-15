import Link from "next/link"
import Image from "next/image"
import { Sliders, Eye, Zap, Download, Smartphone, Images, Film, Palette, Sparkles, Clock, Lock, Camera, Video, Star } from "lucide-react"
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const newYork = localFont({
  src: '../../public/fonts/NewYork_font.otf',
  variable: '--font-newyork',
  display: 'swap',
})

const description = 'The fastest way to edit your entire photo album at once. Apply cinematic color grades, import LUTs, add film effects, and batch-export photos and videos with one streamlined workflow. Whether you\'re editing travel shots, portraits, reels, or a full gallery, Opacity turns complex edits into a fast, powerful batch process.'

const appStoreUrl = 'https://apps.apple.com/us/app/opacity'

export const metadata: Metadata = {
  metadataBase: new URL('https://lauperlabs.com'),
  title: 'Opacity – Batch Photo & Video Editor with LUTs for iOS | Cinematic Color Grading',
  description,
  keywords: [
    'Opacity',
    'batch photo editor',
    'batch video editor',
    'LUT editor iOS',
    'cinematic presets',
    'color grading app',
    'film effects',
    'halation effect',
    'film grain app',
    'batch export photos',
    'photo album editor',
    'video color grading',
    'cube LUT',
    'mobile color grading',
    'batch photo processing',
    'cinematic color grading',
    'film emulation',
    'photo editor for photographers',
    'video editor for filmmakers',
    'content creator tools',
    'bulk photo editor',
    'professional photo editing',
    'iPhone photo editor',
    'iOS video editor',
    'non-destructive editing',
    'preset filters',
    'travel photography editor',
    'portrait photo editor',
    'social media content editor'
  ],
  alternates: {
    canonical: 'https://lauperlabs.com/opacity',
  },
  authors: [{ name: 'Lauper Labs' }],
  creator: 'Lauper Labs',
  publisher: 'Lauper Labs',
  applicationName: 'Opacity',
  generator: 'Opacity',
  category: 'Photo & Video',
  classification: 'Photo & Video Editing App',
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
      {
        url: '/opacity_screenshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Opacity – Batch Photo & Video Editor with Cinematic Presets and LUTs',
      },
      {
        url: '/opacity_app_icon.svg',
        width: 512,
        height: 512,
        alt: 'Opacity App Icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opacity – Batch Photo & Video Editor with LUTs for iOS',
    description,
    images: ['/opacity_screenshot.jpg'],
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
      app_store_id: 'opacity',
    },
  },
}

export default function OpacityLandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Opacity",
    description,
    applicationCategory: "https://schema.org/MultimediaApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    author: {
      "@type": "Organization",
      name: "Lauper Labs",
      url: "https://lauperlabs.com",
    },
    datePublished: "2025-11-15",
    softwareVersion: "1.0",
    screenshot: "https://lauperlabs.com/opacity_screenshot.jpg",
    featureList: [
      "Batch edit photos and videos",
      "Advanced cinematic presets",
      "Import and apply custom .cube LUTs",
      "Halation, bloom, and film grain effects",
      "Precision color grading tools",
      "Real-time preview",
      "Edit mixed media simultaneously",
      "Fast batch exporting",
      "Non-destructive editing",
      "Professional exposure and contrast controls",
      "White balance and temperature adjustment",
      "Saturation, color mix, and split tone",
      "Midtones and luminance control",
    ],
    keywords: "batch photo editor, LUT editor, cinematic presets, film effects, color grading, photo batch processing, video editor, halation, film grain",
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Opacity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Opacity is a batch photo and video editor for iOS that lets you edit your entire album at once. Apply cinematic color grades, import LUTs, add film effects, and batch-export all your photos and videos with one streamlined workflow.",
        },
      },
      {
        "@type": "Question",
        name: "Can I edit photos and videos together in Opacity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Opacity allows you to grade mixed media in the same session. You can use the same presets, LUTs, and grading tools across all formats, making it perfect for maintaining a consistent aesthetic.",
        },
      },
      {
        "@type": "Question",
        name: "What are LUTs and can I import my own?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LUTs (Look-Up Tables) are color grading presets that transform the look of your images and videos. Opacity supports industry-standard .cube LUTs, allowing you to import and apply LUTs from your favorite creators across multiple images and videos simultaneously.",
        },
      },
      {
        "@type": "Question",
        name: "Does Opacity support batch exporting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Opacity features fast batch exporting that allows you to export dozens of photos and multiple videos at once with high-quality output ready for social platforms, sharing, or cloud storage.",
        },
      },
      {
        "@type": "Question",
        name: "Is Opacity editing non-destructive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Opacity uses non-destructive editing which means your original photos and videos are always preserved and safe. You can experiment freely and revert changes at any time.",
        },
      },
    ],
  }

  return (
    <div className={`flex min-h-screen flex-col bg-black text-white ${newYork.variable}`}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/opacity_app_icon.svg"
              alt="Opacity Icon"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg overflow-hidden"
            />
            <span className="text-lg font-medium">Opacity</span>
          </div>

          <nav className="hidden md:flex gap-8"></nav>

          <div className="flex items-center gap-2">
            <Link href="https://apps.apple.com/us/app/opacity">
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=40&width=200"
                alt="Download on the App Store"
                width={160}
                height={32}
                className="h-[32px] w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Split Layout */}
        <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/grain.jpg?height=1080&width=1920" alt="Background" fill className="object-cover opacity-5" priority />
            {/* Minimal gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            {/* Title Section */}
            <div className="mx-auto max-w-5xl text-center mb-10">
              <h1 className="font-[var(--font-newyork)] text-5xl font-light tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-white">Edit your entire album.</span>
                <br />
                <span className="text-white/40">In one go.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/50 max-w-2xl mx-auto font-light">Apply cinematic color grades, import LUTs, add film effects, and batch-export photos and videos.</p>
            </div>

            {/* Split Layout: Screenshot Left, Horizontal Gallery Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Left: Main Screenshot */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
                    <Image src="/opacity_screenshot.jpg" alt="Opacity app screenshot" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Right: Horizontal Screenshot Gallery */}
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 w-full max-w-md">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="relative aspect-[9/19.5] overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
                      <Image
                        src={`/Group ${num}.jpg`}
                        alt={`Opacity screenshot ${num}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="https://apps.apple.com/us/app/opacity" className="inline-flex items-center justify-center">
                <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=80&width=200" alt="Download on the App Store" width={160} height={48} className="h-[48px] w-auto" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-20 border-t border-white/5">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-10">
              <h2 className="font-[var(--font-newyork)] text-3xl font-light tracking-tight md:text-4xl text-center text-white/90">Why creators choose Opacity</h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center gap-3 p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Images className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1.5 text-white/90">Batch Edit Everything</h3>
                    <p className="text-sm text-white/50 font-light">Select dozens of photos or videos and apply adjustments instantly across your entire set</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Film className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1.5 text-white/90">Cinematic Presets</h3>
                    <p className="text-sm text-white/50 font-light">Premium, film-inspired looks designed for photographers, filmmakers, and creators</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1.5 text-white/90">Import Custom LUTs</h3>
                    <p className="text-sm text-white/50 font-light">Use industry-standard .cube LUTs and apply them across multiple images and videos</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1.5 text-white/90">Film Emulation Effects</h3>
                    <p className="text-sm text-white/50 font-light">Halation glow, adjustable film grain, and bloom for cinematic highlight roll-off</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Sliders className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1.5 text-white/90">Pro Color Grading</h3>
                    <p className="text-sm text-white/50 font-light">Exposure, contrast, highlights, shadows, temperature, saturation, and luminance control</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1.5 text-white/90">Fast Batch Export</h3>
                    <p className="text-sm text-white/50 font-light">Export dozens of photos and videos at once with high-quality output</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="w-full py-16 md:py-20 border-t border-white/5">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-[var(--font-newyork)] text-2xl font-light tracking-tight md:text-3xl text-center mb-10 text-white/90">Complete workflow in one app</h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                      <Video className="w-4 h-4 text-white/60" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-1 text-white/90">Edit Photos & Videos Together</h3>
                      <p className="text-sm text-white/50 font-light">Grade mixed media in the same session with the same tools</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                      <Clock className="w-4 h-4 text-white/60" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-1 text-white/90">Saves Hours of Time</h3>
                      <p className="text-sm text-white/50 font-light">Skip repetitive one-by-one editing for large albums</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                      <Eye className="w-4 h-4 text-white/60" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-1 text-white/90">Real-Time Preview</h3>
                      <p className="text-sm text-white/50 font-light">See changes instantly across your entire album</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                      <Lock className="w-4 h-4 text-white/60" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-1 text-white/90">Non-Destructive Editing</h3>
                      <p className="text-sm text-white/50 font-light">Originals are always preserved and safe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional feature highlights */}
            <div className="mx-auto max-w-4xl mt-12">
              <div className="p-8">
                <h3 className="text-lg font-medium mb-6 text-center text-white/80">Perfect for</h3>
                <div className="grid gap-6 md:grid-cols-3 text-center">
                  <div>
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white/60" />
                      </div>
                    </div>
                    <div className="font-medium mb-1 text-white/90">Photographers</div>
                    <p className="text-sm text-white/50 font-light">Travel shoots, portraits, full galleries</p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Video className="w-5 h-5 text-white/60" />
                      </div>
                    </div>
                    <div className="font-medium mb-1 text-white/90">Filmmakers</div>
                    <p className="text-sm text-white/50 font-light">Cinematic edits, video sequences, reels</p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Star className="w-5 h-5 text-white/60" />
                      </div>
                    </div>
                    <div className="font-medium mb-1 text-white/90">Content Creators</div>
                    <p className="text-sm text-white/50 font-light">Social media, consistent branding, batch posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-20 border-t border-white/5">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-5">
              <h2 className="font-[var(--font-newyork)] text-3xl font-light tracking-tight md:text-4xl text-white/90">Stop editing one photo at a time</h2>
              <p className="text-base text-white/50 font-light">Download Opacity and transform your entire album with cinematic grades, custom LUTs, and film effects.</p>
              <div className="flex justify-center pt-2">
                <Link href="https://apps.apple.com/us/app/opacity" className="inline-flex items-center justify-center">
                  <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=80&width=200" alt="Download on the App Store" width={160} height={48} className="h-[48px] w-auto" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/opacity_app_icon.svg" alt="Opacity Icon" width={20} height={20} className="h-5 w-5 rounded-md overflow-hidden opacity-60" />
            <p className="text-xs font-light text-white/40">© {new Date().getFullYear()} Opacity. All rights reserved.</p>
          </div>
          <nav className="flex gap-6">
            <Link href="/opacity/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors font-light">Privacy Policy</Link>
            <Link href="/opacity/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors font-light">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
