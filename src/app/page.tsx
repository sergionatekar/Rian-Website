'use client';

import Features from "@/components/home/features";
import HeroSection from "@/components/home/hero-section";
import Clients from "@/components/home/clients";
import DemoHome from "@/components/home/demo-home";
import PlatformPromo from "@/components/home/platform-promo";
import { motion } from "framer-motion";
import { InViewFade } from "@/components/ui/InViewFade";

export default function Home() {
  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12">
      {/* Premium animation for HeroSection */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.08 }}
      >
        <HeroSection />
      </motion.div>

      {/* Features */}
      <InViewFade>
        <Features />
      </InViewFade>

      {/* Clients */}
      <InViewFade>
        <Clients />
      </InViewFade>

      {/* DemoHome */}
      <InViewFade>
        <DemoHome />
      </InViewFade>

      {/* PlatformPromo */}
      <InViewFade>
        <PlatformPromo />
      </InViewFade>
    </main>
  );
}
