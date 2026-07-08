import { RIVERS_LGAS } from '@/lib/constants';

const ChapterStrip = () => {
  const items = [...RIVERS_LGAS, ...RIVERS_LGAS];

  return (
    <section
      id='chapters'
      className='border-y border-line bg-paper-2/60 py-10'
      aria-label='MCAN Rivers State local government areas'
    >
      <div className='mx-auto mb-6 max-w-7xl px-6 lg:px-10'>
        <p className='label-mono text-center text-[11px] text-ink-faint'>
          Reaching corps members across every LGA in Rivers State
        </p>
      </div>

      <div className='relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]'>
        <div className='flex w-max animate-marquee gap-3 pl-3'>
          {items.map((state, i) => (
            <span
              key={`${state}-${i}`}
              className='flex shrink-0 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft'
            >
              {state}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapterStrip;
