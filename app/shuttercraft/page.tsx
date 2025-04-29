import Link from "next/link"
import Image from "next/image"
import { Circle, CalendarClock, Move, ScanSearch, Palette, Grid, Film, AlertTriangle } from "lucide-react"
import type { Metadata } from 'next'

const description = 'Plan, create, and record professional-quality video on your iPhone with ShutterCraft. Features timeline planning, stabilization, focus peaking, LUTs, and more.'

export const metadata: Metadata = {
  title: 'Shutter Craft',
  description: description,
  generator: 'Shutter Craft Generator',
  icons: {
    icon: [
      { url: '/favicon_shuttercraft.ico' },
      { url: '/favicon_shuttercraft.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_shuttercraft.png' },
    ],
  },
   openGraph: {
    title: 'ShutterCraft - Pro iPhone Video Recording',
    description: description,
    url: 'https://lauperlabs.com',
    siteName: 'ShutterCraft',
    locale: 'en_US',
    type: 'website',
  },
  // Add Twitter card tags
  twitter: {
    card: 'summary_large_image',
    title: 'ShutterCraft - Pro iPhone Video Recording',
    description: description,
  },
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image 
                src="/icon.svg"
                alt="ShutterCraft Icon"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <span className="text-xl font-bold">ShutterCraft</span>
          </div>

          <nav className="hidden md:flex gap-8">
            {/* <Link href="#features" className="text-sm font-medium text-white/70 hover:text-white">
              Grade presets
            </Link> */}
            {/* <Link href="#testimonials" className="text-sm font-medium text-white/70 hover:text-white">
              Creator Kit
            </Link> */}
            {/* <Link href="#pricing" className="text-sm font-medium text-white/70 hover:text-white">
              iPhone Video Tutorials
            </Link> */}
            {/* <Link href="#download" className="text-sm font-medium text-white/70 hover:text-white">
              Support
            </Link> */}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#download">
               <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=40&width=200"
                  // src="/placeholder.svg?height=60&width=200"
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
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Plan
                <br />
                Create
                <br />
                <span className="text-red-500">Record</span>
                {/* A larger red circle with a border, pulsing slower */}
                <Circle
                  className="inline-block h-8 w-8 fill-red-500 stroke-white stroke-2 ml-2 mb-1 animate-pulse"
                  style={{ animationDuration: '10s' }} // Slower pulse animation
                />
                </h1>
              <p className="text-xl font-bold md:text-2xl">
                <br />
              {/* <p className="mx-auto mt-6 max-w-3xl text-lg text-white/100 md:text-xl"> */}
              Recreate the same shot <span className="text-red-500 font-bold">EVERY</span> time with a planned timeline.<br />
              Same Zoom.
              Same Focus.<br/>
              Same Exposure.
              Same White Balance.<br/>
              <span className="text-red-500 font-bold">SAME EVERYTHING</span>
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[280px] overflow-hidden">
                  <div className="absolute inset-0"></div>
                  <Image
                    // src={ getBasePathPrefix() + "/screenshot1.png?height=800&width=600" }
                    src="/screenshot1.png?height=800&width=600"
                    alt="App screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="#download" className="inline-flex items-center justify-center">
                <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=80&width=200"
                  // src="/placeholder.svg?height=60&width=200"
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
              {/* Feature 1: Plan recording on timeline */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <CalendarClock className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Timeline Recording Plan</h3>
                <p className="text-white/70">
                  Plan your shots precisely on a timeline to ensure consistency in zoom, focus, exposure, and framing every time.
                </p>
              </div>

              {/* Feature 2: Video Stabilization */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                  <Move className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Advanced Video Stabilization</h3>
                <p className="text-white/70">
                  Achieve smooth, cinematic footage even during movements and zooms.
                </p>
              </div>

              {/* Feature 3: Focus Peaking */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                  <ScanSearch className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold">Focus Peaking</h3>
                <p className="text-white/70">
                  Ensure your subject is perfectly sharp with visual focus peaking indicators overlayed on the viewfinder.
                </p>
              </div>

              {/* Feature 4: LUT Previews */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                  <Palette className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">Real-time LUT Previews</h3>
                <p className="text-white/70">
                  Apply and preview cinematic looks instantly using Look-Up Tables (LUTs) directly while recording.
                </p>
              </div>

              {/* Feature 5: Composition Grids */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
                  <Grid className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold">Composition Grids</h3>
                <p className="text-white/70">
                  Frame your shots perfectly using various composition grids like the rule of thirds, golden ratio, and square.
                </p>
              </div>

              {/* Feature 6: Pro Recording Formats */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10">
                  <Film className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold">Pro Recording Formats (4K 60fps)</h3>
                <p className="text-white/70">
                  Capture high-quality video with support for professional formats, including 4K resolution at 60 frames per second.
                </p>
              </div>

              {/* Feature 7: Overexposure / Zebra Meter */}
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold">Overexposure / Zebra Meter</h3>
                <p className="text-white/70">
                  Easily monitor and avoid overexposed areas in your shot with adjustable zebra stripe indicators.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* App Interface Showcase */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Designed for filmmakers, by filmmakers
                  </h2>
                  <p className="text-white/70 md:text-xl">
                    Every detail of ShutterCraft's interface is crafted to help you capture your vision without getting in the
                    way.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      <span>Intuitive manual controls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      <span>Real-time color grading</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      <span>Focus peaking and zebras</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      <span>Audio monitoring tools</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative aspect-[9/19.5] w-full max-w-[280px] overflow-hidden rounded-[40px] border-[14px] border-black bg-black shadow-xl">
                    <Image
                      src="/screenshot1.png?height=800&width=600"
                      alt="App interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-black border-t border-white/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Loved by filmmakers worldwide
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-white/70 md:text-xl">
                Join thousands of creators who trust ShutterCraft for their professional video needs.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "ShutterCraft has completely changed how I shoot on iPhone. The manual controls and LOG profiles give me the flexibility I need for professional work.",
                  author: "Alex Chen",
                  title: "Documentary Filmmaker",
                },
                {
                  quote:
                    "The interface is so intuitive. I can focus on my creative vision instead of fighting with the app. Best video app I've ever used.",
                  author: "Sarah Johnson",
                  title: "Content Creator",
                },
                {
                  quote:
                    "ProRes support and the ability to use my own LUTs makes ShutterCraft an essential tool in my filmmaking kit.",
                  author: "Michael Rodriguez",
                  title: "Independent Director",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-black/20 p-6">
                  <p className="text-white/70">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-white/50">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Final CTA Section */}
        {/* <section id="download" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to elevate your iPhone filmmaking?
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-white/70 md:text-xl">
                Download ShutterCraft today and start creating cinema-quality videos with your iPhone.
              </p>

              <div className="mt-10">
                <Link href="#" className="inline-flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=200"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="h-[60px] w-auto"
                  />
                </Link>
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/public/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?height=40&width=40"
                    alt="Award"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/icon.svg"
              alt="ShutterCraft Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <p className="text-sm font-medium">© {new Date().getFullYear()} ShutterCraft. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            {/* <Link href="/privacy" className="text-xs text-white/70 hover:text-white">
              Privacy Policy
            </Link> */}
            {/* <Link href="#" className="text-xs text-white/70 hover:text-white">
              Terms of Service
            </Link> */}
            {/* <Link href="#" className="text-xs text-white/70 hover:text-white">
              Contact
            </Link> */}
          </nav>
        </div>
      </footer>
    </div>
  )
}
