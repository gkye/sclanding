import type { Metadata } from 'next'
import './globals.css'

const description = 'Plan, create, and record professional-quality video on your iPhone with ShutterCraft. Features timeline planning, stabilization, focus peaking, LUTs, and more.',

export const metadata: Metadata = {
  title: 'Shutter Craft',
  description: description,
  generator: 'Shutter Craft Generator',
  icons: {
    icon: [
      { url: '/sclanding/favicon.ico' },
      { url: '/sclanding/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/sclanding/apple-icon.png' },
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
      <body>{children}</body>
    </html>
  )
}
