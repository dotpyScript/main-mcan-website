'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';
import FloatingGallery from './hero/FloatingGallery';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative isolate overflow-hidden bg-paper pt-36 pb-20 lg:min-h-200 lg:pt-44 lg:pb-28'
    >
      {/* Ambient background */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-dot-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]' />
        <div className='absolute -top-32 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-forest/15 blur-[110px]' />
        <div className='absolute -left-24 top-40 h-72 w-72 rounded-full bg-gold/20 blur-[100px]' />
      </div>

      {/* Scattered, cursor-reactive image nodes (Scale.com-style hero graph) */}
      <FloatingGallery />

      <div className='relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-10'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/70 px-4 py-1.5 backdrop-blur-sm'
        >
          <MapPin className='size-3.5 text-forest' />
          <span className='label-mono text-[11px] text-ink-soft'>
            {SITE.fullName}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className='max-w-4xl text-center text-[2.6rem] font-semibold leading-[1.07] tracking-tight text-ink text-balance sm:text-6xl lg:text-[4.5rem]'
        >
          One Ummah, serving
          <br />
          <span className='text-gradient-forest'>
            Islam across Rivers State.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className='mt-7 max-w-2xl text-center text-lg leading-relaxed text-ink-soft text-balance'
        >
          The home of Muslim corps members serving Rivers State, coordinating
          dawah, welfare, and mentorship, from orientation camp to passing out
          and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className='mt-10 flex flex-col items-center gap-4 sm:flex-row'
        >
          <Button
            href='#chapters'
            variant='solid'
            trailingIcon={ArrowRight}
            className='bg-ink hover:bg-forest-night'
          >
            Find Lodge
          </Button>
          <Button href='#mission' variant='outline'>
            NYSC Camp Guide
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
