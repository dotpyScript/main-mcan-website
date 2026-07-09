import Image from 'next/image';
import Link from 'next/link';
import { Flame, Heart, HandHeart } from 'lucide-react';
import { SITE } from '@/lib/constants';
import { formatNaira, progressPercent } from './utils';
import type { Project } from './data';

const ProjectHero = ({ project }: { project: Project }) => {
  const percent = progressPercent(project.raised, project.goal);

  return (
    <section className='bg-paper px-6 pb-16 pt-10 lg:px-10 lg:pt-20'>
      <div className='relative isolate mx-auto h-[80dvh] min-h-[34rem] w-full max-w-[120rem] overflow-hidden rounded-[1.5rem] sm:rounded-[1.5rem]'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5' />

        <div className='absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-8'>
          <span className='inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-paper backdrop-blur-sm'>
            <Flame className='size-3.5 text-gold-soft' />
            Highest priority
          </span>
        </div>

        <div className='absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 sm:p-10 lg:p-14'>
          <div className='max-w-2xl'>
            <p className='label-mono text-[11px] text-gold-soft'>
              {project.tagline}
            </p>
            <h1 className='mt-3 text-3xl font-semibold tracking-tight text-paper text-balance sm:text-4xl lg:text-5xl'>
              {project.title}
            </h1>
            <p className='mt-4 max-w-xl text-[15px] leading-relaxed text-paper/75 sm:text-base'>
              {project.description}
            </p>
          </div>

          <div className='max-w-md'>
            <div className='h-1.5 w-full overflow-hidden rounded-full bg-white/15'>
              <div
                className='h-full rounded-full bg-gold-soft'
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className='mt-2.5 flex items-center justify-between text-xs text-paper/70'>
              <span>
                <span className='font-semibold text-paper'>
                  {formatNaira(project.raised)}
                </span>{' '}
                raised
              </span>
              <span>
                {percent}% of {formatNaira(project.goal)}
              </span>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <a
              href={SITE.donateUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[15px] font-semibold text-forest-night transition-colors hover:bg-gold-soft'
            >
              <Heart className='size-4' />
              Donate
            </a>
            <Link
              href='/about#contact'
              className='inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-white/15'
            >
              <HandHeart className='size-4' />
              Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
