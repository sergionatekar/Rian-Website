import Features from "@/components/home/features";
import HeroSection from "@/components/home/hero-section";
import Clients from "@/components/home/clients";

export default function Home() {
  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12">
      <HeroSection />
      <Features />
      <Clients />
    </main>
  );
}
