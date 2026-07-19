import HeroSection from '@/components/sections/HeroSection';
import CabinetsGrid from '@/components/sections/CabinetsGrid';
import EventWidget from '@/components/EventWidget';
import GalleryEditions from '@/components/sections/GalleryEditions';

export default function Home() {
  return (
    <>
      <EventWidget />
      <HeroSection />
      <CabinetsGrid />
      <GalleryEditions />
    </>
  );
}