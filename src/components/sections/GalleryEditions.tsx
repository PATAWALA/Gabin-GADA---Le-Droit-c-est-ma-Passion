'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const editions = [
  { year: '2026', images: Array.from({ length: 4 }, (_, i) => `/images/ed2026${i + 1}.jpg`) },
  { year: '2025', images: Array.from({ length: 4 }, (_, i) => `/images/ed2025${i + 1}.jpg`) },
];

export default function GalleryEditions() {
  const [activeYear, setActiveYear] = useState('2026');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentEdition = editions.find((e) => e.year === activeYear) || editions[0];
  const allImages = currentEdition.images;
  const totalImages = allImages.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev === 0 ? totalImages - 1 : prev! - 1));
  const nextImage = () => setLightboxIndex((prev) => (prev === totalImages - 1 ? 0 : prev! + 1));

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Le Sommet en <span className="text-[#0A50C9]">Images</span>
          </h2>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {editions.map((edition) => (
            <button
              key={edition.year}
              onClick={() => setActiveYear(edition.year)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeYear === edition.year
                  ? 'bg-[#0A50C9] text-white shadow-md'
                  : 'bg-white text-[#0F172A] border border-[#E2E8F0] hover:bg-[#E8F0FE]'
              }`}
            >
              Édition {edition.year}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((src, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-white cursor-pointer group shadow-sm hover:shadow-md transition-all"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              <div className="aspect-[4/3] relative">
                <Image src={src} alt={`Souvenir ${activeYear}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" quality={90} />
              </div>
            </div>
          ))}
        </div>

        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/80 hover:text-white z-10"><X className="w-8 h-8" /></button>
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10 p-2"><ChevronLeft className="w-10 h-10" /></button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10 p-2"><ChevronRight className="w-10 h-10" /></button>
            <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
              <Image src={allImages[lightboxIndex]} alt="Vue agrandie" fill className="object-contain" unoptimized />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">{lightboxIndex + 1} / {totalImages}</div>
          </div>
        )}
      </div>
    </section>
  );
}