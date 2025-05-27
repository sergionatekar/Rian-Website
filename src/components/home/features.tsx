import Image from "next/image";

export default function Features() {
  return (
    <section className="max-w-[1820px] mx-auto px-4 lg:px-12 my-4 lg:my-16">
      <h2 className="text-center text-white text-5xl font-light mb-6">
        AI + Human hybrid model for <br className="hidden lg:block" />
        emotion-aware output
      </h2>

      <div className="grid lg:grid-cols-3 gap-6 min-h-[690px]">
        {/* Card 1 */}
        <div className="relative bg-[#7C7C7C]/5 border border-[#FFFFFF]/10 p-6 rounded-3xl flex flex-col justify-between overflow-hidden min-h-[340px]">
          <div className="relative z-10">
            <h3 className="text-3xl mb-4">30+</h3>
            <p className="text-lg mb-6">AI dubbing languages</p>
            <ul className="space-y-3 text-base text-[#C1C1C1]">
              <li>Neural voice synthesis</li>
              <li>AI-powered lip-sync & match</li>
              <li>Emotion-aware dubbing</li>
              <li>Multilingual output in hours</li>
            </ul>
          </div>
          <Image
            src="/icons/dubbing-icon.svg"
            alt="Icon"
            width={144}
            height={144}
            className="lg:w-[144px] w-[72px] h-auto absolute top-6 right-6 z-10 object-contain"
          />
          {/* Overlay */}
          <Image
            src="/images/home/feature-overlay-1.png"
            alt="Overlay 1"
            fill
            className="absolute inset-0 object-cover rounded-3xl pointer-events-none z-20"
            priority={false}
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#7C7C7C]/5 border border-[#FFFFFF]/10 p-6 rounded-3xl flex flex-col justify-center overflow-hidden min-h-[340px]">
          <div className="relative z-10">
            <h3 className="text-3xl mb-4">60+</h3>
            <p className="text-lg">document translation</p>
          </div>
          {/* Overlay */}
          <Image
            src="/images/home/feature-overlay-2.png"
            alt="Overlay 2"
            fill
            className="absolute inset-0 object-cover rounded-3xl pointer-events-none z-20"
            priority={false}
          />
        </div>

        {/* Cards 3 & 4 stacked */}
        <div className="flex flex-col gap-6">
          {/* Card 3 */}
          <div className="relative bg-[#7C7C7C]/5 border border-[#FFFFFF]/10 p-6 rounded-3xl flex flex-col justify-between overflow-hidden min-h-[160px] lg:min-h-[170px] flex-1">
            <div className="relative z-10">
              <ul className="space-y-4 text-base text-[#C1C1C1]">
                <li>OTT & Streaming</li>
                <li>Podcasts & Audiobooks</li>
                <li>Marketing Videos</li>
                <li>EdTech & eLearning</li>
              </ul>
            </div>
            {/* Overlay */}
            <Image
              src="/images/home/feature-overlay-3.png"
              alt="Overlay 3"
              fill
              className="absolute inset-0 object-cover rounded-3xl pointer-events-none z-20"
              priority={false}
            />
          </div>
          {/* Card 4 */}
          <div className="relative bg-[#7C7C7C]/5 border border-[#FFFFFF]/10 p-4 lg:p-8 rounded-3xl flex flex-col justify-between overflow-hidden min-h-[160px] lg:min-h-[170px] flex-1">
            <div className="relative z-10 font-light text-white flex flex-col lg:justify-end h-full ">
              <h3 className="text-[32px] lg:text-[82px]">97%</h3>
              <p className="font-light text-base lg:text-2xl">linguistic accuracy</p>
            </div>
            <Image
              src="/icons/check-icon.svg"
              alt="Icon"
              width={144}
              height={144}
              className="absolute lg:w-[144px] w-[72px] h-auto bottom-6 right-6 z-10 object-contain"
            />
            {/* Overlay */}
            <Image
              src="/images/home/feature-overlay-4.png"
              alt="Overlay 4"
              fill
              className="absolute inset-0 object-cover rounded-3xl pointer-events-none z-20"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
