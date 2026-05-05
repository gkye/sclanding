import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CloudflareAnalytics from '@/components/CloudflareAnalytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <GoogleAnalytics />
        <CloudflareAnalytics />
      </body>
    </html>
  )
}
