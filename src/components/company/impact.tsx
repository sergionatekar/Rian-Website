'use client';

import Image from 'next/image';

const Impact = () => {
  const impactItems = [
    {
      icon: '/icons/quality.svg',
      title: 'Excellence in Quality',
      description:
        'We are committed to upholding the highest standards, particularly in video localization, where every subtitle, voice, and visual element must seamlessly align with the original intent.',
    },
    {
      icon: '/icons/innovation.svg',
      title: 'Pioneering Innovation',
      description:
        'Our proprietary AI-driven tools and patented workflows distinguish us, revolutionizing video localization and document translation with speed, efficiency, and exceptional accuracy.',
    },
    {
      icon: '/icons/collaboration.svg',
      title: 'Client-Centered Collaboration',
      description:
        'We consider ourselves partners in your global journey, collaborating closely to understand your goals and craft localized content that genuinely resonates with your target audience.',
    },
    {
      icon: '/icons/insight.svg',
      title: 'Human Insight Meets Tech',
      description:
        'While our advanced technology streamlines processes, it’s our language and cultural experts who bring the final product to life, ensuring every project authentically resonates with audiences.',
    },
  ];

  return (
    <section className="text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl mb-6">Ethos That Shapes Impact</h2>
        <p className="text-base lg:text-2xl font-light text-balance ">
          What we believe shapes what we build. These principles fuel our mission and define how we show up every day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-[1424px] mx-auto">
        {impactItems.map((item, index) => (
          <div key={index} className="p-6 rounded-2xl ">
            <div className="flex mb-4">
              <Image src={item.icon} alt={item.title} width={84} height={84} className="lg:w-22 lg:h-22 h-16 w-16 object-contain"/>
            </div>
            <h3 className="text-2xl lg:text-[40px] tracking-tight mb-3  lg:max-w-[80%] xl:max-w-full text-balance">{item.title}</h3>
            <p className="text-sm md:text-lg font-light tracking-tight max-w-[550px]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
