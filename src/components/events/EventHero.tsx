import Image from 'next/image';
import Link from 'next/link';
import { Radio, CalendarPlus, Calendar, Clock, MapPin } from 'lucide-react';
import { buildIcsHref, fullDate } from './utils';
import type { EventItem } from './data';

const EventHero = ({ event }: { event: EventItem }) => {
  const icsHref = buildIcsHref(event);

  return (
    <section className='bg-paper px-6 pb-16 pt-10 lg:px-10 lg:pt-20'>
      <div className='relative isolate mx-auto h-[80dvh] min-h-[34rem] w-full max-w-[120rem] overflow-hidden rounded-[1.5rem] sm:rounded-[1.5rem]'>
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5' />

        <div className='absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-8'>
          <span className='inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-paper backdrop-blur-sm'>
            <Radio className='size-3.5 animate-pulse text-gold-soft' />
            {event.type} · Needs your attention
          </span>
        </div>

        <div className='absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 sm:p-10 lg:p-14'>
          <div className='max-w-2xl'>
            <p className='label-mono text-[11px] text-gold-soft'>
              {fullDate(event.date)}
            </p>
            <h1 className='mt-3 text-3xl font-semibold tracking-tight text-paper text-balance sm:text-4xl lg:text-5xl'>
              {event.title}
            </h1>
            <p className='mt-4 max-w-xl text-[15px] leading-relaxed text-paper/75 sm:text-base'>
              {event.description}
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper/80'>
            <span className='inline-flex items-center gap-2'>
              <Calendar className='size-4 text-gold-soft' />
              {fullDate(event.date)}
            </span>
            <span className='inline-flex items-center gap-2'>
              <Clock className='size-4 text-gold-soft' />
              {event.displayTime}
            </span>
            <span className='inline-flex items-center gap-2'>
              <MapPin className='size-4 text-gold-soft' />
              {event.location}
            </span>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <a
              href={icsHref}
              download={`${event.id}.ics`}
              className='group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[15px] font-semibold text-forest-night transition-colors hover:bg-gold-soft'
            >
              <CalendarPlus className='size-4' />
              Add to Calendar
            </a>
            <Link
              href='/about#contact'
              className='inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-white/15'
            >
              Ask a question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
