'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Executive } from './data';

const STEP: Record<number, { x: number; scale: number; z: number; opacity: number }> = {
  0: { x: 0, scale: 1, z: 50, opacity: 1 },
  1: { x: 190, scale: 0.82, z: 40, opacity: 1 },
  2: { x: 340, scale: 0.66, z: 30, opacity: 0.9 },
  3: { x: 440, scale: 0.55, z: 10, opacity: 0 },
};

const getGeometry = (offset: number, stepScale: number) => {
  const magnitude = Math.min(Math.abs(offset), 3);
  const base = STEP[magnitude];
  const sign = offset < 0 ? -1 : 1;
  return { ...base, x: base.x * sign * stepScale };
};

const PALETTES = [
  'from-forest to-forest-night',
  'from-gold to-forest-deep',
  'from-forest-deep to-ink',
];

type ExecutiveCardProps = {
  executive: Executive;
  offset: number;
  paletteIndex: number;
  stepScale: number;
  onClick: () => void;
};

const ExecutiveCard = ({
  executive,
  offset,
  paletteIndex,
  stepScale,
  onClick,
}: ExecutiveCardProps) => {
  const { x, scale, z, opacity } = getGeometry(offset, stepScale);
  const isActive = offset === 0;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={{ x, scale, opacity }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
      whileHover={{ scale: scale * 1.045 }}
      style={{ zIndex: z }}
      aria-label={`${executive.name}, ${executive.role}`}
      aria-current={isActive}
      className={`group absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] border border-white/10 text-left shadow-[0_30px_60px_-25px_rgba(12,26,20,0.5)] focus-visible:outline-none sm:w-[260px] ${
        opacity === 0 ? 'pointer-events-none' : ''
      } ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className="relative h-[300px] w-full sm:h-[360px]">
        {executive.image ? (
          <Image
            src={executive.image}
            alt={executive.name}
            fill
            sizes="260px"
            className="object-cover"
          />
        ) : (
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${PALETTES[paletteIndex % PALETTES.length]}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-25" />
            <span
              aria-hidden
              className="absolute -bottom-3 right-2 select-none text-[6rem] font-semibold leading-none tracking-tight text-paper/10 sm:text-[7rem]"
            >
              {executive.initials}
            </span>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-night/90 via-forest-night/15 to-transparent" />

        <span className="absolute left-3.5 top-3.5 inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-paper backdrop-blur-sm sm:left-4 sm:top-4">
          Exco
        </span>

        <span className="absolute right-3.5 top-3.5 flex size-8 items-center justify-center rounded-full bg-white/10 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 sm:right-4 sm:top-4">
          <ArrowUpRight className="size-4" />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-[15px] font-semibold leading-tight tracking-tight text-paper sm:text-base">
            {executive.name}
          </h3>
          <p className="mt-1 text-xs font-medium text-gold-soft">
            {executive.role}
          </p>
        </div>
      </div>
    </motion.button>
  );
};

export default ExecutiveCard;
