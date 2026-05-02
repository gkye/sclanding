"use client"

import { useEffect } from "react"

type ViewInfoRedirectProps = {
  appStoreUrl: string
}

export default function ViewInfoRedirect({ appStoreUrl }: ViewInfoRedirectProps) {
  useEffect(() => {
    const redirectTimeout = window.setTimeout(() => {
      window.location.replace(appStoreUrl)
    }, 50)

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
