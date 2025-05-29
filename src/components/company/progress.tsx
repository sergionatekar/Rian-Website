'use client';

import Image from 'next/image';

const Progress = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-visible">
      <div className="text-white mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Echoes of Progress
          </h2>
          <p className="text-[#D1D5DB] text-lg lg:text-xl max-w-6xl mx-auto">
            Each milestone reflects a seamless fusion of technology and human insight shattering language barriers and forging deeper global connections.
          </p>
        </div>

        {/* Progress Image */}
        <div className="mt-12 overflow-visible">
          <div className="relative  h-full w-full object-contain overflow-visible">
            <Image
              src="/images/company/progress-web.png"
              alt="Our Progress Chart"
              width={1715}
              height={1082}
              className="object-contain max-w-[1715px] max-h-[1082px] h-full w-full overflow-visible"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
