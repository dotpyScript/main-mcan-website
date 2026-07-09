'use client';

import { useRef } from 'react';
import { useAnimationFrame, useMotionValue, useSpring } from 'framer-motion';
import Tile from './Tile';
import { LEFT_TILES, RIGHT_TILES } from './tiles';

const useZoneParallax = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 55, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 55, damping: 16, mass: 0.4 });

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(nx * 34);
    y.set(ny * 26);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { springX, springY, onMouseMove, onMouseLeave };
};

const updateChain = (
  container: DOMRect,
  tiles: (HTMLDivElement | null)[],
  lines: (SVGLineElement | null)[],
) => {
  for (let i = 0; i < tiles.length - 1; i++) {
    const a = tiles[i];
    const b = tiles[i + 1];
    const line = lines[i];
    if (!a || !b || !line) continue;
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    line.setAttribute('x1', String(ra.left + ra.width / 2 - container.left));
    line.setAttribute('y1', String(ra.top + ra.height / 2 - container.top));
    line.setAttribute('x2', String(rb.left + rb.width / 2 - container.left));
    line.setAttribute('y2', String(rb.top + rb.height / 2 - container.top));
  }
};

const FloatingGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightTileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftLineRefs = useRef<(SVGLineElement | null)[]>([]);
  const rightLineRefs = useRef<(SVGLineElement | null)[]>([]);

  const left = useZoneParallax();
  const right = useZoneParallax();

  useAnimationFrame(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    updateChain(containerRect, leftTileRefs.current, leftLineRefs.current);
    updateChain(containerRect, rightTileRefs.current, rightLineRefs.current);
  });

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 top-28 bottom-0 hidden transition-transform duration-300 lg:block lg:scale-75 xl:scale-100"
      aria-hidden
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="mcan-hero-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f5132" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#b3893f" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[0, 1].map((i) => (
          <line
            key={`left-line-${i}`}
            ref={(el) => {
              leftLineRefs.current[i] = el;
            }}
            stroke="url(#mcan-hero-line)"
            strokeWidth={1.5}
          />
        ))}
        {[0, 1].map((i) => (
          <line
            key={`right-line-${i}`}
            ref={(el) => {
              rightLineRefs.current[i] = el;
            }}
            stroke="url(#mcan-hero-line)"
            strokeWidth={1.5}
          />
        ))}
      </svg>

      <div
        className="pointer-events-auto absolute inset-y-0 left-0 w-1/2"
        onMouseMove={left.onMouseMove}
        onMouseLeave={left.onMouseLeave}
      >
        {LEFT_TILES.map((tile, i) => (
          <Tile
            key={tile.id}
            tile={tile}
            side="left"
            parallaxX={left.springX}
            parallaxY={left.springY}
            tileRef={(el) => {
              leftTileRefs.current[i] = el;
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-auto absolute inset-y-0 right-0 w-1/2"
        onMouseMove={right.onMouseMove}
        onMouseLeave={right.onMouseLeave}
      >
        {RIGHT_TILES.map((tile, i) => (
          <Tile
            key={tile.id}
            tile={tile}
            side="right"
            parallaxX={right.springX}
            parallaxY={right.springY}
            tileRef={(el) => {
              rightTileRefs.current[i] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingGallery;
