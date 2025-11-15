import Link from "next/link"
import Image from "next/image"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Opacity',
  description: 'Privacy policy for Opacity - Photo Filter & Adjustment App for iOS',
  icons: {
    icon: '/opacity_app_icon.png',
    apple: '/opacity_app_icon.png',
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/opacity" className="flex items-center gap-2">
            <Image
              src="/opacity_app_icon.png"
              alt="Opacity Icon"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-xl font-bold">Opacity</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container px-4 md:px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none text-white/80 space-y-6">
            <p>
              This privacy policy applies to the "Opacity" app (hereby referred to as "Application") for mobile devices that was created by Lauper Labs (hereby referred to as "Service Provider") as a Freemium service. This service is intended for use "AS IS".
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">What information does the Application obtain and how is it used?</h2>
              <p>
                The Application does not obtain any information when you download and use it. Registration is not required to use the Application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Does the Application collect precise real time location information of the device?</h2>
              <p>
                This Application does not collect precise information about the location of your mobile device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Do third parties see and/or have access to information obtained by the Application?</h2>
              <p>
                Since the Application does not collect any information, no data is shared with third parties.
              </p>
              <div className="bg-violet-500/10 border border-violet-500/20 rounded-lg p-4 mt-4">
                <p className="text-violet-400 font-semibold mb-2">Photo Processing:</p>
                <p>
                  All photo processing and filter adjustments are performed locally on your device. Your photos are never uploaded to external servers. The Application processes images entirely on-device to maintain your privacy and data security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">What are my opt-out rights?</h2>
              <p>
                You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Children</h2>
              <p>
                The Application is not used to knowingly solicit data from or market to children under the age of 13.
              </p>
              <p>
                The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Security</h2>
              <p>
                The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Changes</h2>
              <p>
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
              </p>
              <p>
                This privacy policy is effective as of 2025-11-15
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
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at hello@lauperlabs.com
              </p>
            </section>


          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/opacity_app_icon.png"
              alt="Opacity Icon"
              width={24}
              height={24}
              className="h-6 w-6 rounded-md"
            />
            <p className="text-sm font-medium">© {new Date().getFullYear()} Opacity. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/opacity" className="text-xs text-white/70 hover:text-white">
              Home
            </Link>
            <Link href="/opacity/terms" className="text-xs text-white/70 hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
