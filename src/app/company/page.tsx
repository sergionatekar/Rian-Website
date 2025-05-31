'use client';

import CompanyHero from "@/components/company/company-hero";
import Impact from "@/components/company/impact";
import Progress from "@/components/company/progress";
import TeamSection from "@/components/company/team";
import TransformingStories from "@/components/company/transforming-stories";
import Testimonials from "@/components/company/testimonials";
import { InViewFade } from "@/components/ui/InViewFade";
import { useRef } from 'react';

export default function Home() {
  const impactRef = useRef<HTMLDivElement>(null);
  const handleLearnMore = () => {
    impactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12">
      <InViewFade>
        <CompanyHero onLearnMore={handleLearnMore} />
      </InViewFade>
      <InViewFade>
        <div ref={impactRef}>
          <Impact />
        </div>
      </InViewFade>
      <InViewFade>
        <Progress />
      </InViewFade>
      <InViewFade>
        <TransformingStories />
      </InViewFade>
      <InViewFade>
        <Testimonials />
      </InViewFade>
      <InViewFade>
        <TeamSection />
      </InViewFade>
    </main>
  );
}
