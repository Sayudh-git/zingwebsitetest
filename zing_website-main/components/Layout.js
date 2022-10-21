import Head from "next/head";
import Image from "next/image";
import React from "react";
import zingBg from "../public/assets/zing-background.svg";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="bg-[url('/assets/zing-background.svg')] bg-cover md:bg-contain">
        {children}
      </main>
    </div>
  );
}

export default Layout;
