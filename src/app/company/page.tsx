'use client';

import CompanyHero from "@/components/company/company-hero";
import Impact from "@/components/company/impact";
import Progress from "@/components/company/progress";
import TeamSection from "@/components/company/team";
import TransformingStories from "@/components/company/transforming-stories";
import Testimonials from "@/components/company/testimonials";
import { InViewFade } from "@/components/ui/InViewFade";

export default function Home() {
  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12">
      <InViewFade>
        <CompanyHero />
      </InViewFade>
      <InViewFade>
        <Impact />
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
