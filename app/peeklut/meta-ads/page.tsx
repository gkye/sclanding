import type { Metadata } from "next"
import Script from "next/script"

import MetaAdsRedirect from "./meta-ads-redirect"

const appStoreUrl =
  "https://apps.apple.com/app/apple-store/id6473661560?pt=127888120&ct=Meta_AD_1&mt=8"
const metaPixelSnippet = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1228467055287081');
fbq('track', 'PageView');`
const metaPixelNoscript = `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1228467055287081&ev=PageView&noscript=1"/>`

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
