"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full max-w-[1920px] px-12 mx-auto">
      <div className="container flex items-center justify-between mx-auto lg:py-12 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/icons/rian-logo.svg" alt="Rian Logo" width={32} height={32} className="lg:w-18 lg:h-20 w-10 h-12 object-contain"/>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex text-lg text-white items-center space-x-10">
          <Link href="/platform" className="hover:text-white/80 transition">Platform</Link>
          <Link href="/vendor-registration" className="hover:text-white/80 transition">Vendor Registration</Link>
          <Link href="/company" className="hover:text-white/80 transition">Company</Link>
          <Link href="/rian-academy" className="font-medium transition bg-gradient-to-r from-[#67F5C8] to-[#ADFF15] bg-clip-text text-transparent hover:from-[#67F5C8]/80 hover:to-[#ADFF15]/80">Rian Academy</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/book-demo">
            <Button >Book a Demo</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
