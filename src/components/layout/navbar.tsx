'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full max-w-[1920px] px-4 sm:px-8 md:px-12 mx-auto">
      <div className="container max-w-[1560px] mx-auto flex items-center justify-between w-full lg:py-12 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/icons/rian-logo.svg" alt="Rian Logo" width={32} height={32} className="lg:w-18 lg:h-20 w-10 h-12 object-contain" />
        </Link>

        {/* Nav Links (Desktop) */}
        <nav className="hidden xl:flex text-lg text-white items-center space-x-10">
          <Link href="/platform" className="hover:text-white/80 transition">Platform</Link>
          <Link href="/vendor-registration" className="hover:text-white/80 transition">Vendor Registration</Link>
          <Link href="/company" className="hover:text-white/80 transition">Company</Link>
          <Link href="/rian-academy" className="font-medium transition bg-gradient-to-r from-[#67F5C8] to-[#ADFF15] bg-clip-text text-transparent hover:from-[#67F5C8]/80 hover:to-[#ADFF15]/80">Rian Academy</Link>
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden xl:flex items-center space-x-3">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/book-demo">
            <Button>Book a Demo</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                className="w-12 h-12 flex items-center justify-center border border-[#FFFFFF1C] rounded-sm bg-transparent relative group focus:outline-none"
              >
                {/* Always show two parallel lines */}
                <span className="flex flex-col items-center justify-center w-6 h-6 gap-1.5">
                  <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300" />
                  <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300" />
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={12}
              className="p-0 border border-[#FFFFFF]/10 bg-[#1D1D1D] bg-[url('/images/navbar-bg.svg')] bg-cover bg-no-repeat rounded-2xl shadow-2xl min-w-[90vw] md:min-w-[40vw] max-w-xs overflow-hidden z-10"
            >
              {/* Overlay Image */}
              
              {/* Menu Content */}
              <div className="relative z-10 flex flex-col py-8 px-6 gap-2 min-h-[60vh] rounded-2xl">
                <nav className="flex flex-col gap-8 lg:text-xl text-lg text-white">
                  <Link href="/platform" className="hover:text-white/80 transition" onClick={() => setOpen(false)}>Platform</Link>
                  <Link href="/vendor-registration" className="hover:text-white/80 transition" onClick={() => setOpen(false)}>Vendor Registration</Link>
                  <Link href="/company" className="hover:text-white/80 transition" onClick={() => setOpen(false)}>Company</Link>
                  <Link href="/rian-academy" className="font-medium transition bg-gradient-to-r from-[#67F5C8] to-[#ADFF15] bg-clip-text text-transparent hover:from-[#67F5C8]/80 hover:to-[#ADFF15]/80" onClick={() => setOpen(false)}>Rian Academy</Link>
                </nav>
                <div className="flex-1" />
                <div className="flex flex-col items-center gap-3 w-full">
                  <Link href="/login" className="w-full" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full h-[46px] bg-[#FFFFFF1A] border border-[#373737]">Login</Button>
                  </Link>
                  <Link href="/book-demo" className="w-full" onClick={() => setOpen(false)}>
                    <Button className="w-full h-[46px]">Book a Demo</Button>
                  </Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
