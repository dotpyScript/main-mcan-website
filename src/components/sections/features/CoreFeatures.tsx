'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FEATURES } from './data';
import ProgressRail from './ProgressRail';

const DesktopScrollytelling = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const panelY = useTransform(scrollYProgress, [0, 0.06], ['5%', '0%']);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const step = 1 / FEATURES.length;
    const idx = Math.min(
      FEATURES.length - 1,
      Math.max(0, Math.floor(value / step)),
    );
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const seek = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const step = 1 / FEATURES.length;
    const targetProgress = step * index + step / 2;
    const top = section.offsetTop + section.offsetHeight * targetProgress;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const feature = FEATURES[active];
  const Icon = feature.icon;

  return (
    <section
      ref={sectionRef}
      id='features'
      className='relative hidden lg:block'
      style={{ height: `${FEATURES.length * 100}vh` }}
    >
      <motion.div
        style={{ y: panelY }}
        className='sticky top-0 flex h-screen flex-col justify-center overflow-hidden border-white/10 bg-forest-night shadow-[0_-50px_100px_-40px_rgba(0,0,0,0.5)]'
      >
        <div className='pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_15%_20%,#000,transparent_70%)]' />
        <div className='pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-forest/40 blur-[120px]' />

        <div className='relative mx-auto w-full max-w-7xl px-6 lg:px-10'>
          <p className='label-mono mb-10 text-[11px] text-gold-soft'>
            Tailored core features
          </p>

          <div className='grid items-center gap-16 lg:grid-cols-2'>
            <div className='relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10'>
              <AnimatePresence mode='popLayout'>
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className='absolute inset-0'
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes='640px'
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-forest-night/80 via-forest-night/10 to-transparent' />
                </motion.div>
              </AnimatePresence>

              <div className='absolute left-5 top-5 flex size-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm'>
                <Icon className='size-5 text-gold-soft' />
              </div>
            </div>

            <div className='relative min-h-[260px]'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <span className='label-mono text-xs text-paper/40'>
                    {String(active + 1).padStart(2, '0')} /{' '}
                    {String(FEATURES.length).padStart(2, '0')}
                  </span>
                  <h3 className='mt-4 max-w-lg text-3xl font-semibold tracking-tight text-paper text-balance sm:text-4xl'>
                    {feature.title}
                  </h3>
                  <p className='mt-5 max-w-md text-base leading-relaxed text-paper/65'>
                    {feature.description}
                  </p>
                  <a
                    href='#'
                    className='group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft'
                  >
                    {feature.cta}
                    <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
                  </a>
                </motion.div>
              </AnimatePresence>

              <ProgressRail
                scrollYProgress={scrollYProgress}
                active={active}
                onSeek={seek}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const MobileFeatureList = () => {
  return (
    <section className='relative min-h-dvh overflow-hidden rounded-t-[2.5rem] border-t border-white/10 bg-forest-night px-6 pb-20 pt-16 shadow-[0_-40px_80px_-40px_rgba(0,0,0,0.5)] lg:hidden'>
      <div className='pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_70%_50%_at_20%_10%,#000,transparent_70%)]' />
      <p className='label-mono relative text-[11px] text-gold-soft'>
        Tailored core features
      </p>
      <div className='relative mt-10 flex flex-col gap-14'>
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <div className='relative h-56 w-full overflow-hidden rounded-2xl border border-white/10'>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes='480px'
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-forest-night/80 to-transparent' />
                <div className='absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm'>
                  <Icon className='size-4.5 text-gold-soft' />
                </div>
              </div>
              <span className='label-mono mt-5 block text-xs text-paper/40'>
                {String(i + 1).padStart(2, '0')} /{' '}
                {String(FEATURES.length).padStart(2, '0')}
              </span>
              <h3 className='mt-2 text-2xl font-semibold tracking-tight text-paper text-balance'>
                {feature.title}
              </h3>
              <p className='mt-3 text-[15px] leading-relaxed text-paper/65'>
                {feature.description}
              </p>
              <a
                href='#'
                className='group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft'
              >
                {feature.cta}
                <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const CoreFeatures = () => {
  return (
    <>
      <DesktopScrollytelling />
      <MobileFeatureList />
    </>
  );
};

export default CoreFeatures;
