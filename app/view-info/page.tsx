import type { Metadata } from "next"

const appStoreUrl =
  "https://apps.apple.com/app/apple-store/id6473661560?pt=127888120&ct=main-app&mt=8"

export const metadata: Metadata = {
  title: "View Info on the App Store",
  description: "Open View Info on the App Store.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ViewInfoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <h1 className="text-3xl font-semibold">View Info</h1>
      <p className="mt-3 max-w-sm text-sm text-zinc-400">
        Open the App Store to download View Info.
      </p>
      <a
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
        href={appStoreUrl}
      >
        Open in App Store
      </a>
    </main>
  )
}
