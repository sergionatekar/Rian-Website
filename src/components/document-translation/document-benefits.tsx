import React from "react";
import Image from "next/image";

export default function DocumentBenefits() {
  return (
    <section className="relative w-full py-16 lg:py-24 flex flex-col min-h-[700px] items-center justify-center mb-12">
      {/* Content wrapper */}
      <div className="relative z-10 w-full mx-auto px-4 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-light text-white text-center mb-4">
          Engineered to Outperform
        </h2>
        {/* Description */}
        <p className="text-base md:text-lg text-white/80 text-center mb-12 max-w-2xl">
          Crafted for teams that move fast and localise smarter. <br className="hidden md:block" />
          Every feature solves a real-world challenge with precision and purpose.
        </p>
        {/* Cards */}
        <div className="w-full xl:max-h-[576px] xl:max-w-[1516px] grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <div className="relative min-w-[260px] xl:min-h-[576px] rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/benefit-1-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col p-8">
            <Image src="/images/platform/context-rich.png" alt="Context-Rich Translation Interface" width={160} height={160} className="mb-6 w-[140px] h-[155px] object-contain" />
            <div className="text-white text-2xl lg:text-[32px] font-light mb-4">Context-Rich<br />Translation Interface</div>
            <div className="mt-auto text-white/80 text-base md:text-xl font-light">
              Visual previews ensure translators work with full context, reducing guesswork and improving accuracy.
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative min-w-[260px] xl:min-h-[576px] rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/benefit-2-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col p-8">
            <Image src="/images/platform/ai-human.png" alt="AI + Human Workflow by Design" width={160} height={160} className="mb-6 w-[199px] h-[155px] object-contain" />
            <div className="text-white text-2xl lg:text-[32px] font-light mb-4">AI + Human<br />Workflow by Design</div>
            <div className="mt-auto text-white/80 text-base md:text-xl font-light">
              Style guides, glossaries, tone frameworks—customized and applied consistently across all projects.
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative min-w-[260px] xl:min-h-[576px] rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/benefit-3-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col p-8">
            <Image src="/images/platform/quality.png" alt="Quality You Can Count On" width={160} height={160} className="mb-6 w-[199px] h-[155px] object-contain" />
            <div className="text-white text-2xl lg:text-[32px] font-light mb-4">Quality You Can<br />Count On</div>
            <div className="mt-auto text-white/80 text-base md:text-xl font-light">
              Multiple levels of human quality control, combined with Translation Memory and a customizable QA panel, ensure consistently accurate, high-quality translations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
