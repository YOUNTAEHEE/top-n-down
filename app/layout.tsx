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

  useEffect(() => {
    const coverShown = sessionStorage.getItem("coverShown");
    if (!coverShown) {
      sessionStorage.setItem("coverShown", "true");
      setCover(true);
    } else {
      setCover(false);
    }
  }, []);

  useEffect(() => {
    if (cover) {
      const timer = setTimeout(() => {
        setCover(false);
      }, 1000);

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
        {cover ? (
          // <div className={`${cover ? "on" : "off"} mainCover`}>
          <Cover off={cover ? "on" : "off"} />
        ) : (
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
