import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shutter Craft',
  description: 'Shutter Craft. Record the same thing every time.',
  generator: 'Shutter Craft Generator',
  icons: {
    icon: [
      { url: '/sclanding/favicon.ico' },
      { url: '/sclanding/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/sclanding/apple-icon.png' },
    ],
  }
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
