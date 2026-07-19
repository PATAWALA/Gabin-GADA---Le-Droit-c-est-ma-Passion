import HeroSection from '@/components/sections/HeroSection';
import CabinetsGrid from '@/components/sections/CabinetsGrid';
import LibrarySection from '@/components/sections/LibrarySection';
import EventWidget from '@/components/EventWidget';
import AcademySection from '@/components/sections/AcademySection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <EventWidget />
      <HeroSection />
      <CabinetsGrid />
      <LibrarySection />
      <AcademySection />
      <CTASection />
    </>
  );
}