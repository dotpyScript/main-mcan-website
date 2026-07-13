'use client';

import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, Siren } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

const WelfareReporting = () => {
  const whatsappHref = `https://wa.me/${SITE.emergencyWhatsapp}`;

  return (
    <section id='welfare' className='bg-paper py-24 lg:py-32 lg:my-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-10'>
        <div className='relative isolate overflow-hidden rounded-[2.5rem] border border-line-strong bg-ember-night px-8 py-14 sm:px-12 lg:px-16 lg:py-20'>
          <div className='pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_60%_60%_at_85%_15%,#000,transparent_70%)]' />
          <div className='pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-[120px]' />
          <div className='pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red-500/15 blur-[110px]' />

          <div className='relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1.5'>
                <span className='relative flex size-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75' />
                  <span className='relative inline-flex size-2 rounded-full bg-red-400' />
                </span>
                <span className='label-mono text-[10px] text-red-300'>
                  Live · Available 24/7
                </span>
              </div>

              <div className='mt-6 flex items-start gap-4 sm:items-center'>
                <span className='relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold-soft'>
                  <motion.span
                    aria-hidden
                    className='absolute inset-0 rounded-2xl border border-gold-soft/40'
                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                  <Siren className='size-6' />
                </span>
                <h2 className='text-2xl font-semibold tracking-tight text-paper text-balance sm:text-3xl lg:text-4xl'>
                  Instant Welfare & Emergency Reporting
                </h2>
              </div>

              <p className='mt-6 max-w-xl text-base leading-relaxed text-paper/65'>
                Encountering issues at your PPA or facing lodge safety concerns?
                Send a report and it reaches your chapter&apos;s Welfare Officer
                and Amir within minutes — day or night.
              </p>
            </div>

            <div className='flex flex-col items-start gap-4 lg:items-end'>
              <Button
                href={whatsappHref}
                external
                tone='onDark'
                variant='solid'
                icon={MessageCircle}
                className='h-auto min-h-14 whitespace-normal text-center leading-snug text-ember-night shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] sm:h-14 sm:whitespace-nowrap'
              >
                Report Welfare Issue Now
              </Button>
              <a
                href={`tel:${SITE.emergencyPhone}`}
                className='inline-flex items-center gap-2 text-sm font-medium text-paper/70 transition-colors hover:text-paper'
              >
                <PhoneCall className='size-4' />
                Or call the emergency line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelfareReporting;
