import Link from 'next/link';
import { MapPin, Tent, ExternalLink } from 'lucide-react';
import { SITE } from '@/lib/constants';

const LocateBanner = () => {
  return (
    <section className="bg-paper px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest-night px-8 py-12 sm:px-12 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_60%_60%_at_80%_20%,#000,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-forest/40 blur-[110px]" />

        <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="label-mono text-[11px] text-gold-soft">
              Get your bearings
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-paper text-balance sm:text-3xl">
              New in Rivers State?
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-paper/65">
              Find where the chapters lodges are, or get directions to the
              NYSC orientation camp — before you even arrive.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects#lodges"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[15px] font-semibold text-forest-night transition-colors hover:bg-gold-soft"
            >
              <MapPin className="size-4" />
              Locate Lodge
            </Link>
            <a
              href={SITE.nyscCampMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <Tent className="size-4" />
              Locate NYSC Camp
              <ExternalLink className="size-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocateBanner;
