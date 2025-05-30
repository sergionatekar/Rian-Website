import React from "react";
import Image from "next/image";

export default function DocumentUseCases() {
  return (
    <section className="w-full py-12 lg:py-20">
      <h2 className="text-3xl md:text-5xl font-light text-white text-center mb-4">
        Words That Travel the World
      </h2>
      <p className="text-base md:text-lg text-white/80 text-center mb-12 text-balance mx-auto">
        See how Rian&apos;s AI transforms documents into globally ready formats<br />
        accurate, context-aware, and true to their original intent.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:max-h-[1536px] mx-auto">
        {/* Card 1: Legal Documents */}
        <div className="relative rounded-3xl lg:rounded-[48px] overflow-hidden bg-[#495533] p-8 xl:p-12 min-h-[340px] lg:min-h-[450px] flex flex-col">
          <div className="relative z-10">
            <div className="text-white text-3xl md:text-5xl font-light mb-2">Legal Documents</div>
            <div className="text-white/90 text-base font-light mb-4 max-w-md">
              We translate contracts, agreements, patents, and more—ensuring accuracy, confidentiality, and compliance with local legal standards.
            </div>
          </div>
          {/* Desktop image */}
          <Image
            src="/images/platform/legal-doc.png"
            alt="Legal Documents"
            width={320}
            height={120}
            className="absolute left-0 bottom-0 w-full h-full object-cover z-0 pointer-events-none hidden lg:block"
            draggable={false}
          />
          {/* Mobile image */}
          <Image
            src="/images/platform/legal-doc-mobile.png"
            alt="Legal Documents"
            width={320}
            height={120}
            className="absolute left-0 bottom-0 w-full h-full object-cover z-0 pointer-events-none block lg:hidden"
            draggable={false}
          />
        </div>
        {/* Card 2: Marketing Assets */}
        <div className="relative rounded-3xl lg:rounded-[48px] overflow-hidden bg-[#386368] p-8 xl:p-12 min-h-[340px] lg:min-h-[450px] flex flex-col">
          <div className="relative z-10">
            <div className="text-white text-3xl md:text-5xl font-light mb-2">Marketing Assets</div>
            <div className="text-white/90 text-base font-light mb-4 max-w-md">
              Localize your brand voice with culturally relevant translations for websites, brochures, and digital campaigns that connect with your audience.
            </div>
          </div>
          {/* Desktop image */}
          <Image
            src="/images/platform/marketing-doc.png"
            alt="Marketing Assets"
            width={320}
            height={120}
            className="absolute left-0 bottom-0 w-full h-full object-cover z-0 pointer-events-none hidden lg:block"
            draggable={false}
          />
          {/* Mobile image */}
          <Image
            src="/images/platform/marketing-doc-mobile.png"
            alt="Marketing Assets"
            width={320}
            height={120}
            className="absolute left-0 bottom-0 w-full h-full object-cover z-0 pointer-events-none block lg:hidden"
            draggable={false}
          />
        </div>
        {/* Card 3: Technical Guides */}
        <div className="relative rounded-3xl lg:rounded-[48px] overflow-hidden bg-[#683853] p-8 xl:p-12 min-h-[340px] lg:min-h-[450px] flex flex-col">
          <div className="relative z-10">
            <div className="text-white text-3xl md:text-5xl font-light mb-2">Technical Guides</div>
            <div className="text-white/90 text-base font-light mb-4 max-w-md">
              From product manuals to software documentation, we help you communicate complex information clearly across global markets.
            </div>
          </div>
          {/* Desktop image */}
          <Image
            src="/images/platform/technical-doc.png"
            alt="Technical Guides"
            width={320}
            height={120}
            className="absolute left-0 bottom-0 w-full h-full object-cover z-0 pointer-events-none hidden lg:block"
            draggable={false}
          />
          {/* Mobile image */}
          <Image
            src="/images/platform/technical-doc-mobile.png"
            alt="Technical Guides"
            width={320}
            height={120}
            className="absolute left-0 bottom-0 w-full h-full object-cover z-0 pointer-events-none block lg:hidden"
            draggable={false}
          />
        </div>
        {/* Card 4: Medical & Documents */}
        <div className="relative rounded-3xl lg:rounded-[48px] overflow-hidden bg-[#413A5E] p-8 xl:p-12 min-h-[340px] lg:min-h-[450px] flex flex-col">
          <div className="relative z-10">
            <div className="text-white text-3xl md:text-5xl font-light mb-2">Medical & Documents</div>
            <div className="text-white/90 text-base font-light mb-4 max-w-md">
              We provide precise translations for clinical trials, medical records, and pharmaceutical documentation to meet regulatory and healthcare standards.
            </div>
          </div>
          {/* Desktop image */}
          <Image
            src="/images/platform/medical-doc.png"
            alt="Medical & Documents"
            width={320}
            height={120}
            className="absolute left-0 bottom-0 w-full h-full object-cover z-0 pointer-events-none hidden lg:block"
            draggable={false}
          />
          {/* Mobile image */}
          <Image
            src="/images/platform/medical-doc-mobile.png"
            alt="Medical & Documents"
            width={320}
            height={120}
            className="absolute left-0 bottom-0 w-full h-full object-cover z-0 pointer-events-none block lg:hidden"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
