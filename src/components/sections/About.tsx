import { ArrowUpRight, Building2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

const About = () => {
  return (
    <section id='about' className='bg-paper py-24 lg:py-32'>
      <div className='mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10'>
        <div>
          <p className='label-mono text-[11px] text-forest'>Who we are</p>
          <h2 className='mt-4 max-w-md text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl'>
            A state body, run chapter by chapter
          </h2>
          <p className='mt-5 max-w-md text-base leading-relaxed text-ink-soft'>
            MCAN brings together Muslim corps members serving across Rivers
            state. The association is self-governed by its own executives, while
            the state body coordinates shared standards, leadership succession,
            and support across local government areas — so no member serves far
            from home without a community.
          </p>
          <p className='mt-4 max-w-md text-base leading-relaxed text-ink-soft'>
            From your first day at orientation camp to the day you&apos;re
            passed out, MCAN chapters organise weekly halaqas, Jumu&apos;ah
            arrangements, welfare support, and mentorship — run entirely by
            fellow corps members and alumni.
          </p>
        </div>

        <div className='relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line-strong bg-forest-night p-8 text-paper sm:p-10'>
          <div className='pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-forest/40 blur-[90px]' />
          <div className='relative'>
            <span className='flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold-soft'>
              <Building2 className='size-5' />
            </span>
            <p className='label-mono mt-6 text-[11px] text-gold-soft'>
              Featured chapter initiative
            </p>
            <h3 className='mt-3 text-2xl font-semibold tracking-tight text-balance'>
              The Rivers State Lodge Project
            </h3>
            <p className='mt-4 text-[15px] leading-relaxed text-paper/70'>
              MCAN Rivers State is raising nationwide support to build a
              permanent lodge for Muslim corps members serving in the state —
              secure accommodation, a musallah, and a home away from home.
            </p>
          </div>

          <Button
            href={SITE.donateUrl}
            external
            tone='onDark'
            variant='solid'
            size='md'
            trailingIcon={ArrowUpRight}
            className='relative mt-8 w-fit'
          >
            Visit donate.mcan.com.ng
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
