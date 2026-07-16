import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import AboutFounder from '@/components/AboutFounder';
import BentoGrid from '@/components/BentoGrid';
import Gallery from '@/components/Gallery';
import GalleryHomeCarousel from '@/components/GalleryHomeCarousel';  // nouveau
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <AboutFounder />
      <GalleryHomeCarousel />  {/* section mobile-first */}
      <BentoGrid />
      <Gallery />
      <Partners />
    </>
  );
}