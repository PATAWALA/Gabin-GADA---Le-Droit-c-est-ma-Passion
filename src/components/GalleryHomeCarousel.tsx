'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/ed20261.jpg',
  '/images/ed20262.jpg',
  '/images/ed20263.jpg',
  '/images/ed20264.jpg',
];

export default function GalleryHomeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const totalImages = images.length;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? totalImages - 1 : prev! - 1));
  }, [totalImages]);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === totalImages - 1 ? 0 : prev! + 1));
  }, [totalImages]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else prevImage();
    }
    setTouchStart(null);
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
          aria-label="Défiler à gauche"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-legal-950/70 p-2 rounded-full text-white/70 hover:text-white hidden md:block"
          aria-label="Défiler à droite"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-white/5 cursor-pointer group/card"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={src}
                  alt={`Moment fort ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                  sizes="(max-width: 640px) 280px, 320px"
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox identique à celle de GalleryEditions */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white z-10" aria-label="Fermer">
            <X className="w-8 h-8" />
          </button>
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2" aria-label="Précédent">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2" aria-label="Suivant">
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`Vue agrandie ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              unoptimized // qualité maximale dans la lightbox
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightboxIndex + 1} / {totalImages}
          </div>
        </div>
      )}
    </section>
  );
}