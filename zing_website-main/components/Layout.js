import Head from "next/head";
import Image from "next/image";
import React from "react";

function Layout({ children }) {
  return (
    <div className="absolute w-full h-full overflow-hidden">
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
