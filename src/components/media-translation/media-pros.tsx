import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
  "Multi-Format Video Support",
  "AI-Powered Voiceover and Dubbing",
  "Subtitle Translation",
  "Integration with CAT Tools",
  "Support for 60+ Global Languages",
];

export default function MediaPros() {
  return (
    <section className="w-full py-6 lg:pt-12">
      <h2 className="text-3xl lg:text-5xl text-white text-center mb-6 text-balance">
        Effortless Video Translation, Powered by AI
      </h2>
      <p className="text-base lg:text-2xl text-[#D1D5DB] text-center mb-12 text-balance mx-auto">
        Unlock global audiences with Rian&apos;s all-in-one platform from instant multilingual voiceovers to perfect lip-sync, speaker detection, and seamless editing. Translate, customise, and publish your videos faster than ever.
      </p>
      <div className="w-full  mx-auto rounded-[40px] bg-[#FFFFFF0A] flex flex-col xl:flex-row gap-0 lg:gap-8 items-stretch overflow-hidden">
        {/* Left: Features List */}
        <div className="flex flex-col justify-center gap-6 p-8 lg:p-16 w-full mx-auto xl:mx-0 xl:w-1/2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 bg-[#FFFFFF08] border-2 border-[#FFFFFF0A] rounded-full px-8 py-4"
            >
              <CheckCircle size={24} className="text-white flex-shrink-0" strokeWidth={2.5} />
              <span className="text-white text-sm md:text-lg font-light">{feature}</span>
            </div>
          ))}
        </div>
        {/* Right: Image */}
        <div className="p-8 xl:p-0 relative w-full bottom-8 xl:bottom-0 xl:right-8 xl:w-1/2 xl:min-h-[540px] flex items-center justify-center bg-transparent">
          <Image
            src="/images/platform/video-translation-dashboard.png"
            alt="Video translation dashboard preview"
            width={1000}
            height={1000}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
