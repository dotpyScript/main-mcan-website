'use client';

import Image from 'next/image';
import { motion, type MotionValue } from 'framer-motion';
import type { TileConfig } from './tiles';

type TileProps = {
  tile: TileConfig;
  side: 'left' | 'right';
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
  tileRef: (el: HTMLDivElement | null) => void;
};

const Tile = ({ tile, side, parallaxX, parallaxY, tileRef }: TileProps) => {
  return (
    <div
      className="absolute"
      style={{ top: tile.top, [side]: tile.offset }}
    >
      {/* Layer 1: cursor parallax, shared spring per zone */}
      <motion.div style={{ x: parallaxX, y: parallaxY }}>
        {/* Layer 2: autonomous slow drift loop, unique per tile */}
        <motion.div
          animate={{ x: tile.floatX, y: tile.floatY }}
          transition={{
            duration: tile.duration,
            delay: tile.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          {/* Layer 3: hover scale + the visible card (this is what lines attach to) */}
          <motion.div
            ref={tileRef}
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="pointer-events-auto relative overflow-hidden rounded-2xl border border-line-strong bg-white shadow-[0_20px_45px_-18px_rgba(12,26,20,0.4)]"
            style={{ width: tile.width, height: tile.height }}
          >
            <Image
              src={tile.src}
              alt={tile.label}
              fill
              sizes="220px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-2.5 py-2">
              <span className="label-mono text-[9px] text-white">
                {tile.label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tile;
