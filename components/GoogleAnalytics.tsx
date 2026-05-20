import Script from 'next/script'

const googleAnalyticsId = 'G-WXXCHZWL33'
const googleAdsId = 'AW-18133503942'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
          gtag('config', '${googleAdsId}');
        `}
      </Script>
    </>
  )
}
