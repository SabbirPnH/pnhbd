import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setProgress(40));
    Router.events.on("routeChangeComplete", () => setProgress(100));
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <base href="/"></base>
      </Head>
      <LoadingBar
        color="#f89928"
        waitingTime={500}
        shadow={true}
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
