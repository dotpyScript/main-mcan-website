import Hero from '@/components/sections/Hero';
import ChapterStrip from '@/components/sections/ChapterStrip';
import CoreFeatures from '@/components/sections/features/CoreFeatures';
import About from '@/components/sections/About';
import HadithOfTheDay from '@/components/sections/HadithOfTheDay';
import Pillars from '@/components/sections/Pillars';
import Executives from '@/components/sections/Executives';
import WelfareReporting from '@/components/sections/WelfareReporting';
import CtaBanner from '@/components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <div className='relative h-[115dvh] sm:h-[120dvh] lg:h-[128vh]'>
        <div className='sticky top-0 h-dvh overflow-hidden lg:h-screen'>
          <Hero />
        </div>
      </div>
      <ChapterStrip />
      <CoreFeatures />
      <About />
      <HadithOfTheDay />
      <Executives />
      <Pillars />
      <WelfareReporting />
      <CtaBanner />
    </>
  );
}
