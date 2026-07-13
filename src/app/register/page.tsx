import type { Metadata } from 'next';
import RegisterForm from '@/components/register/RegisterForm';

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Join MCAN Rivers State — register as a newly deployed corps member or a returning/alumni member.',
};

export default function RegisterPage() {
  return (
    <section className="bg-paper px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <p className="label-mono text-[11px] text-forest">Join the chapter</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
          Become part of MCAN Rivers State
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-soft">
          Whether you&apos;re freshly deployed or a returning alumnus looking
          to stay connected, register below and a member of the executive
          council will reach out to you.
        </p>
      </div>

      <div className="mt-16">
        <RegisterForm />
      </div>
    </section>
  );
}
