import { CalendarPlus, Clock, MapPin } from 'lucide-react';
import { buildIcsHref, dateTile } from './utils';
import type { EventItem } from './data';

const UpcomingEvents = ({ events }: { events: EventItem[] }) => {
  return (
    <section className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-[11px] text-forest">Upcoming</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            Mark your calendar
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Lectures, socials, and outreach — everything happening across the
            chapter this season.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl divide-y divide-line border-y border-line">
          {events.map((event) => {
            const { day, month, weekday } = dateTile(event.date);
            const icsHref = buildIcsHref(event);

            return (
              <div
                key={event.id}
                className="group flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                  <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl border border-line-strong bg-paper transition-colors group-hover:border-forest/40">
                    <span className="label-mono text-[9px] text-forest">
                      {month}
                    </span>
                    <span className="text-xl font-semibold tracking-tight text-ink">
                      {day}
                    </span>
                  </div>
                  <div>
                    <p className="label-mono text-[10px] text-ink-faint">
                      {weekday}
                    </p>
                    <p className="mt-1 text-xs font-medium text-forest">
                      {event.type}
                    </p>
                  </div>
                </div>

                <div className="sm:flex-1">
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {event.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {event.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-ink-faint">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5" />
                      {event.displayTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>

                <a
                  href={icsHref}
                  download={`${event.id}.ics`}
                  className="inline-flex items-center gap-2 self-start rounded-full border border-line-strong px-4 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-forest/40 hover:text-forest sm:self-center"
                >
                  <CalendarPlus className="size-3.5" />
                  Add
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
