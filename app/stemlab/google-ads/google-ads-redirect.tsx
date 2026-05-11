"use client"

import { useEffect } from "react"

type GoogleAdsRedirectProps = {
  appStoreUrl: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID ?? "AW-18133503942"
const conversionLabel =
  process.env.NEXT_PUBLIC_STEMLAB_GOOGLE_ADS_CONVERSION_LABEL ?? "stemlab_download"

export default function GoogleAdsRedirect({ appStoreUrl }: GoogleAdsRedirectProps) {
  useEffect(() => {
    let hasRedirected = false

    const redirect = () => {
      if (hasRedirected) {
        return
      }

      hasRedirected = true
      window.location.href = appStoreUrl
    }

    if (!conversionId || !conversionLabel) {
      const fallbackTimeout = window.setTimeout(redirect, 50)
      return () => window.clearTimeout(fallbackTimeout)
    }

    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer?.push(arguments)
      }

    window.gtag("event", "conversion", {
      send_to: `${conversionId}/${conversionLabel}`,
      event_callback: redirect,
    })

    const redirectTimeout = window.setTimeout(redirect, 1000)
    return () => window.clearTimeout(redirectTimeout)
  }, [appStoreUrl])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <h1 className="text-2xl font-semibold">Redirecting to the App Store...</h1>
      <p className="mt-3 text-sm text-zinc-400">
        If you are not redirected,{" "}
        <a className="underline" href={appStoreUrl}>
          tap here
        </a>
        .
      </p>
    </main>
  )
}
