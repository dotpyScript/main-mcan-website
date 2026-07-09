'use client';

import { motion } from 'framer-motion';
import { STATE_EXECUTIVES } from './state-executives-data';

const StateExecutives = () => {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-[11px] text-forest">
            State executive council
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            The alumni who keep the chapter alive
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Beyond a single service year, a council of alumni — the Ansar —
            anchor the chapter&apos;s continuity: preserving institutional
            memory, mentoring each new EXCO, and stewarding the lodge
            project.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl divide-y divide-line border-y border-line">
          {STATE_EXECUTIVES.map((exec, i) => (
            <motion.div
              key={exec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:gap-10"
            >
              <div className="flex items-center gap-4 sm:w-64 sm:shrink-0">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-line-strong bg-paper-2 text-sm font-semibold tracking-tight text-forest transition-colors duration-300 group-hover:border-forest/40 group-hover:bg-forest group-hover:text-paper">
                  {exec.initials}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {exec.name}
                  </h3>
                  <p className="text-sm font-medium text-forest">
                    {exec.role}
                  </p>
                </div>
              </div>

              <div className="sm:flex-1">
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {exec.bio}
                </p>
                <p className="label-mono mt-3 text-[10px] text-ink-faint">
                  {exec.cohort}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateExecutives;
