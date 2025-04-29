import type { Metadata } from 'next'
import './globals.css'

const description = 'Plan, create, and record professional-quality video on your iPhone with ShutterCraft. Features timeline planning, stabilization, focus peaking, LUTs, and more.'

export const metadata: Metadata = {
  title: 'Lauper Labs',
  description: description,
  generator: 'Lauper Site',
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
    title: 'Lauper Labs',
    description: description,
    url: 'https://lauperlabs.com',
    siteName: 'Lauper Labs',
    locale: 'en_US',
    type: 'website',
  },
  // Add Twitter card tags
  twitter: {
    card: 'summary_large_image',
    title: 'Lauper Labs.',
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
      <head></head>
      <body>{children}</body>
    </html>
  )
}
