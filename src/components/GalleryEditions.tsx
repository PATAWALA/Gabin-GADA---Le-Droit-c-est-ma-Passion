'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const editions = [
  {
    year: '2025',
    images: Array.from({ length: 4 }, (_, i) => `/images/ed2025${i + 1}.jpg`),
  },
  {
    year: '2026',
    images: Array.from({ length: 4 }, (_, i) => `/images/ed2026${i + 1}.jpg`),
  },
];

export default function GalleryEditions() {
  const [activeYear, setActiveYear] = useState('2026');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentEdition = editions.find((e) => e.year === activeYear) || editions[0];
  const allImages = currentEdition.images;
  const totalImages = allImages.length;

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

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? totalImages - 1 : prev! - 1));
  }, [totalImages]);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === totalImages - 1 ? 0 : prev! + 1));
  }, [totalImages]);

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
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
      <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
        Souvenirs des <span className="text-gradient-gold">éditions</span>
      </h2>

      <div className="flex justify-center gap-4 mb-12">
        {editions.map((edition) => (
          <button
            key={edition.year}
            onClick={() => setActiveYear(edition.year)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeYear === edition.year
                ? 'bg-gold-500 text-legal-950 shadow-lg shadow-gold-500/20'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            Édition {edition.year}
          </button>
        ))}
      </div>

      {/* Grille d'images – retour au remplissage complet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allImages.map((src, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 group cursor-pointer transition-all duration-500 hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/10"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={src}
                alt={`Souvenir ${activeYear} - ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            aria-label="Suivant"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={allImages[lightboxIndex]}
              alt={`Vue agrandie ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              unoptimized
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