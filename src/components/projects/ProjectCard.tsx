import Image from 'next/image';
import Link from 'next/link';
import { Heart, HandHeart } from 'lucide-react';
import { SITE } from '@/lib/constants';
import { formatNaira, progressPercent } from './utils';
import type { Project } from './data';

const ProjectCard = ({ project }: { project: Project }) => {
  const percent = progressPercent(project.raised, project.goal);

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-line-strong bg-paper">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="label-mono text-[10px] text-forest">
          {project.tagline}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink text-balance">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <div className="mt-5">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-forest"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-ink-faint">
            <span>
              <span className="font-semibold text-ink">
                {formatNaira(project.raised)}
              </span>{' '}
              raised
            </span>
            <span>{percent}%</span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2.5">
          <a
            href={SITE.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-forest-night px-4 py-2.5 text-[13px] font-semibold text-paper transition-colors hover:bg-forest"
          >
            <Heart className="size-3.5" />
            Donate
          </a>
          <Link
            href="/about#contact"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-line-strong px-4 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-forest/40 hover:text-forest"
          >
            <HandHeart className="size-3.5" />
            Sponsor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
