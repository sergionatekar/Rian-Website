import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="w-full text-white py-8 lg:py-16 text-center relative overflow-hidden">
      {/* Title & Subtitle */}
      <div className="w-full mx-auto">
        <h1 className="text-4xl xl:text-[80px] lg:text-[50px] font-light mb-4 tracking-tight">
          AI that speaks the World&apos;s Language
        </h1>
        <p className="text-lg text-balance lg:text-[28px] xl:text-[48px] tracking-tight font-light text-[#FFFFFF]/50">
          Highlights Rian as a category-defining tech player
        </p>

        {/* Hero Image */}
        <div className="xl:-mt-48 lg:-mt-32 md:-mt-12">
          <Image
            src="/images/home/hero-image-web.png"
            alt="Rian Dashboard"
            width={1400}
            height={1180}
            className="w-full h-full object-contain mx-auto"
            priority
          />
        </div>

        {/* Description */}
        <p className="text-base lg:text-lg text-[#B3B3B3] max-w-[900px] mx-auto mb-10 xl:-mt-48 lg:-mt-32 md:-mt-12">
          With Rian&apos;s intuitive AI-powered platform, your team can effortlessly
          create professional-grade voiceovers, translate content into multiple
          languages, and make instant edits—all in-house. Eliminate reliance on
          external teams while maintaining full control, flexibility, and
          creative freedom.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/platform"
            className="w-full lg:w-fit"
          >
            <Button variant={"default"} className="md:w-fit w-full h-[64px] md:h-auto">
            Explore Platform
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
}
