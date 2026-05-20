import type { Metadata } from "next"

import GoogleAdsRedirect from "./google-ads-redirect"

const appStoreUrl =
  "https://apps.apple.com/app/apple-store/id6762580115?pt=127888120&ct=google_ads&mt=8"

export const metadata: Metadata = {
  title: "StemLab - App Store Redirect",
  description: "Redirecting to the StemLab App Store listing.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function StemLabGoogleAdsRedirectPage() {
  return <GoogleAdsRedirect appStoreUrl={appStoreUrl} />
}
