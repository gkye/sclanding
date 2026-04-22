import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { APP_STORE_URL, IS_APP_STORE_LIVE, SITE_URL } from "@/lib/stemlab"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Privacy Policy – StemLab",
  description:
    "Privacy policy for StemLab. All audio processing and AI stem separation runs on-device. Nothing is uploaded.",
  alternates: { canonical: "/stemlab/privacy" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/stemlab_app_icon.png",
    apple: "/stemlab_app_icon.png",
  },
  openGraph: {
    title: "Privacy Policy – StemLab",
    description:
      "StemLab processes all audio on your iPhone. No uploads, no accounts, no tracking.",
    url: `${SITE_URL}/stemlab/privacy`,
    siteName: "StemLab",
    type: "website",
    locale: "en_US",
    images: [{ url: "/stemlab_app_icon.png", width: 1024, height: 1024, alt: "StemLab" }],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy – StemLab",
    description:
      "StemLab processes all audio on your iPhone. No uploads, no accounts, no tracking.",
    images: ["/stemlab_app_icon.png"],
  },
}

export default function StemLabPrivacyPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "StemLab", item: `${SITE_URL}/stemlab` },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/stemlab/privacy` },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/stemlab" className="flex items-center gap-2">
            <Image
              src="/stemlab_app_icon.png"
              alt="StemLab Icon"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-xl font-bold">StemLab</span>
          </Link>
          {IS_APP_STORE_LIVE ? (
            <Link href={APP_STORE_URL}>
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto invert"
              />
            </Link>
          ) : (
            <span
              className="inline-flex items-center gap-2 opacity-80"
              aria-disabled="true"
            >
              <span className="text-[10px] tracking-[0.14em] uppercase text-white/60">
                Coming soon
              </span>
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store (coming soon)"
                width={120}
                height={40}
                className="h-10 w-auto invert"
              />
            </span>
          )}
        </div>
      </header>

      <main className="flex-1 container px-4 md:px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none text-white/80 space-y-6">
            <p>
              This privacy policy applies to the "StemLab" app (hereby referred to as "Application") for mobile devices that was created by Lauper Labs (hereby referred to as "Service Provider") as a Freemium service. This service is intended for use "AS IS".
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">What information does the Application obtain and how is it used?</h2>
              <p>
                The Application does not obtain any personal information when you download and use it. Registration is not required to use the Application. No account is created, and no identifiers are collected, stored, or transmitted to the Service Provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Does the Application collect precise real time location information of the device?</h2>
              <p>
                This Application does not collect precise information about the location of your mobile device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Does the Application upload or transmit my audio?</h2>
              <p>
                No. All audio stem separation, mixing, effects processing, and export are performed locally on your iPhone using on-device machine learning. Your audio files — including any song you import, any recording, and any rendered stems or mixdowns — are never uploaded to the Service Provider's servers or to any third party.
              </p>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 mt-4">
                <p className="text-emerald-300 font-semibold mb-2">On-device processing:</p>
                <p>
                  Stem separation runs entirely on Apple Silicon on your device. The Application processes audio on-device to maintain your privacy and data security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Do third parties see and/or have access to information obtained by the Application?</h2>
              <p>
                Since the Application does not collect personal information and does not upload your audio, no data of that kind is shared with third parties.
              </p>
              <p>
                The Application may use Apple's standard App Store services for purchase, subscription management, and receipt validation. Those interactions are governed by Apple's privacy policy, not this one.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">What about analytics?</h2>
              <p>
                Aggregate, anonymized usage analytics may be collected through Apple's App Analytics (if you have opted in on your device) to help us understand crashes and broad usage patterns. These reports contain no personally identifiable information and no audio content. You can opt out at any time in iOS Settings → Privacy &amp; Security → Analytics &amp; Improvements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">What are my opt-out rights?</h2>
              <p>
                You can stop all use of the Application at any time by uninstalling it. Uninstalling the Application removes it and any local files it created from your device. You may use the standard uninstall processes available on iOS or via the App Store.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Children</h2>
              <p>
                The Application is not used to knowingly solicit data from or market to children under the age of 13.
              </p>
              <p>
                The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourages parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider at lauperlabs@gmail.com so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Security</h2>
              <p>
                The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect personal information and does not upload your audio, there is no risk of that data being accessed by unauthorized individuals from the Service Provider's systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Changes</h2>
              <p>
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
              </p>
              <p>
                This privacy policy is effective as of {new Date().toISOString().slice(0, 10)}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Your Consent</h2>
              <p>
                By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p>
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at lauperlabs@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/stemlab_app_icon.png"
              alt="StemLab Icon"
              width={24}
              height={24}
              className="h-6 w-6 rounded-md"
            />
            <p className="text-sm font-medium">© {new Date().getFullYear()} StemLab. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/stemlab" className="text-xs text-white/70 hover:text-white">
              Home
            </Link>
            <Link href="/stemlab/terms" className="text-xs text-white/70 hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
