"use client";
import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import Image from 'next/image';
import { ShineBorder } from '@/components/magicui/shine-border';

const testimonials = [
  {
    message: `Rian transformed our content localization with precision and speed. Their AI-driven approach helped us adapt videos seamlessly into multiple languages, accelerating our global engagement. Truly a game-changer!`,
    name: 'Mark Stevens',
    designation: 'Head of Global Marketing at TechVibe',
  },
  {
    message: `Rian's AI Voice Match and Lip Sync brought our marketing video to life while preserving authenticity. Their expertise has helped us connect with global audiences like never before!`,
    name: 'Sophia Chen',
    designation: 'Content Director at MediaWave',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-[1720px] mx-auto py-4 md:py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">Voices of Trust</h2>
        <p className="text-base lg:text-2xl font-light text-balance max-w-[1185px] mx-auto">
          Rian blends the power of AI with cultural nuance to transform how content is experienced across the globe. Every message is shaped to resonate deeply, breaking barriers and building authentic connections.
        </p>
      </div>
      <div className="relative">
        {/* On md+ screens, show both cards side by side, no carousel controls */}
        <div className="hidden md:flex gap-8 py-16 lg:px-12 justify-center">
          {testimonials.map((t, idx) => (
            <div key={idx} className="md:min-h-[344px] group flex flex-col justify-between basis-1/2 max-w-full xl:max-w-[540px] p-0">
              <div className="relative flex flex-col justify-between h-full w-full bg-[#7C7C7C]/5 border border-[#FFFFFF]/20 rounded-3xl px-4 py-5 lg:px-8 lg:py-10 shadow-[0_18px_44px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_0_24px_0_#E375E9,0_18px_44px_0_rgba(253,117,233,0.2)]">
                {/* ShineBorder on hover */}
                <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ShineBorder shineColor={['#E375E9', '#FF5F45']} borderWidth={2} duration={8} className="w-full h-full rounded-3xl" />
                </div>
                {/* Message */}
                <p className="text-sm lg:text-lg font-light mb-8 z-10 relative">&quot;{t.message}&quot;</p>
                {/* Name & Designation */}
                <div className="flex items-end justify-between mt-auto w-full">
                  <div className="flex flex-col">
                    <span className="font-semibold text-white text-base lg:text-lg mb-1">{t.name}</span>
                    <span className="text-xs lg:text-sm text-[#A1A1A1]">{t.designation}</span>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <Image src="/images/company/quotes.svg" alt="Quote" width={64} height={64} className="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* On small screens, keep carousel with one card visible at a time */}
        <div className="md:hidden">
          <Carousel>
            <CarouselContent className="gap-8 py-10 lg:py-16 px-8 md:px-12">
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="group flex flex-col justify-between basis-full md:max-w-full max-w-[320px] p-0">
                  <div className="relative flex flex-col justify-between h-full w-full bg-[#7C7C7C]/5 border border-[#FFFFFF]/20 rounded-3xl px-4 py-5 lg:px-8 lg:py-10 shadow-[0_18px_44px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_0_24px_0_#E375E9,0_18px_44px_0_rgba(253,117,233,0.2)]">
                    {/* ShineBorder on hover */}
                    <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ShineBorder shineColor={['#E375E9', '#FF5F45']} borderWidth={2} duration={8} className="w-full h-full rounded-3xl" />
                    </div>
                    {/* Message */}
                    <p className="text-sm lg:text-lg font-light mb-8 z-10 relative">&quot;{t.message}&quot;</p>
                    {/* Name & Designation */}
                    <div className="flex items-end justify-between mt-auto w-full">
                      <div className="flex flex-col">
                        <span className="font-semibold text-white text-base lg:text-lg mb-1">{t.name}</span>
                        <span className="text-xs lg:text-sm text-[#A1A1A1]">{t.designation}</span>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <Image src="/images/company/quotes.svg" alt="Quote" width={64} height={64} className="" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
