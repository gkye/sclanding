import Image from "next/image"
import Link from "next/link"
import type { Metadata } from 'next'

const appStoreUrl = 'https://apps.apple.com/us/app/peeklut-photo-video-editor/id6473661560'

export const metadata: Metadata = {
  title: 'PeekLUT – Download on the App Store',
  description: 'Download PeekLUT, the powerful photo and video editor for iOS. Preview and apply LUTs in real-time.',
  icons: {
    icon: '/peeklut_app_icon.png',
    apple: '/peeklut_app_icon.png',
  },
  openGraph: {
    title: 'PeekLUT – Download on the App Store',
    description: 'Download PeekLUT, the powerful photo and video editor for iOS.',
    images: ['/peeklut_app_icon.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function PeekLUTDownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/peeklut_app_icon.png"
          alt="PeekLUT App Icon"
          width={160}
          height={160}
          className="rounded-[32px] shadow-2xl"
          priority
        />
      </div>

      {/* App Name */}
      <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
        PeekLUT
      </h1>

      {/* Tagline */}
      <p className="text-zinc-400 text-lg mb-10 text-center max-w-md">
        Photo & Video Editor
      </p>

      {/* App Store Button */}
      <Link
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          alt="Download on the App Store"
          width={200}
          height={67}
          priority
        />
      </Link>
    </div>
  )
}
