import HeroSection from '@/components/sections/HeroSection';
import SynergySection from '@/components/sections/SynergySection';
import CabinetsGrid from '@/components/sections/CabinetsGrid';
import GalleryEditions from '@/components/sections/GalleryEditions';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CabinetsGrid />
      <GalleryEditions />
    </>
  );
}