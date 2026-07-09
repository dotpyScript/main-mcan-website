import Image from 'next/image';
import { MapPin, ExternalLink } from 'lucide-react';
import { LODGES } from './lodges-data';

const FEATURE_INDEX = 0;
const WIDE_INDEX = 4;

const OurLodges = () => {
  return (
    <section id="lodges" className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-[11px] text-forest">Our lodges</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            A home in every corner of the state
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            From Port Harcourt to the riverine LGAs, these are the lodges
            MCAN Rivers State already runs — safe, affordable accommodation
            for corps members throughout their service year.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[13rem] lg:grid-cols-3">
          {LODGES.map((lodge, i) => (
            <a
              key={lodge.id}
              href={`https://www.google.com/maps/search/?api=1&query=${lodge.lat},${lodge.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${lodge.name} in Google Maps`}
              className={`group relative aspect-4/3 overflow-hidden rounded-3xl lg:aspect-auto ${
                i === FEATURE_INDEX
                  ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2'
                  : ''
              } ${i === WIDE_INDEX ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <Image
                src={lodge.image}
                alt={lodge.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-forest mix-blend-color"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-forest-night/90 via-forest-night/25 to-transparent"
                aria-hidden
              />

              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-paper backdrop-blur-sm">
                <MapPin className="size-3 text-gold-soft" />
                {lodge.lga}
              </span>

              <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <ExternalLink className="size-3.5" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-[15px] font-semibold tracking-tight text-paper sm:text-base">
                  {lodge.name}
                </h3>
                <p className="mt-1 text-xs text-paper/70">
                  {lodge.address}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLodges;
