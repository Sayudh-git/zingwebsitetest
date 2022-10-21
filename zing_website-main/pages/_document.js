import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const domain = "http://localhost:3000";
  const url = "/";
  const canonical = url && url === "/" ? domain : domain + url;
  const featuredImage = domain + "/assets/zingLogo.jpg";
  const description =
    "Zing lets you pre-order food from your favourite food outlets and restaurants. Why wait in a Queue?";
  const title = "Zing - Preorder food takeaway";

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />{" "}
        {description && <meta content={description} name="description" />}
        <meta content="follow, index" name="robots" />
        <meta content="/browserconfig.xml" name="msapplication-config" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {url && <link href={canonical} rel="canonical" />}
        <meta content="en_IN" property="og:locale" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />
        {/* TO BE DONE AFTER HOSTING  */}
        {/* <meta content="5e41b2275db646a5" name="yandex-verification" />
        <meta
          content="t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc"
          name="google-site-verification"
        /> */}
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        <meta content="website" property="og:type" />
        {/* TWITTER NAME  */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="ZingNow" name="twitter:site" />
        <meta content="ZingNow" name="twitter:creator" />
        <link rel="icon" type="image/x-icon" href="/zingLogo.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/zingLogo.ico" />
        {/* FONTS  */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
