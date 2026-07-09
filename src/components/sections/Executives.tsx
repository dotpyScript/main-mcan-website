'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EXECUTIVES } from './executives/data';
import ExecutiveCard from './executives/ExecutiveCard';

const AUTOPLAY_MS = 3500;

const getOffset = (index: number, active: number, length: number) => {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
};

const useStepScale = () => {
  const [stepScale, setStepScale] = useState(1);

  useEffect(() => {
    const update = () => setStepScale(window.innerWidth < 640 ? 0.68 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return stepScale;
};

const Executives = () => {
  const [active, setActive] = useState(0);
  const isPaused = useRef(false);
  const length = EXECUTIVES.length;
  const stepScale = useStepScale();

  const goTo = useCallback(
    (index: number) => setActive(((index % length) + length) % length),
    [length],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused.current) return;
      setActive((prev) => (prev + 1) % length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <section
      id="leadership"
      className="overflow-hidden bg-paper py-24 lg:py-32"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="label-mono text-[11px] text-forest">Our leadership</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
            The executives running the chapter
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            A team of corps members and alumni elected to serve MCAN Rivers
            State, coordinating every chapter across the state.
          </p>
        </div>

        <div className="relative mt-16 h-[340px] sm:h-[400px]">
          <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            {EXECUTIVES.map((executive, i) => (
              <ExecutiveCard
                key={executive.id}
                executive={executive}
                offset={getOffset(i, active, length)}
                paletteIndex={i}
                stepScale={stepScale}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous executive"
            className="absolute left-0 top-1/2 z-[60] flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-paper text-ink shadow-md transition-colors hover:bg-paper-2"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next executive"
            className="absolute right-0 top-1/2 z-[60] flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-paper text-ink shadow-md transition-colors hover:bg-paper-2"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {EXECUTIVES.map((executive, i) => (
            <button
              key={executive.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${executive.name}`}
              aria-current={active === i}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? 'w-6 bg-forest' : 'w-1.5 bg-line-strong'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Executives;
