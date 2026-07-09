import type { Metadata } from 'next';
import History from '@/components/about/History';
import LocateBanner from '@/components/about/LocateBanner';
import CorpsExecutives from '@/components/about/CorpsExecutives';
import StateExecutives from '@/components/about/StateExecutives';
import Contact from '@/components/about/Contact';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story, executives, and state leadership behind MCAN Rivers State.',
};

export default function AboutPage() {
  return (
    <>
      <History />
      <LocateBanner />
      <CorpsExecutives />
      <StateExecutives />
      <Contact />
    </>
  );
}
