"use client";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ShineBorder } from '@/components/magicui/shine-border';

const testimonials = [
  {
    message: `Rian transformed our content localization with precision and speed. Their AI-driven approach helped us adapt videos seamlessly into multiple languages, accelerating our global engagement. Truly a game-changer!`,
    name: 'Mark Stevens',
    designation: 'Head of Global Marketing at TechVibe',
  },
  {
    message: `Rian transformed our content localization with precision and speed. Their AI-driven approach helped us adapt videos seamlessly into multiple languages, accelerating our global engagement. Truly a game-changer!`,
    name: 'Mark Stevens',
    designation: 'Head of Global Marketing at TechVibe',
  },
  {
    message: `Rian transformed our content localization with precision and speed. Their AI-driven approach helped us adapt videos seamlessly into multiple languages, accelerating our global engagement. Truly a game-changer!`,
    name: 'Mark Stevens',
    designation: 'Head of Global Marketing at TechVibe',
  },
  {
    message: `Rian transformed our content localization with precision and speed. Their AI-driven approach helped us adapt videos seamlessly into multiple languages, accelerating our global engagement. Truly a game-changer!`,
    name: 'Mark Stevens',
    designation: 'Head of Global Marketing at TechVibe',
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1, containScroll: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full max-w-[1720px] mx-auto py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">Voices of Trust</h2>
        <p className="text-base lg:text-2xl font-light text-balance max-w-[1185px] mx-auto">
          Rian blends the power of AI with cultural nuance to transform how content is experienced across the globe. Every message is shaped to resonate deeply, breaking barriers and building authentic connections.
        </p>
      </div>
      <div className="relative">
        {/* Arrow Controls */}
        <button
          aria-label="Previous testimonial"
          onClick={scrollPrev}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#232323]/80 hover:bg-[#E375E9]/30 transition-colors border border-[#E375E9]/30"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#E375E9]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          aria-label="Next testimonial"
          onClick={scrollNext}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#232323]/80 hover:bg-[#E375E9]/30 transition-colors border border-[#E375E9]/30"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#E375E9]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Embla Carousel */}
        <div className="overflow-visible px-12" ref={emblaRef}>
          <div className="flex gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="group min-h-[344px] relative flex flex-col justify-between min-w-0 basis-full sm:basis-full md:basis-1/2 xl:basis-1/3 flex-shrink-0 max-w-full xl:max-w-[540px] bg-[#7C7C7C]/5 border border-[#FFFFFF]/20 rounded-3xl px-8 py-10 shadow-[0_18px_44px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out overflow-hidden hover:shadow-[0_0_24px_0_#E375E9,0_18px_44px_0_rgba(253,117,233,0.2)]"
              >
                {/* ShineBorder on hover */}
                <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ShineBorder shineColor={['#FD184A', '#4AFDF1', '#F1FA38']} borderWidth={2} duration={8} className="w-full h-full rounded-3xl" />
                </div>
                {/* Message */}
                <p className="text-base lg:text-lg font-light mb-8 z-10 relative">"{t.message}"</p>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
