import Link from "next/link"
import Image from "next/image"
import { Circle, Brain, Camera, Upload, FolderOpen, Sparkles, Calendar, MapPin, Clock } from "lucide-react"
import type { Metadata } from 'next'
import AnimatedHero from './components/AnimatedHero'

const description = 'Transform any screenshot into calendar events instantly. Smart AI-powered event planning app that extracts event details from screenshots, flyers, and text to create perfect calendar entries.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lauperlabs.com'),
  title: 'ShotCal - Transform Screenshots into Calendar Events Instantly',
  description: description,
  keywords: ['screenshot to calendar', 'event planning app', 'AI calendar', 'smart scheduling', 'event extraction', 'calendar automation', 'iOS app', 'event management'],
  authors: [{ name: 'Lauper Labs' }],
  creator: 'Lauper Labs',
  publisher: 'Lauper Labs',
  applicationName: 'ShotCal',
  generator: 'ShotCal',
  category: 'Productivity',
  classification: 'Productivity App',
  icons: {
    icon: [
      { url: '/favicon_shot_cal.ico' },
      { url: '/favicon_shotcal.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_shotcal.png' },
    ],
  },
  openGraph: {
    title: 'ShotCal - Transform Screenshots into Calendar Events Instantly',
    description: description,
    url: 'https://lauperlabs.com/shotcal',
    siteName: 'ShotCal',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/shotCal_screenshot.png',
        width: 600,
        height: 800,
        alt: 'ShotCal App Screenshot - Transform screenshots into calendar events',
      },
      {
        url: '/shot_cal_app_icon.png',
        width: 512,
        height: 512,
        alt: 'ShotCal App Icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShotCal - Transform Screenshots into Calendar Events Instantly',
    description: description,
    images: ['/shotCal_screenshot.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function ShotCalLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image 
                src="/shot_cal_app_icon.png"
                alt="ShotCal Icon"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg overflow-hidden"
              />
            </div>
            <span className="text-xl font-bold">ShotCal</span>
          </div>

          <nav className="hidden md:flex gap-8">
          </nav>

          <div className="flex items-center gap-2">
            <Link href="https://apps.apple.com/us/app/shotcal-screenshot-to-event/id6747011235">
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
            <Image
              src="/grain.jpg?height=1080&width=1920"
              alt="Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-5xl text-center">
                <AnimatedHero />
              <p className="text-xl font-bold md:text-2xl">
              Transform any screenshot into calendar events instantly.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[280px] overflow-hidden">
                  <div className="absolute inset-0"></div>
                  <Image
                    src="/shotCal_screenshot.png?height=800&width=600"
                    alt="App screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="https://apps.apple.com/us/app/shotcal-screenshot-to-event/id6747011235" className="inline-flex items-center justify-center">
                <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=80&width=200"
                  alt="Download on the App Store"
                  width={200}
                  height={80}
                  className="h-[60px] w-auto"
                />
              </Link>
            </div>

          </div>
        </section>
        

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-t border-white/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
              {/* Feature 1: Instant Screenshot-to-Calendar Conversion */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <Camera className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Instant Screenshot-to-Calendar Conversion</h3>
                <p className="text-white/70">
                  Simply screenshot any event flyer, poster, email, or message and SeeSave automatically extracts the title, date, time, and location to create a complete calendar event in seconds.
                </p>
              </div>

              {/* Feature 2: Smart AI Event Detection */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                  <Brain className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Smart AI Event Detection</h3>
                <p className="text-white/70">
                  Advanced text recognition intelligently identifies and organizes event details from any image or copied text, eliminating the need to manually type event information ever again.
                </p>
              </div>

              {/* Feature 3: Universal Calendar Integration */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                  <Calendar className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold">Universal Calendar Integration</h3>
                <p className="text-white/70">
                  Seamlessly add events to Apple Calendar, Google Calendar, or Outlook with one tap, supporting all major calendar platforms you already use.
                </p>
              </div>

              {/* Feature 4: Complete Privacy Protection */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">Complete Privacy Protection</h3>
                <p className="text-white/70">
                  All data is saved locally on your device and never shared with anyone.
                </p>
              </div>

              {/* Feature 5: Custom Event Collections */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                  <FolderOpen className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold">Custom Event Collections</h3>
                <p className="text-white/70">
                  Organize your events into personalized categories like "Concerts," "Work Meetings," or "Family Events" to keep your schedule perfectly structured.
                </p>
              </div>

              {/* Feature 6: Text-to-Event Magic */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10">
                  <Upload className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold">Text-to-Event Magic</h3>
                <p className="text-white/70">
                  Paste any text containing event details and watch SeeSave instantly transform it into a properly formatted calendar entry with all relevant information extracted.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/shot_cal_app_icon.png"
              alt="ShotCal Icon"
              width={24}
              height={24}
              className="h-6 w-6 rounded-md overflow-hidden"
            />
            <p className="text-sm font-medium">© {new Date().getFullYear()} ShotCal. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/shotcal/privacy" className="text-xs text-white/70 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/shotcal/terms" className="text-xs text-white/70 hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}