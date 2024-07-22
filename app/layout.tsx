import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globalStyles/Reset.scss";
import "@/globalStyles/Variables.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="wrap">
          <Header />
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
