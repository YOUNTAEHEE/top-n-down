"use client";

import React, { useEffect, useState } from "react";
import MainPage from "@/components/main/Main";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Cover from "@/components/cover/Cover";
import styles from "./home.module.scss";

export default function Home({ children }: { children: React.ReactNode }) {
  const [cover, setCover] = useState(true);

  useEffect(() => {
    const coverShown = sessionStorage.getItem("coverShown");
    let timer: NodeJS.Timeout;
    if (!coverShown) {
      timer = setTimeout(() => {
        setCover(false);
        sessionStorage.setItem("coverShown", "true");
      }, 2000);
    } else {
      setCover(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  //   useEffect(() => {
  //     if (!cover && React.isValidElement(children)) {
  //       setShowMainPage(false);
  //     }
  //   }, [cover, children]);
  return (
    <>
      {cover === true ? (
        <Cover />
      ) : (
        <>
          <Header />
          <main className="wrap">{React.isValidElement(children) ? <div className={styles.containerWrap}>{children}</div> : <MainPage />}</main>
          <Footer />
        </>
      )}
    </>
  );
}
