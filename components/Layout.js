import Head from "next/head";
import React from "react";

function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="">{children}</main>
    </div>
  );
}

export default Layout;
