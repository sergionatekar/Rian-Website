import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";
// Load Onest font
const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rian – AI-Powered Voiceovers & Translations",
  description:
    "Effortlessly create professional-grade voiceovers and translate content into multiple languages with Rian's intuitive AI-powered platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-45WRL3FEVP"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-45WRL3FEVP');
          `}
        </Script>
      </head>
      <body className={`${onest.variable} antialiased bg-[#1D1D1D] grain-texture lg:pb-12`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
