'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MediaHero from '@/components/media-translation/media-hero';
import MediaFeatures from '@/components/media-translation/media-features';
import MediaBenefits from '@/components/media-translation/media-benefits';
import PlatformCTA from '@/components/media-translation/platform';
import DocumentHero from '@/components/document-translation/document-hero';
import DocumentFeatures from '@/components/document-translation/document-features';
import DocumentBenefits from '@/components/document-translation/document-benefits';
import DocumentUseCases from '@/components/document-translation/document-use-cases';
import React, { useEffect, useState } from 'react';
import MediaPros from '@/components/media-translation/media-pros';

export default function Home() {
  const [tab, setTab] = useState('media');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('platformTab') : null;
    if (stored) setTab(stored);
  }, []);

  const handleTabChange = (value: string) => {
    setTab(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('platformTab', value);
    }
  };

  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12">
      <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="mb-8 w-full max-w-[500px] rounded-full p-2 h-full mx-auto bg-[#FFFFFF]/5 border border-[#FFFFFF]/5 grid grid-cols-2">
          <TabsTrigger value="media" className='text-xs md:text-lg rounded-full h-full text-white py-3 px-4 data-[state=active]:text-[#2C2C2C]'>Media Translation</TabsTrigger>
          <TabsTrigger value="document" className='text-xs md:text-lg rounded-full h-full text-white py-3 px-4 data-[state=active]:text-[#2C2C2C]'>Document Translation</TabsTrigger>
        </TabsList>
        <TabsContent value="media">
          <MediaHero />
          <MediaFeatures />
          <MediaBenefits />
          <MediaPros />
          <PlatformCTA />
        </TabsContent>
        <TabsContent value="document">
          <DocumentHero />
          <DocumentFeatures />
          <DocumentUseCases />
          <DocumentBenefits />
          <PlatformCTA />
        </TabsContent>
      </Tabs>
    </main>
  );
}
