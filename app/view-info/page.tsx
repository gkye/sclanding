import type { Metadata } from "next"

import ViewInfoRedirect from "./view-info-redirect"

const appStoreUrl = "https://apps.apple.com/app/id6763905856"

export const metadata: Metadata = {
  title: "App Store Redirect",
  description: "Redirecting to the App Store.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ViewInfoPage() {
  return <ViewInfoRedirect appStoreUrl={appStoreUrl} />
}
