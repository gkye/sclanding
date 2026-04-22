import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { APP_STORE_URL, IS_APP_STORE_LIVE, SITE_URL } from "@/lib/stemlab"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Terms & Conditions – StemLab",
  description: "Terms and conditions for StemLab — AI Stem Separator for iOS.",
  alternates: { canonical: "/stemlab/terms" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/stemlab_app_icon.png",
    apple: "/stemlab_app_icon.png",
  },
  openGraph: {
    title: "Terms & Conditions – StemLab",
    description: "Terms and conditions for StemLab — AI Stem Separator for iOS.",
    url: `${SITE_URL}/stemlab/terms`,
    siteName: "StemLab",
    type: "website",
    locale: "en_US",
    images: [{ url: "/stemlab_app_icon.png", width: 1024, height: 1024, alt: "StemLab" }],
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions – StemLab",
    description: "Terms and conditions for StemLab — AI Stem Separator for iOS.",
    images: ["/stemlab_app_icon.png"],
  },
}

export default function StemLabTermsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "StemLab", item: `${SITE_URL}/stemlab` },
      { "@type": "ListItem", position: 2, name: "Terms", item: `${SITE_URL}/stemlab/terms` },
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
          <h1 className="text-4xl font-bold mb-8">Terms &amp; Conditions</h1>

          <div className="prose prose-invert max-w-none text-white/80 space-y-6">
            <p>
              These terms and conditions apply to the StemLab app (hereby referred to as "Application") for mobile devices that was created by Lauper Labs (hereby referred to as "Service Provider") as a Freemium service.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
              <p>
                Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">User-Imported Audio</h2>
              <p>
                You are responsible for ensuring that you have the right to use any audio, video, or other content you import into the Application. You must not import content that infringes any third party's intellectual property rights, privacy rights, or other rights. All audio you import is processed and stored locally on your device; the Service Provider does not receive, store, or have any access to your audio files.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Service Modifications</h2>
              <p>
                The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Data and Security</h2>
              <p>
                Because all audio processing runs on-device, your audio never leaves your iPhone via the Application. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advises against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Internet Connection and Data Usage</h2>
              <p>
                Core audio separation and mixing features do not require an internet connection — everything runs on your device. Some secondary functions (such as downloading optional AI model updates or managing your Apple subscription) may require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if these functions do not work due to lack of access to Wi-Fi or if you have exhausted your data allowance.
              </p>
              <p>
                If you are using the Application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the Application, or other third-party charges. By using the Application, you accept responsibility for any such charges, including roaming data charges if you use the Application outside of your home territory without disabling data roaming. If you are not the bill payer for the device on which you are using the Application, the Service Provider assumes that you have obtained permission from the bill payer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Rate Limits and Usage</h2>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400 font-semibold mb-2">Usage Limitations:</p>
                <p>
                  The free tier of the Application may implement limits on certain features, including but not limited to the number of stem separations per day and the availability of individual stem export and full FX chains. These limits are in place to ensure fair usage and maintain service quality for all users. StemLab Pro unlocks unlimited separations, individual stem export, full FX chains, and unlimited presets.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Subscription and Cancellation</h2>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-400 font-semibold mb-2">Apple App Store Subscriptions:</p>
                <p className="mb-3">
                  If you purchased a subscription through the Apple App Store, you can manage and cancel your subscription directly through your Apple ID account:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-white/80">
                  <li>Open the Settings app on your iOS device</li>
                  <li>Tap your name at the top of the screen</li>
                  <li>Tap "Subscriptions"</li>
                  <li>Find StemLab in your list of subscriptions</li>
                  <li>Tap "Cancel Subscription"</li>
                </ol>
                <p className="mt-3 text-sm text-white/60">
                  You can also manage subscriptions through the App Store app or iTunes on your computer. A one-time lifetime purchase is not a subscription and does not recur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Device Responsibility</h2>
              <p>
                The Service Provider cannot always assume responsibility for your usage of the Application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Accuracy and Updates</h2>
              <p>
                In terms of the Service Provider's responsibility for your use of the Application, while they strive to ensure that it is updated and accurate at all times, AI models produce approximate results. Separation quality will vary based on the source material. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on the output of the Application.
              </p>
              <p>
                The Service Provider may wish to update the Application at some point. The Application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the Application to); requirements may change, and you will need to download the updates if you want to continue using the Application. The Service Provider does not guarantee that it will always update the Application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the Application when offered to you. The Service Provider may also wish to cease providing the Application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the Application, and (if necessary) delete it from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Changes to These Terms and Conditions</h2>
              <p>
                The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.
              </p>
              <p>
                These terms and conditions are effective as of {new Date().toISOString().slice(0, 10)}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p>
                If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at lauperlabs@gmail.com.
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
            <Link href="/stemlab/privacy" className="text-xs text-white/70 hover:text-white">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
