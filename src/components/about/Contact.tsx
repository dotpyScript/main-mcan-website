'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SITE, SOCIALS } from '@/lib/constants';

const REASONS = [
  'General inquiry',
  'Partnership or sponsorship',
  'Press',
  'Lodge project',
  'Other',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const Contact = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    }
  };

  return (
    <section id="contact" className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-[11px] text-forest">Get in touch</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            Questions, partnerships, or press?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            For anything that isn&apos;t an emergency, reach the chapter
            directly — we typically respond within two business days.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-line-strong bg-paper p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <Mail className="size-5" />
              </span>
              <p className="label-mono mt-5 text-[10px] text-ink-faint">
                Email
              </p>
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="mt-1 block text-[15px] font-medium text-ink transition-colors hover:text-forest"
              >
                {SITE.contactEmail}
              </a>
            </div>

            <div className="rounded-3xl border border-line-strong bg-paper p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <MapPin className="size-5" />
              </span>
              <p className="label-mono mt-5 text-[10px] text-ink-faint">
                Lodge address
              </p>
              <p className="mt-1 text-[15px] font-medium leading-snug text-ink">
                {SITE.lodgeAddress}
              </p>
            </div>

            <div className="rounded-3xl border border-line-strong bg-paper p-6">
              <p className="label-mono text-[10px] text-ink-faint">
                Reach us on social media
              </p>
              <div className="mt-4 flex items-center gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`MCAN on ${social.name}`}
                    className="flex size-9 items-center justify-center rounded-full border border-line-strong text-[11px] font-semibold tracking-tight text-ink-soft transition-colors hover:border-forest hover:text-forest"
                  >
                    {social.icon ? (
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={16}
                        height={16}
                        className="size-4"
                      />
                    ) : (
                      social.label
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line-strong bg-paper p-6 sm:p-8"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
                <CheckCircle2 className="size-10 text-forest" />
                <p className="text-lg font-semibold tracking-tight text-ink">
                  Message sent
                </p>
                <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                  Jazakumullahu khairan — someone from the chapter will get
                  back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm font-medium text-forest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="label-mono text-[10px] text-ink-faint"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="label-mono text-[10px] text-ink-faint"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="reason"
                    className="label-mono text-[10px] text-ink-faint"
                  >
                    Reason
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    defaultValue={REASONS[0]}
                    className="mt-2 w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
                  >
                    {REASONS.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="label-mono text-[10px] text-ink-faint"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-line-strong bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600 sm:col-span-2">
                    {errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  variant="solid"
                  trailingIcon={Send}
                  className="w-fit disabled:opacity-60 sm:col-span-2"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
