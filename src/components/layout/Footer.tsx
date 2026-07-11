import Image from 'next/image';
import { NAV_LINKS, SITE, SOCIALS } from '@/lib/constants';

const DEVELOPER = {
  name: 'Abbas Mahmud',
  whatsapp: 'https://wa.me/2348109919244',
  linkedin: 'https://linkedin.com/in/dotpyscript',
  github: 'https://github.com/dotpyscript',
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-line bg-paper-2/60'>
      <div className='mx-auto max-w-7xl px-6 py-4 lg:px-10'>
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
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`MCAN on ${social.name}`}
                  className='flex size-9 items-center justify-center rounded-full border border-line text-[11px] font-semibold tracking-tight text-ink-soft transition-colors hover:border-forest hover:text-forest'
                >
                  {social.icon ? (
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={16}
                      height={16}
                      className='size-4'
                    />
                  ) : (
                    social.label
                  )}
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

        <div className='mt-6 flex items-center gap-3 text-xs text-ink-faint'>
          <span>
            Built by{' '}
            <span className='font-medium text-ink-soft'>{DEVELOPER.name}</span>
          </span>
          <a
            href={DEVELOPER.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${DEVELOPER.name} on WhatsApp`}
            className='opacity-70 transition-opacity hover:opacity-100'
          >
            <Image
              src='/social-icons/whatsapp.png'
              alt='WhatsApp'
              width={16}
              height={16}
              className='size-4'
            />
          </a>
          <a
            href={DEVELOPER.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${DEVELOPER.name} on LinkedIn`}
            className='opacity-70 transition-opacity hover:opacity-100'
          >
            <Image
              src='/social-icons/linkedin.png'
              alt='LinkedIn'
              width={16}
              height={16}
              className='size-4'
            />
          </a>
          <a
            href={DEVELOPER.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${DEVELOPER.name} on GitHub`}
            className='opacity-70 transition-opacity hover:opacity-100'
          >
            <Image
              src='/social-icons/github-sign.png'
              alt='GitHub'
              width={16}
              height={16}
              className='size-4'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
