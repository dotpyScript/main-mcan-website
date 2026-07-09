'use client';

import { motion } from 'framer-motion';
import { MILESTONES } from './history-data';

const History = () => {
  return (
    <section className="relative overflow-hidden bg-paper pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-[11px] text-forest">Our story</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            From one weekly halaqa to a
            <span className="text-gradient-forest"> state-wide movement</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            The Muslim Corpers&apos; Association of Nigeria was founded to
            give Muslim youth serving the nation a spiritual home away from
            home. In Rivers State, that mission grew from a handful of corps
            members meeting for Jumu&apos;ah into a self-governed chapter
            coordinating da&apos;wah, welfare, and mentorship across every
            local government area.
          </p>
        </div>

        {/* Desktop: aligned year / line-and-dot / caption rows */}
        <div className="mt-24 hidden lg:block">
          <div className="grid grid-cols-6 gap-x-6">
            {MILESTONES.map((milestone, i) => (
              <motion.span
                key={`${milestone.year}-year`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="text-center text-3xl font-semibold tracking-tight text-ink xl:text-4xl"
              >
                {milestone.year}
              </motion.span>
            ))}
          </div>

          <div className="relative my-6 grid grid-cols-6">
            <div
              className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line-strong"
              aria-hidden
            />
            {MILESTONES.map((milestone, i) => (
              <motion.span
                key={`${milestone.year}-dot`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.07 + 0.15,
                  ease: 'backOut',
                }}
                className="relative z-10 mx-auto flex size-4 items-center justify-center rounded-full bg-paper"
              >
                <span className="size-2.5 rounded-full bg-forest" />
              </motion.span>
            ))}
          </div>

          <div className="grid grid-cols-6 gap-x-6">
            {MILESTONES.map((milestone, i) => (
              <motion.div
                key={`${milestone.year}-body`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.07 + 0.1 }}
                className="text-center"
              >
                <h3 className="text-[15px] font-semibold tracking-tight text-ink text-balance">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft text-balance">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: horizontal snap-scroll timeline */}
        <div className="no-scrollbar -mx-6 mt-20 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-2 lg:hidden">
          {MILESTONES.map((milestone) => (
            <div
              key={milestone.year}
              className="flex w-56 shrink-0 snap-center flex-col items-center text-center"
            >
              <span className="text-2xl font-semibold tracking-tight text-ink">
                {milestone.year}
              </span>
              <span className="relative my-4 flex size-4 items-center justify-center rounded-full bg-paper-2">
                <span className="size-2.5 rounded-full bg-forest" />
              </span>
              <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
