'use client';

import { motion, useTransform, type MotionValue } from 'framer-motion';
import { FEATURES } from './data';

type SegmentProps = {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  active: boolean;
  onSeek: (index: number) => void;
  label: string;
};

const Segment = ({
  scrollYProgress,
  index,
  total,
  active,
  onSeek,
  label,
}: SegmentProps) => {
  const start = index / total;
  const end = (index + 1) / total;
  const width = useTransform(scrollYProgress, [start, end], ['0%', '100%']);

  return (
    <button
      type="button"
      onClick={() => onSeek(index)}
      aria-label={`Jump to ${label}`}
      aria-current={active}
      className="group flex flex-1 flex-col gap-2 text-left"
    >
      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div className="h-full rounded-full bg-gold-soft" style={{ width }} />
      </div>
      <span
        className={`label-mono text-[9px] transition-colors ${
          active ? 'text-gold-soft' : 'text-paper/35 group-hover:text-paper/60'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </button>
  );
};

type ProgressRailProps = {
  scrollYProgress: MotionValue<number>;
  active: number;
  onSeek: (index: number) => void;
};

const ProgressRail = ({ scrollYProgress, active, onSeek }: ProgressRailProps) => {
  return (
    <div className="mt-12 flex items-center gap-2">
      {FEATURES.map((feature, i) => (
        <Segment
          key={feature.id}
          scrollYProgress={scrollYProgress}
          index={i}
          total={FEATURES.length}
          active={active === i}
          onSeek={onSeek}
          label={feature.title}
        />
      ))}
    </div>
  );
};

export default ProgressRail;
