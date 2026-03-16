import type { Metadata } from "next"
import Script from "next/script"

import MetaAdsRedirect from "./meta-ads-redirect"

const appStoreUrl =
  "https://apps.apple.com/us/app/color-grade-video-peeklut/id6473661560?ppid=b90399d4-838d-4963-ae56-6b2ae5112476"
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1228467055287081"

const metaPixelSnippet = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`
const metaPixelNoscript = `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`

export const metadata: Metadata = {
  title: "PeekLUT – App Store Redirect",
  description: "Redirecting to the PeekLUT App Store listing.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function MetaAdsRedirectPage() {
  return (
    <>
      <Script
        id="meta-ads-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: metaPixelSnippet }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: metaPixelNoscript,
        }}
      />
      <MetaAdsRedirect appStoreUrl={appStoreUrl} />
    </>
  )
}
