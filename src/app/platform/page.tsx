'use client';

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MediaHero from '@/components/media-translation/media-hero';
import MediaFeatures from '@/components/media-translation/media-features';
import MediaBenefits from '@/components/media-translation/media-benefits';
import PlatformCTA from '@/components/media-translation/platform';
import DocumentHero from '@/components/document-translation/document-hero';
import DocumentFeatures from '@/components/document-translation/document-features';
import DocumentBenefits from '@/components/document-translation/document-benefits';
import DocumentUseCases from '@/components/document-translation/document-use-cases';
import MediaPros from '@/components/media-translation/media-pros';
import { AnimatePresence, motion } from 'framer-motion';

const tabContentContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.08,
    },
  },
  exit: {},
};

const tabContentItem = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  exit: { opacity: 0, y: 32, filter: "blur(8px)", transition: { duration: 0.18 } },
};

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
        <AnimatePresence mode="wait" initial={false}>
          {tab === 'media' && (
            <TabsContent value="media" forceMount key="media">
              <motion.div
                key="media-content"
                variants={tabContentContainer}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <motion.div variants={tabContentItem}><MediaHero /></motion.div>
                <motion.div variants={tabContentItem}><MediaFeatures /></motion.div>
                <motion.div variants={tabContentItem}><MediaBenefits /></motion.div>
                <motion.div variants={tabContentItem}><MediaPros /></motion.div>
                <motion.div variants={tabContentItem}><PlatformCTA /></motion.div>
              </motion.div>
            </TabsContent>
          )}
          {tab === 'document' && (
            <TabsContent value="document" forceMount key="document">
              <motion.div
                key="document-content"
                variants={tabContentContainer}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <motion.div variants={tabContentItem}><DocumentHero /></motion.div>
                <motion.div variants={tabContentItem}><DocumentFeatures /></motion.div>
                <motion.div variants={tabContentItem}><DocumentUseCases /></motion.div>
                <motion.div variants={tabContentItem}><DocumentBenefits /></motion.div>
                <motion.div variants={tabContentItem}><PlatformCTA /></motion.div>
              </motion.div>
            </TabsContent>
          )}
        </AnimatePresence>
      </Tabs>
    </main>
  );
}
