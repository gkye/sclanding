import type { Metadata } from "next"

import MetaAdsRedirect from "./meta-ads-redirect"

const appStoreUrl =
  "https://apps.apple.com/us/app/peeklut-photo-video-editor/id6473661560"

export const metadata: Metadata = {
  title: "PeekLUT – App Store Redirect",
  description: "Redirecting to the PeekLUT App Store listing.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function MetaAdsRedirectPage() {
  return <MetaAdsRedirect appStoreUrl={appStoreUrl} />
}
