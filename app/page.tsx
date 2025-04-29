import Link from "next/link"
import Image from "next/image"
import { Circle, CalendarClock, Move, ScanSearch, Palette, Grid, Film, AlertTriangle } from "lucide-react"
import AppShowcaseCard from "./app-showcase-card"
import ManifestoCard from "./app-showcase-card"

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
            <Link href="/shuttercraft" className="text-lg font-bold text-white/120 hover:text-white">
              Download ShutterCraft
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center container py-12">
        <Link href="/shuttercraft" className="hover:text-red">
         <ManifestoCard />
        </Link>
      </main>
    </div>
  )
}
