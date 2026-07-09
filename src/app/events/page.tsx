import type { Metadata } from 'next';
import { UPCOMING_EVENTS, PAST_EVENTS } from '@/components/events/data';
import EventHero from '@/components/events/EventHero';
import PrayerTimes from '@/components/events/PrayerTimes';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import PastEvents from '@/components/events/PastEvents';

export const metadata: Metadata = {
  title: 'News & Events',
  description:
    'Lectures, announcements, and events from MCAN Rivers State — what needs your attention now, what’s coming up, and what you missed.',
};

export default function EventsPage() {
  const featured = UPCOMING_EVENTS.find((event) => event.featured);
  const upcoming = UPCOMING_EVENTS.filter((event) => !event.featured);

  return (
    <>
      {featured && <EventHero event={featured} />}
      <PrayerTimes />
      <UpcomingEvents events={upcoming} />
      <PastEvents events={PAST_EVENTS} />
    </>
  );
}
