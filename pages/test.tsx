import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Test: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Page</title>
        <meta
          property="og:title"
          key="og:title"
          content="Title for Test Page"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta charSet="utf-8" />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content="This is my description - Something very cool"
        />
        <meta
          property="og:image"
          key="og:image"
          content="https://images.unsplash.com/photo-1657299156568-c94580e20fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
        />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Test</h1>
      </main>
    </div>
  );
};

export default Test;
