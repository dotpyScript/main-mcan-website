import Image from 'next/image';
import { fullDate } from './utils';
import type { PastEvent } from './data';

const PastEvents = ({ events }: { events: PastEvent[] }) => {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-[11px] text-forest">Recap</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            Past events
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            A look back at what the chapter has been up to. Hover a photo to
            relive it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div key={event.id} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="label-mono text-[9px] text-gold-soft">
                    {fullDate(event.date)}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold leading-snug tracking-tight text-paper">
                    {event.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {event.recap}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
