'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/ed20261.jpg',
  '/images/ed20262.jpg',
  '/images/ed20263.jpg',
  '/images/ed20264.jpg',
  '/images/ed20265.jpg',
  '/images/ed20266.jpg',
];

export default function GalleryHomeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
      <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
        Nos meilleurs <span className="text-gradient-gold">moments</span>
      </h2>
      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-legal-950/70 p-2 rounded-full text-white/70 hover:text-white hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-legal-950/70 p-2 rounded-full text-white/70 hover:text-white hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-white/5"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={src}
                  alt={`Moment fort ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 320px"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}