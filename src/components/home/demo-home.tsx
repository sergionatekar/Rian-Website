'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ShineBorder } from '../magicui/shine-border';

const demoItems = [
  {
    title: 'AI Dubbing',
    description: 'Automatically dub your videos into multiple languages with natural-sounding AI voices.'
  },
  {
    title: 'Voice Cloning',
    description: 'Create a digital replica of any voice with just a few minutes of audio.'
  },
  {
    title: 'Lip Sync',
    description: 'Perfectly match lip movements to any dubbed audio for a natural look.'
  },
];

export default function DemoHome() {
  const [hasVideoStarted, setHasVideoStarted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error('Error playing video:', error);
        });
      }
      setIsVideoPlaying(!isVideoPlaying);
      setHasVideoStarted(true);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };

  return (
    <section className="w-full max-w-[1720px] rounded-2xl lg:rounded-[48px] bg-[#FFFFFF]/5 mx-auto px-4 lg:px-8 py-16 lg:py-12">
      {/* Title */}
      <div className="text-center mb-12 md:mb-16 max-w-[896px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
          Integrating AI and Human Expertise in Dubbing & Localization.
        </h2>
      </div>

      {/* Demo Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 max-w-[1424px] mx-auto">
        {demoItems.map((item, index) => (
          <div key={index} className="relative group">
            <div className="relative z-10 h-full bg-[#7C7C7C]/5 border border-[#6D6D6D] rounded-xl p-6 overflow-hidden hover:shadow-[0_18px_44px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out">
              {/* ShineBorder on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ShineBorder 
                  className="w-full h-full rounded-xl"
                  shineColor={["#FD184A", "#4AFDF1", "#F1FA38"]}
                  borderWidth={1}
                  duration={8}
                />
              </div>
              
              {/* Card content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl lg:text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-[#949494] text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Demo Section */}
      <div className="relative max-w-[1100px] mx-auto rounded-[40px] p-4 bg-[#FFFFFF]/10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home/demo-home-bg.png"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Background Image */}
        <div className="relative aspect-video w-full rounded-[32px] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[#FFFFFF]/10 rounded-[32px]" />
          
          {/* Video Thumbnail - Only show before first play */}
          {!hasVideoStarted && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/home/demo-home-thumbnail.png"
                alt="Video thumbnail"
                fill
                className="object-cover"
                priority
              />
              <button 
                onClick={handleVideoClick}
                className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Play video"
              >
                <svg 
                  className="w-6 h-6 md:w-8 md:h-8 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
          
          {/* Video Element */}
          <video
            ref={videoRef}
            className={`w-full h-full object-contain ${!hasVideoStarted ? 'opacity-0' : 'opacity-100'}`}
            playsInline
            poster="/images/home/demo-home-bg.png"
            onClick={handleVideoClick}
            onEnded={handleVideoEnded}
          >
            <source src="/videos/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button Overlay */}
          {hasVideoStarted && (
            <button 
              onClick={handleVideoClick}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity ${
                isVideoPlaying 
                  ? 'bg-black/10 opacity-0 hover:opacity-100' 
                  : 'opacity-100'
              }`}
              aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                {isVideoPlaying ? (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
