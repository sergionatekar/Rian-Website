import Image from 'next/image';
import { ShineBorder } from '@/components/magicui/shine-border';

const cards = [
  {
    icon: '/icons/speed.svg',
    title: 'Speed',
    description:
      'A seamless, end-to-end localization experience that prioritizes both speed and quality.',
    bg: '/images/company/stories-1.png',
  },
  {
    icon: '/icons/innovative-tech.svg',
    title: 'Innovative Tech',
    description:
      'A team that understands the nuances of visual storytelling and ensures your content resonates deeply with every viewer.',
    bg: '/images/company/stories-2.png',
  },
  {
    icon: '/icons/localization.svg',
    title: 'End-to-End Localization',
    description:
      'Innovative solutions that incorporate cutting-edge technology, setting Rian apart as a leader in video localization.',
    bg: '/images/company/stories-3.png',
  },
];

export default function TransformingStories() {
  return (
    <section className="w-full max-w-[1720px] mx-auto py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
          Transforming Stories, Connecting Worlds
        </h2>
        <p className="text-base lg:text-2xl font-light text-balance max-w-[1185px] mx-auto">
          Rian blends the power of AI with cultural nuance to transform how content is experienced across the globe. Every message is shaped to resonate deeply, breaking barriers and building authentic connections.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className="group relative flex flex-col items-center text-center bg-[#7C7C7C]/5 border-[1.5px] border-[#FFFFFF]/10 rounded-3xl px-8 py-10 shadow-[0_18px_44px_0_rgba(0,0,0,0.2)] overflow-hidden transition-transform bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${card.bg})` }}
          >
            {/* Shine border on hover */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ShineBorder shineColor={['#FD184A', '#4AFDF1', '#F1FA38']} borderWidth={2} duration={8} className="w-full h-full rounded-3xl" />
            </div>
            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="flex items-center justify-center mb-4 lg:mb-8">
                <Image src={card.icon} alt={card.title} width={64} height={64} className="w-10 h-10 lg:w-14 lg:h-14 object-contain" />
              </div>
              <h3 className="text-lg lg:text-2xl font-light mb-3">{card.title}</h3>
              <p className="text-sm lg:text-base font-light text-[#D1D5DB] mb-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
