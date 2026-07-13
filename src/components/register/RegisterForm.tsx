'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { RIVERS_LGAS } from '@/lib/constants';
import { INTEREST_OPTIONS, type MembershipType } from '@/lib/registration';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClasses =
  'mt-2 w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest';
const labelClasses = 'label-mono text-[10px] text-ink-faint';

const RegisterForm = () => {
  const [membershipType, setMembershipType] = useState<MembershipType>('new');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      ...data,
      membershipType,
      consent:
        form.consent instanceof HTMLInputElement ? form.consent.checked : false,
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(
          json.error || 'Something went wrong. Please try again.',
        );
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className='mx-auto flex max-w-lg flex-col items-center gap-3 rounded-3xl border border-line-strong bg-paper p-10 text-center sm:p-14'>
        <CheckCircle2 className='size-10 text-forest' />
        <p className='text-lg font-semibold tracking-tight text-ink'>
          Registration received
        </p>
        <p className='max-w-sm text-sm leading-relaxed text-ink-soft'>
          Jazakumullahu khairan for joining MCAN Rivers State — someone from the
          chapter will reach out to you shortly. Check your email for
          confirmation.
        </p>
        <button
          type='button'
          onClick={() => setStatus('idle')}
          className='mt-2 text-sm font-medium text-forest hover:underline'
        >
          Register another member
        </button>
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-2xl'>
      <div className='flex w-full rounded-2xl border border-line-strong bg-paper-2 p-1.5'>
        {(
          [
            { value: 'new', label: 'New Corps Member' },
            { value: 'returning', label: 'Returning / Alumni Member' },
          ] as const
        ).map((option) => (
          <button
            key={option.value}
            type='button'
            onClick={() => setMembershipType(option.value)}
            aria-current={membershipType === option.value}
            className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
              membershipType === option.value
                ? 'bg-forest-night text-paper'
                : 'text-ink-soft hover:text-ink'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className='mt-6 rounded-3xl border border-line-strong bg-paper p-6 sm:p-8'
      >
        <div className='grid gap-5 sm:grid-cols-2'>
          <div>
            <label htmlFor='fullName' className={labelClasses}>
              Full name
            </label>
            <input
              id='fullName'
              name='fullName'
              type='text'
              required
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor='email' className={labelClasses}>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              required
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor='phone' className={labelClasses}>
              Phone / WhatsApp number
            </label>
            <input
              id='phone'
              name='phone'
              type='tel'
              required
              placeholder='080...'
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor='gender' className={labelClasses}>
              Gender
            </label>
            <select
              id='gender'
              name='gender'
              required
              defaultValue=''
              className={fieldClasses}
            >
              <option value='' disabled>
                Select
              </option>
              <option value='Brother'>Brother</option>
              <option value='Sister'>Sister</option>
            </select>
          </div>

          {membershipType === 'new' ? (
            <>
              <div>
                <label htmlFor='batch' className={labelClasses}>
                  Batch
                </label>
                <input
                  id='batch'
                  name='batch'
                  type='text'
                  required
                  placeholder='2026 Batch A'
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor='ppa' className={labelClasses}>
                  Place of Primary Assignment (PPA)
                </label>
                <input
                  id='ppa'
                  name='ppa'
                  type='text'
                  required
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor='stateCode' className={labelClasses}>
                  NYSC state code (optional)
                </label>
                <input
                  id='stateCode'
                  name='stateCode'
                  type='text'
                  placeholder='RV/26A/1234'
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor='callUpNumber' className={labelClasses}>
                  Call-up number (optional)
                </label>
                <input
                  id='callUpNumber'
                  name='callUpNumber'
                  type='text'
                  className={fieldClasses}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label htmlFor='yearOfPassingOut' className={labelClasses}>
                  Year of passing out
                </label>
                <input
                  id='yearOfPassingOut'
                  name='yearOfPassingOut'
                  type='text'
                  required
                  placeholder='2019'
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor='interest' className={labelClasses}>
                  How would you like to serve?
                </label>
                <select
                  id='interest'
                  name='interest'
                  defaultValue=''
                  className={fieldClasses}
                >
                  <option value=''>Select (optional)</option>
                  {INTEREST_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor='stateCode' className={labelClasses}>
                  NYSC state code (optional)
                </label>
                <input
                  id='stateCode'
                  name='stateCode'
                  type='text'
                  placeholder='RV/19A/1234'
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor='callUpNumber' className={labelClasses}>
                  Call-up number (optional)
                </label>
                <input
                  id='callUpNumber'
                  name='callUpNumber'
                  type='text'
                  className={fieldClasses}
                />
              </div>
            </>
          )}

          <div className='sm:col-span-2'>
            <label htmlFor='lga' className={labelClasses}>
              LGA you&apos;re based in
            </label>
            <select
              id='lga'
              name='lga'
              required
              defaultValue=''
              className={fieldClasses}
            >
              <option value='' disabled>
                Select your LGA
              </option>
              {RIVERS_LGAS.map((lga) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))}
            </select>
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor='message' className={labelClasses}>
              Anything else you&apos;d like us to know?
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className={`${fieldClasses} resize-none`}
            />
          </div>

          <div className='flex items-start gap-3 sm:col-span-2'>
            <input
              id='consent'
              name='consent'
              type='checkbox'
              required
              className='mt-1 size-4 shrink-0 rounded border-line-strong text-forest focus:ring-forest'
            />
            <label
              htmlFor='consent'
              className='text-xs leading-relaxed text-ink-soft'
            >
              I consent to MCAN Rivers State storing this information to process
              my membership.
            </label>
          </div>

          {status === 'error' && (
            <p className='text-sm text-red-600 sm:col-span-2'>{errorMessage}</p>
          )}

          <Button
            type='submit'
            disabled={status === 'submitting'}
            variant='solid'
            className='w-fit disabled:opacity-60 sm:col-span-2'
          >
            {status === 'submitting' ? 'Submitting…' : 'Complete Registration'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
