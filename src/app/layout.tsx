import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/layout/navbar";
import Footer from "@/components/ui/layout/footer";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${onest.variable} antialiased bg-[#1D1D1D] grain-texture`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
