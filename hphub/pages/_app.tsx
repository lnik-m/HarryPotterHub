import {AppProps} from "next/app";
import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return (<>
    <Head>
      <title>HP hub</title>
      <meta name="description" content="Web application about Harry Potter characters." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps}/>
  </>
  );
}

export default MyApp;