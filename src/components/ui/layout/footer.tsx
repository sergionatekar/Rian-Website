"use client";

import { Facebook, Instagram, Youtube, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white p-8 rounded-2xl mt-16 border border-[#333] max-w-7xl mx-auto"
      style={{
        background: "linear-gradient(90deg, #1D1D1D 0%, #1D1D1D 60%, #0F0F0F 100%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Left: Logo & description */}
        <div>
          <Image src="/logo-light.svg" alt="Rian Logo" width={120} height={40} className="mb-4" />
          <p className="text-sm text-gray-400 max-w-xs">
            At Rian, we specialize in video localization and document translation, helping creators and brands adapt content for global audiences. By blending AI with human expertise, we ensure every story retains its cultural authenticity and emotional impact.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-3 text-gray-300">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="#">Vendor Registration</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#" className="text-lime-400">Rian Academy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3 text-gray-300">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Responsible AI</Link></li>
            </ul>
          </div>
        </div>

        {/* Right: Social icons */}
        <div>
          <h4 className="font-medium mb-3 text-gray-300">Get in touch</h4>
          <div className="flex gap-3">
            <Link href="#"><Facebook className="w-6 h-6 text-gray-400 hover:text-white" /></Link>
            <Link href="#"><Instagram className="w-6 h-6 text-gray-400 hover:text-white" /></Link>
            <Link href="#"><Youtube className="w-6 h-6 text-gray-400 hover:text-white" /></Link>
            <Link href="#"><X className="w-6 h-6 text-gray-400 hover:text-white" /></Link>
          </div>
        </div>
      </div>

      {/* Address Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-[#2A2A2A] rounded-xl p-4 flex items-center gap-4">
          <Image src="/map-india.svg" alt="India Map" width={40} height={40} />
          <div>
            <h5 className="font-medium mb-1">India</h5>
            <p className="text-sm text-gray-400">
              Rikaian Technology Pvt. Ltd. <br />
              Survey number 846, Gokhale Sanchit, First floor, BMCC Rd, Deccan Gymkhana, Pune 411004, Maharashtra.
            </p>
          </div>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-4 flex items-center gap-4">
          <Image src="/map-japan.svg" alt="Japan Map" width={40} height={40} />
          <div>
            <h5 className="font-medium mb-1">Japan</h5>
            <p className="text-sm text-gray-400">
              Rikaian Technology Pvt. Ltd. <br />
              Fabbit Kyobashi 2F, 1-1-5 Central Bldg Chuo-Ku, Tokyo 104-0031
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        <div className="flex gap-3 mb-3 md:mb-0">
          <Link href="#">Terms of use</Link>
          <span>•</span>
          <Link href="#">Privacy Policy</Link>
        </div>
        <p>© 2025 Rikaian Technology Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
