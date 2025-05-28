import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "../ui/button";

export default function CompanyHero() {
  return (
    <section className="w-full max-w-[1532px] text-white mx-auto flex flex-col items-center justify-center px-4 lg:px-8 lg:py-12 py-6 text-center relative">
      {/* Main Heading */}
      <h1 className="font-light text-3xl lg:text-[80px] leading-tight mb-6 md:mb-8">
        Bringing Stories to Life<br className="hidden md:block" />
        Across Borders
      </h1>
      {/* Subtitle */}
      <p className="text-base lg:text-2xl font-light mb-8 md:mb-12">
        At Rian, we specialize in video localization and document translation, helping creators and brands adapt content for global audiences. By blending AI with human expertise, we ensure every story retains its cultural authenticity and emotional impact.
      </p>
      {/* CTA Button */}
      <div className="mb-12 md:mb-20">
        <Button className="h-[46px] md:w-fit w-full">
          Learn More
        </Button>
      </div>
      {/* What Fuels Us Card */}
      <div className="relative w-full mx-auto mt-4">
        <div className="relative rounded-2xl lg:rounded-[24px] border border-white/20 bg-[#232323]/60 px-4 lg:px-12 py-8 lg:py-16 text-white overflow-hidden" style={{ boxShadow: '0 18px 44px 0 #00000033' }}>
          <ShineBorder borderWidth={1} duration={14} shineColor={["#FD184A", "#4AFDF1", "#F1FA38"]} className="z-10" />
          <h2 className="text-xl lg:text-2xl font-light mb-6">What Fuels Us</h2>
          <p className="text-sm lg:text-lg text-[#D1D5DB] font-light ">
            At Rian, we are driven by a mission to fuse the intelligence of AI with the depth of human expertise, creating content that goes far beyond translation to become truly culturally immersive and emotionally resonant. In a world where global communication is vital, we empower brands, media organizations, and content creators to expand their reach and relevance by making their stories universally accessible—without losing the nuances that make them powerful. Our approach blends advanced linguistic technologies, native cultural insight, and editorial finesse to produce high-quality content that adapts naturally to regional voices while preserving the intent, tone, and emotional weight of the original message. With a steadfast commitment to precision, authenticity, and continuous innovation, we ensure that every piece of content we touch serves as a bridge—connecting people, ideas, and experiences across languages and geographies, and enabling deeper, more meaningful engagement with audiences around the world.
          </p>
        </div>
      </div>
    </section>
  );
}
