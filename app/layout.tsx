"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "@/globalStyles/Reset.scss";
import "@/globalStyles/Variables.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Cover from "@/components/cover/Cover";
import Metadata from "./Metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cover, setCover] = useState(true);
  const [isCoverVisible, setIsCoverVisible] = useState(true);
  useEffect(() => {
    const coverShown = sessionStorage.getItem("coverShown");
    if (coverShown) {
      setCover(false);
      setIsCoverVisible(false);
    } else {
      sessionStorage.setItem("coverShown", "true");
      setCover(true);
    }
  }, []);

  useEffect(() => {
    if (cover) {
      const timer = setTimeout(() => {
        setCover(false);
        setTimeout(() => {
          setIsCoverVisible(false);
        }, 4000);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [cover]);

  return (
    <html lang="en">
      <head>
        <Metadata seoTitle="topndown" seoDescription="top & down post" />
      </head>
      <body className={inter.className}>
        {isCoverVisible && (
          <Cover off={cover ? "on" : "off"} linkMove={cover ? true : false} />
        )}
        {!cover && (
          <main className="wrap">
            <Header />
            <div>{children}</div>
            <Footer />
          </main>
        )}
      </body>
    </html>
  );
}
