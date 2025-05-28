'use client';

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export default function Clients() {
  // Initialize Embla Carousel with loop and snap behavior
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: false,
    dragFree: false,
    slidesToScroll: 1,
    inViewThreshold: 0.5
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Client logos data - 5 columns x 4 rows = 20 clients
  const clients = [
    // Column 1
    { id: 1, name: 'Client 1', logo: '/images/clients/client1.png' },
    { id: 2, name: 'Client 2', logo: '/images/clients/client2.png' },
    { id: 3, name: 'Client 3', logo: '/images/clients/client3.png' },
    { id: 4, name: 'Client 4', logo: '/images/clients/client4.png' },
    // Column 2
    { id: 5, name: 'Client 5', logo: '/images/clients/client5.png' },
    { id: 6, name: 'Client 6', logo: '/images/clients/client6.png' },
    { id: 7, name: 'Client 7', logo: '/images/clients/client7.png' },
    { id: 8, name: 'Client 8', logo: '/images/clients/client8.png' },
    // Column 3
    { id: 9, name: 'Client 9', logo: '/images/clients/client9.png' },
    { id: 10, name: 'Client 10', logo: '/images/clients/client10.png' },
    { id: 11, name: 'Client 11', logo: '/images/clients/client11.png' },
    { id: 12, name: 'Client 12', logo: '/images/clients/client12.png' },
    // Column 4
    { id: 13, name: 'Client 13', logo: '/images/clients/client13.png' },
    { id: 14, name: 'Client 14', logo: '/images/clients/client14.png' },
    { id: 15, name: 'Client 15', logo: '/images/clients/client15.png' },
    { id: 16, name: 'Client 16', logo: '/images/clients/client16.png' },
    // Column 5
    { id: 17, name: 'Client 17', logo: '/images/clients/client17.png' },
    { id: 18, name: 'Client 18', logo: '/images/clients/client18.png' },
    { id: 19, name: 'Client 19', logo: '/images/clients/client19.png' },
    { id: 20, name: 'Client 20', logo: '/images/clients/client20.png' },
  ];
  
  // Group clients into columns (5 columns with 4 clients each)
  const columns = [];
  for (let i = 0; i < 5; i++) {
    const column = [];
    for (let j = 0; j < 4; j++) {
      const index = i * 4 + j;
      if (index < clients.length) {
        column.push(clients[index]);
      }
    }
    columns.push(column);
  }
  
  // Duplicate columns for infinite loop effect
  const allColumns = [...columns, ...columns, ...columns];

  // Auto-scroll functionality - scroll by 1 column at a time
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // Update selected index when carousel moves
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up event listeners
  useEffect(() => {
    if (!emblaApi) return;
    
    // Initialize
    onSelect();
    
    // Listen to scroll events
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Clean up
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="max-w-[1720px] mx-auto lg:px-12 my-12 lg:my-24">
      <h2 className="text-center text-white lg:text-5xl text-[32px] font-light mb-6 tracking-tight">
      Not just clients—co-creators of our success.
      </h2>
      
      {/* Desktop Grid View (lg and above) - 5 columns x 4 rows */}
      <div className="hidden lg:grid grid-cols-5 gap-6 mt-12">
        {Array(5).fill(0).map((_, colIndex) => (
          <div key={`col-${colIndex}`} className="flex flex-col gap-6">
            {Array(4).fill(0).map((_, rowIndex) => {
              const client = clients[colIndex * 4 + rowIndex];
              return client ? (
                <div 
                  key={client.id}
                  className="bg-[#2A2A2A] rounded-2xl flex items-center justify-center min-h-[142px] hover:bg-[#5B5B5B1A] transition-colors duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={client.logo} 
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : null;
            })}
          </div>
        ))}
      </div>

      {/* Mobile Carousel (below lg) - Infinite scroll with 2 visible columns */}
      <div className="lg:hidden mt-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {allColumns.map((column, index) => (
              <div key={index} className="flex-[0_0_50%] min-w-0 px-2">
                <div className="flex flex-col gap-4 h-full">
                  {column.map((client) => (
                    <div 
                      key={`${client.id}-${index}`}
                      className="bg-[#2A2A2A] rounded-md p-4 flex items-center justify-center min-h-[72px] md:min-h-[142px]"
                    >
                      <div className="relative w-full h-full">
                        <Image 
                          src={client.logo} 
                          alt={client.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots indicator - show only for actual columns, not duplicates */}
        <div className="flex justify-center mt-6 space-x-2">
          {columns.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-[6px] h-[6px] rounded-full transition-colors ${
                (selectedIndex % columns.length) === idx ? 'bg-white w-[16px]' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
