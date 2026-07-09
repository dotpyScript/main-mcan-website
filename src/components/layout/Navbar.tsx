'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { NAV_LINKS, SITE } from '@/lib/constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(12,26,20,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10'>
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/logo/mcan-emblem.png'
            alt='MCAN'
            width={36}
            height={36}
            className='h-9 w-9 rounded-full'
            priority
          />
          <span className='flex flex-col leading-none'>
            <span className='text-[15px] font-semibold tracking-tight text-ink'>
              {SITE.name}
            </span>
            <span className='label-mono text-[9px] text-ink-faint'>
              River&apos;s State
            </span>
          </span>
        </Link>

        <div className='hidden items-center gap-1 md:flex'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink'
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='hidden items-center gap-3 md:flex'>
          <Button
            href={SITE.donateUrl}
            external
            size='md'
            variant='solid'
            trailingIcon={ArrowUpRight}
            className='bg-forest hover:bg-forest-deep'
          >
            Donate
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label='Toggle menu'
          className='inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden'
        >
          {open ? <X className='size-6' /> : <Menu className='size-6' />}
        </button>
      </nav>

      {open && (
        <div className='border-t border-line bg-paper px-6 pb-6 pt-2 md:hidden'>
          <div className='flex flex-col'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className='border-b border-line py-3.5 text-[15px] font-medium text-ink-soft'
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button
            href={SITE.donateUrl}
            external
            size='md'
            variant='solid'
            trailingIcon={ArrowUpRight}
            fullWidth
            className='mt-4 bg-forest hover:bg-forest-deep'
          >
            Give to the Lodge
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
