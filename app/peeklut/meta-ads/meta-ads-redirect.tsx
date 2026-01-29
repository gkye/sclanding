"use client"

import { useEffect } from "react"

type MetaAdsRedirectProps = {
  appStoreUrl: string
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
  }
}

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1198370492487431"

export default function MetaAdsRedirect({ appStoreUrl }: MetaAdsRedirectProps) {
  useEffect(() => {
    const redirect = () => {
      window.location.href = appStoreUrl
    }

    if (!pixelId) {
      const fallbackTimeout = window.setTimeout(redirect, 50)
      return () => window.clearTimeout(fallbackTimeout)
    }

    if (!window.fbq) {
      ;(function (f: Window, b: Document, e: string, v: string) {
        let n: (...args: unknown[]) => void
        let t: HTMLScriptElement
        let s: HTMLScriptElement

        if (f.fbq) return
        n = function (...args: unknown[]) {
          if (n.callMethod) {
            n.callMethod(...args)
          } else {
            n.queue.push(args)
          }
        } as (...args: unknown[]) => void

        n.push = n
        n.loaded = true
        n.version = "2.0"
        n.queue = []
        t = b.createElement(e)
        t.async = true
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode?.insertBefore(t, s)
        f.fbq = n
        f._fbq = n
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
    }

    window.fbq?.("init", pixelId)
    window.fbq?.("track", "PageView")
    window.fbq?.("track", "Lead", {
      source: "meta-ads",
      product: "PeekLUT",
    })

    const redirectTimeout = window.setTimeout(redirect, 150)
    return () => window.clearTimeout(redirectTimeout)
  }, [appStoreUrl])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <h1 className="text-2xl font-semibold">Redirecting to the App Store…</h1>
      <p className="mt-3 text-sm text-zinc-400">
        If you are not redirected,{' '}
        <a className="underline" href={appStoreUrl}>
          tap here
        </a>
        .
      </p>
    </main>
  )
}
