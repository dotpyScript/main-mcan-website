'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { HADITHS } from './hadith/data';

const HadithOfTheDay = () => {
  const [active, setActive] = useState(0);
  const length = HADITHS.length;

  const goTo = (index: number) =>
    setActive(((index % length) + length) % length);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  const windowStart = Math.floor(active / 2) * 2;
  const slots = [windowStart, (windowStart + 1) % length];
  const hadith = HADITHS[active];

  return (
    <section className='bg-paper py-24 lg:py-32 lg:mb-12'>
      <div className='px-6 lg:px-10'>
        <div className='relative isolate min-h-144 overflow-hidden rounded-[2.5rem] border border-line-strong bg-paper-2 px-8 py-14 sm:px-12 lg:px-16 lg:py-20'>
          <div className='pointer-events-none absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_20%,#000,transparent_70%)]' />
          <div className='pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px]' />

          <div className='relative grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16'>
            <div className='flex flex-col'>
              <p className='label-mono text-[11px] text-forest'>
                Hadith of the day
              </p>

              <div className='mt-6 flex flex-col gap-3'>
                {slots.map((slotIndex) => {
                  const item = HADITHS[slotIndex];
                  const isActive = slotIndex === active;
                  return (
                    <button
                      key={item.id}
                      type='button'
                      onClick={() => goTo(slotIndex)}
                      aria-current={isActive}
                      className={`flex aspect-square w-40 flex-col items-center justify-center rounded-2xl border p-4 text-center transition-colors duration-300 sm:w-44 ${
                        isActive
                          ? 'border-forest-night bg-forest-night text-paper'
                          : 'border-line-strong bg-transparent text-ink-soft hover:border-forest/40 hover:text-ink'
                      }`}
                    >
                      <AnimatePresence mode='wait'>
                        <motion.span
                          key={item.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3 }}
                          className='block text-sm font-semibold tracking-tight'
                        >
                          {item.title}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>

              <div className='mt-6 flex w-40 divide-x divide-line-strong overflow-hidden rounded-2xl border border-line-strong sm:w-44'>
                <button
                  type='button'
                  onClick={prev}
                  aria-label='Previous hadith'
                  className='flex flex-1 items-center justify-center py-3.5 text-ink transition-colors hover:bg-paper'
                >
                  <ChevronLeft className='size-4' />
                </button>
                <button
                  type='button'
                  onClick={next}
                  aria-label='Next hadith'
                  className='flex flex-1 items-center justify-center py-3.5 text-ink transition-colors hover:bg-paper'
                >
                  <ChevronRight className='size-4' />
                </button>
              </div>
            </div>

            <div className='relative flex min-h-[220px] flex-col justify-between'>
              <AnimatePresence mode='wait'>
                <motion.blockquote
                  key={hadith.id}
                  initial={{ opacity: 0, y: 32, skewY: 4 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  exit={{ opacity: 0, y: -32, skewY: -4 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className='text-2xl font-medium leading-relaxed text-ink text-balance sm:text-3xl lg:text-4xl text-center'
                >
                  &ldquo;{hadith.text}&rdquo;
                </motion.blockquote>
              </AnimatePresence>

              <AnimatePresence mode='wait'>
                <motion.div
                  key={`${hadith.id}-attribution`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className='mt-10 flex flex-col items-end self-end text-right'
                >
                  <span className='text-sm font-semibold text-ink'>
                    {hadith.narrator}
                  </span>
                  <span className='label-mono mt-2 inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1 text-[10px] text-forest'>
                    <BookOpen className='size-3' />
                    {hadith.source}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HadithOfTheDay;
