import React from "react";
import Image from "next/image";

export default function DocumentFeatures() {
  return (
    <section className="w-full lg:py-12 py-6">
      <h2 className="text-3xl lg:text-5xl font-light text-white text-center mb-12">
        The Science of Language Transformation
      </h2>
      <div className="w-full flex flex-col xl:flex-row gap-4 xl:gap-6 xl:max-h-[695px]">
        {/* Left Section (40%) */}
        <div className="flex flex-col gap-6 w-full xl:w-[40%]">
          {/* Top Card: 300M+ Words Translated */}
          <div className="rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/words.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between p-8 min-h-[220px] xl:min-h-[354px]">
            <div className="flex flex-col xl:justify-end h-full">
              <div className="text-[40px] lg:text-6xl xl:text-[82px] text-white mb-2">
                300M+
              </div>
              <div className="text-lg text-white font-light ">
                Words Translated
              </div>
            </div>
          </div>
          {/* Bottom Card: Language Cloud + Agent */}
          <div className="relative rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/languages.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-end p-8 min-h-[180px] xl:min-h-[314px]">
            <div className="text-white/30 text-base lg:text-2xl font-light mb-8 -z-1">
              English Español Français Deutsch Italiano
              <br />
              Português Русский 中文 हिंदी 日本語 Türkçe
              <br />
              한국어 العربية Türkçe Nederlands Ελληνικά
              <br />
              বাংলা עברית Tiếng Việt தமிழ் English
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src="/images/platform/translation.svg"
                alt="Translation AI Agent"
                width={52}
                height={52}
              />
              <span className="text-white text-lg font-medium">
                Translation AI Agent
              </span>
            </div>
          </div>
        </div>
        {/* Right Section (60%) */}
        <div className="flex flex-col gap-6 w-full xl:w-[60%]">
          {/* Top Row: Two Cards */}
          <div className="flex flex-col xl:flex-row gap-4">
            {/* Card: Features List */}
            <div className="rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/bullets-2.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between p-8 flex-1 min-h-[220px] xl:min-h-[354px]">
              <ul className="text-white/80 text-base lg:text-lg font-light space-y-3 list-disc pl-4">
                <li>Fast, Accurate translations in minutes.</li>
                <li>Supports 60+ languages.</li>
                <li>DTP/Formatting Support.</li>
                <li>Millions of words translated every month.</li>
              </ul>
            </div>
            {/* Card: AI Driven accuracy */}
            <div className="rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/ai.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between p-8 flex-1 min-h-[220px] xl:min-h-[354px]">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-[40px] lg:text-6xl xl:text-[82px] text-white mb-2">
                    AI
                  </div>
                  <div className="text-lg text-white font-light mb-4">
                    Driven accuracy
                  </div>
                </div>
                <div className="text-white/60 text-base font-light max-w-[244px]">
                  Achieve translation precision across supported languages with
                  advanced AI models.
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Card: File Format */}
          <div className="rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/fileformat.png')] bg-cover bg-center bg-no-repeat flex flex-col xl:flex-row xl:items-end justify-between h-full p-8 min-h-[314px]">
            {/* Left: 20+ and File Format */}
            <div className="flex flex-col xl:mb-0 mb-4">
              <div className="text-[40px] lg:text-6xl xl:text-[82px] text-white mb-2">
                20+
              </div>
              <div className="text-lg text-white font-light">
                File Format
              </div>
            </div>
            {/* Right: Description */}
            <div className="text-white/70 text-base font-light xl:text-right xl:max-w-[340px]">
              We offer active support for over 20 file formats whether it&apos;s your
              PowerPoint, Excel sheet, HTML file, or more, we have got you
              completely covered.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
