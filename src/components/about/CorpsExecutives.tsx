'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { EXECUTIVES } from '@/components/sections/executives/data';

const [featured, ...roster] = EXECUTIVES;
const naibAmirah = roster[0];
const officers = roster.slice(1);

const CorpsExecutives = () => {
  return (
    <section className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-[11px] text-forest">
            Corps executive council
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            The team serving this service year
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Elected from among the corps members currently serving in Rivers
            State, this council runs the chapter day-to-day — halaqas, lodge
            logistics, welfare, and everything between — for one service
            year at a time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {[featured, naibAmirah].map((exec, i) => (
            <motion.div
              key={exec.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative isolate overflow-hidden rounded-3xl border border-line-strong bg-forest-night p-8 text-paper sm:p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-forest/40 blur-[90px]" />
              <div className="relative flex items-start gap-5">
                {exec.image ? (
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-2xl ring-4 ring-gold-soft/40">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-night text-lg font-semibold tracking-tight text-paper ring-4 ring-gold-soft/40">
                    {exec.initials}
                  </span>
                )}
                <div>
                  <p className="label-mono text-[10px] text-gold-soft">
                    {exec.lga} LGA
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-paper">
                    {exec.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-gold-soft">
                    {exec.role}
                  </p>
                </div>
              </div>
              <p className="relative mt-6 text-[15px] leading-relaxed text-paper/65">
                {exec.mandate}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {officers.map((exec, i) => (
            <motion.div
              key={exec.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group rounded-3xl border border-line-strong bg-paper p-6 transition-colors hover:border-forest/30"
            >
              <div className="flex items-center gap-4">
                {exec.image ? (
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-sm font-semibold tracking-tight text-forest transition-colors group-hover:bg-forest group-hover:text-paper">
                    {exec.initials}
                  </span>
                )}
                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                    {exec.name}
                  </h3>
                  <p className="text-xs font-medium text-forest">
                    {exec.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {exec.mandate}
              </p>
              <p className="label-mono mt-4 text-[10px] text-ink-faint">
                {exec.lga} LGA
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorpsExecutives;
