import Image from 'next/image';
import { NAV_LINKS, SITE } from '@/lib/constants';

const SOCIALS = [
  { label: 'X', name: 'X (Twitter)' },
  { label: 'IG', name: 'Instagram' },
  { label: 'FB', name: 'Facebook' },
  { label: 'WA', name: 'whatsapp' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-line bg-paper-2/60'>
      <div className='mx-auto max-w-7xl px-6 py-16 lg:px-10'>
        <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='sm:col-span-2 lg:col-span-2'>
            <div className='flex items-center gap-3'>
              <Image
                src='/logo/mcan-emblem.png'
                alt='MCAN'
                width={32}
                height={32}
                className='h-8 w-8 rounded-full'
              />
              <span className='text-[15px] font-semibold tracking-tight text-ink'>
                {SITE.fullName}
              </span>
            </div>
            <p className='mt-4 max-w-sm text-sm leading-relaxed text-ink-soft'>
              The coordinating body for Muslim corps members serving Rivers
              State&apos;s NYSC scheme — one association, chapters across every
              local government area.
            </p>
            <div className='mt-6 flex items-center gap-3'>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href='#'
                  aria-label={`MCAN on ${social.name}`}
                  className='flex size-9 items-center justify-center rounded-full border border-line text-[11px] font-semibold tracking-tight text-ink-soft transition-colors hover:border-forest hover:text-forest'
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className='label-mono text-[11px] text-ink-faint'>Explore</p>
            <ul className='mt-4 space-y-3'>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='text-sm text-ink-soft transition-colors hover:text-ink'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='label-mono text-[11px] text-ink-faint'>Give</p>
            <ul className='mt-4 space-y-3'>
              <li>
                <a
                  href={SITE.donateUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-ink-soft transition-colors hover:text-ink'
                >
                  Rivers State Lodge Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row'>
          <p className='text-xs text-ink-faint'>
            © {year} {SITE.fullName}. All rights reserved.
          </p>
          <p className='label-mono text-[10px] text-ink-faint'>
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
