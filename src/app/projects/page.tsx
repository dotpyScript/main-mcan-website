import type { Metadata } from 'next';
import { PROJECTS } from '@/components/projects/data';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectCard from '@/components/projects/ProjectCard';
import OurLodges from '@/components/projects/OurLodges';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Active MCAN Rivers State projects seeking donations and sponsors — from the state lodge to welfare and outreach funds.',
};

export default function ProjectsPage() {
  const [featured, ...rest] = [...PROJECTS].sort(
    (a, b) => a.priority - b.priority,
  );

  return (
    <>
      <ProjectHero project={featured} />

      <section className="bg-paper pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="label-mono text-[11px] text-forest">
              More active projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
              Every one of these needs a sponsor
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Ranked by priority, funded by people like you. Pick the one
              that speaks to you most.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <OurLodges />
    </>
  );
}
