import Image from "next/image"
import Link from "next/link"
import type { Metadata } from 'next'

const appStoreUrl = 'https://apps.apple.com/us/app/opacity-batch-edit-photo-album/id6752228569'

export const metadata: Metadata = {
  title: 'Opacity – Download on the App Store',
  description: 'Download Opacity, the fastest batch photo and video editor for iOS. Apply cinematic color grades, import LUTs, and batch-edit your entire photo album.',
  icons: {
    icon: '/opacity_app_icon.png',
    apple: '/opacity_app_icon.png',
  },
  openGraph: {
    title: 'Opacity – Download on the App Store',
    description: 'Download Opacity, the fastest batch photo and video editor for iOS.',
    images: ['/opacity_app_icon.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function OpacityDownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/opacity_app_icon.png"
          alt="Opacity App Icon"
          width={160}
          height={160}
          className="rounded-[32px] shadow-2xl"
          priority
        />
      </div>

      {/* App Name */}
      <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
        Opacity
      </h1>

      {/* Tagline */}
      <p className="text-zinc-400 text-lg mb-10 text-center max-w-md">
        Batch Photo & Video Editor
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
