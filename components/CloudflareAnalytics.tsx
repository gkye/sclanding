import Script from 'next/script'

export default function CloudflareAnalytics() {
  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "e390a6cf0ff6438180071716b8ceff93"}'
      strategy="afterInteractive"
      defer
    />
  )
}
