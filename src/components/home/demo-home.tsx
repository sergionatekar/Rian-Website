'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ShineBorder } from '../magicui/shine-border';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '../ui/carousel';
import { Button } from '../ui/button';
import Link from 'next/link';

const demoItems = [
  {
    title: 'Customized Voice Match',
    description: 'Accelerate your content strategy',
  },
  {
    title: 'Emotional Voice Synthesis',
    description: 'Natural, engaging voice',
  },
  {
    title: 'Multi-Language Reach',
    description: 'Deliver exceptional results',
  },
];

// Demo video pairs for the carousel (3 cards, mapped to demoItems)
const demoVideoPairs = [
  {
    before: {
      src: '/videos/video-1-before.mp4',
      label: 'Before (English)',
      langTag: 'ENGLISH',
    },
    after: {
      src: '/videos/video-1-after.mp4',
      label: 'After (Japanese)',
      langTag: 'JAPANESE',
    },
  },
  {
    before: {
      src: '/videos/video-2-before.mp4',
      label: 'Before (English)',
      langTag: 'ENGLISH',
    },
    after: {
      src: '/videos/video-2-after.mp4',
      label: 'After (French)',
      langTag: 'FRENCH',
    },
  },
  {
    before: {
      src: '/videos/video-3-before.mp4',
      label: 'Before (Hindi)',
      langTag: 'HINDI',
    },
    after: {
      src: '/videos/video-3-after.mp4',
      label: 'After (German)',
      langTag: 'GERMAN',
    },
  },
];

function VideoCard({ src, label, langTag }: { src: string; label: string; langTag: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#FFFFFF]/10 p-2 flex flex-col mx-auto">
      {/* Video Element (always visible, no thumbnail) */}
      <div className="relative w-full h-full cursor-pointer" onClick={handlePlayPause}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-2xl"
          playsInline
          onClick={handlePlayPause}
          onEnded={handleEnded}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Play/Pause Overlay */}
        <button
          className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity ${isPlaying ? 'bg-black/10 opacity-0 hover:opacity-100' : 'opacity-100'}`}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          onClick={handlePlayPause}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            {isPlaying ? (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>
        {/* Language Tag Overlay */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md z-20">
          {langTag}
        </div>
      </div>
      {/* Label */}
      <div className="text-center text-white text-base mt-2 mb-1 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function DemoHome() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  // Handler to sync carousel index with feature cards
  const handleSetApi = (api: CarouselApi | undefined) => {
    if (!api) return;
    api.on('select', () => {
      setCarouselIndex(api.selectedScrollSnap());
    });
  };
  return (
    <section className="w-full max-w-[1720px] rounded-2xl lg:rounded-[48px] bg-[#232323] mx-auto px-4 lg:px-8 lg:py-16 py-10">
      {/* Title */}
      <div className="text-center mb-8 md:mb-12 max-w-[896px] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-light text-white mb-4">
          Integrating AI and Human Expertise in<br className="hidden md:block" /> Dubbing & Localization.
        </h2>
      </div>
      {/* Feature Cards Grid */}
      <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-8 mb-8 md:mb-10 max-w-[1424px] mx-auto">
        {demoItems.map((item, index) => (
          <div key={index} className="relative flex-1 min-w-[260px]">
            <div className={`relative z-10 h-full bg-[#232323] border rounded-xl p-6 overflow-hidden transition-all duration-300 ease-in-out ${carouselIndex === index ? 'shadow-[0_18px_44px_0_rgba(0,0,0,0.2)]' : 'border-[#6D6D6D] border-[1.5px]'}`}> 
              {/* ShineBorder only on active */}
              {carouselIndex === index && (
                <div className="absolute inset-0 opacity-100 transition-opacity duration-300 pointer-events-none">
                  <ShineBorder 
                    className="w-full h-full rounded-xl"
                    shineColor={["#FD184A", "#4AFDF1", "#F1FA38"]}
                    borderWidth={1}
                    duration={8}
                  />
                </div>
              )}
              {/* Card content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl lg:text-2xl text-white mb-2 md:mb-3">{item.title}</h3>
                <p className="text-[#949494] text-base md:text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Book a Demo Button */}
      <div className="flex justify-center mb-8 md:mb-12">
        <Link href="https://calendly.com/aryan-tiwari-rian/30min?month=2025-06" target="_blank">
        <Button className="px-8 py-3">Book a Demo</Button>
        </Link>
      </div>
      {/* Carousel Video Demo Section */}
      <div className="relative mx-auto rounded-[40px] p-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home/demo-home-bg.png"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Carousel className="relative" setApi={handleSetApi} opts={{ loop: false }}>
          <CarouselContent className="px-8">
            {demoVideoPairs.map((pair, idx) => (
              <CarouselItem key={idx} className="flex justify-center items-center">
                <div className="flex flex-row gap-6 w-full max-w-[80%] mx-auto">
                  <div className="min-w-0 flex justify-center">
                    <VideoCard src={pair.before.src} label={pair.before.label} langTag={pair.before.langTag} />
                  </div>
                  <div className="min-w-0 flex justify-center">
                    <VideoCard src={pair.after.src} label={pair.after.label} langTag={pair.after.langTag} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 z-20 bg-[#555555]/35 rounded-full " />
          <CarouselNext className="right-2 z-20 bg-[#555555]/35 rounded-full" />
        </Carousel>
      </div>
    </section>
  );
}

DemoHome.displayName = 'DemoHome';
