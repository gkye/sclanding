import type { Metadata } from "next"
import Script from "next/script"

import GoogleAdsRedirect from "./google-ads-redirect"

const appStoreUrl =
  "https://apps.apple.com/app/apple-store/id6762580115?pt=127888120&ct=google_ads&mt=8"
const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID ?? "AW-18133503942"
const googleAdsSnippet = conversionId
  ? `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${conversionId}');`
  : ""

export const metadata: Metadata = {
  title: "StemLab - App Store Redirect",
  description: "Redirecting to the StemLab App Store listing.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function StemLabGoogleAdsRedirectPage() {
  return (
    <>
      {conversionId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${conversionId}`}
            strategy="afterInteractive"
          />
          <Script
            id="stemlab-google-ads-tag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: googleAdsSnippet }}
          />
        </>
      )}
      <GoogleAdsRedirect appStoreUrl={appStoreUrl} />
    </>
  )
}
