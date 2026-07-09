import { Sun, Sunrise, Moon, MapPin, Clock } from 'lucide-react';

const CITY = 'Port Harcourt';
const COUNTRY = 'Nigeria';

type Timings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

type AladhanResponse = {
  code: number;
  data: {
    timings: Timings;
  };
};

async function getPrayerTimes() {
  try {
    const res = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(
        CITY,
      )}&country=${encodeURIComponent(COUNTRY)}&method=2`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) return null;

    const json = (await res.json()) as AladhanResponse;
    return json.data.timings;
  } catch {
    return null;
  }
}

const PRAYERS = [
  { key: 'Fajr', label: 'Fajr', icon: Moon },
  { key: 'Sunrise', label: 'Sunrise', icon: Sunrise },
  { key: 'Dhuhr', label: 'Dhuhr', icon: Sun },
  { key: 'Asr', label: 'Asr', icon: Sun },
  { key: 'Maghrib', label: 'Maghrib', icon: Moon },
  { key: 'Isha', label: "Isha'a", icon: Moon },
] as const;

const PrayerTimes = async () => {
  const timings = await getPrayerTimes();

  const readableDate = new Date().toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'Africa/Lagos',
  });

  return (
    <section className='bg-paper py-10 lg:py-30'>
      <div className='mx-auto max-w-9/12 px-6 lg:px-10'>
        <div className='relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-forest/10 via-paper-2 to-paper-2 p-8 sm:p-10'>
          <div
            className='pointer-events-none absolute -right-6 -top-6 hidden text-forest/25 lg:block'
            aria-hidden
          >
            <svg width='220' height='220' viewBox='0 0 220 220' fill='none'>
              <circle cx='110' cy='110' r='100' stroke='currentColor' />
              <circle cx='110' cy='110' r='70' stroke='currentColor' />
              <circle cx='110' cy='110' r='40' stroke='currentColor' />
              <line x1='10' y1='110' x2='210' y2='110' stroke='currentColor' />
              <line x1='110' y1='10' x2='110' y2='210' stroke='currentColor' />
            </svg>
          </div>

          <div className='relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center'>
            <div>
              <h2 className='text-xl font-semibold tracking-tight text-forest'>
                Prayer Times
              </h2>
              <p className='mt-2 inline-flex items-center gap-1.5 text-sm text-ink-soft'>
                <MapPin className='size-3.5 text-forest' />
                {CITY}, Rivers State
              </p>
              <p className='mt-2 inline-flex items-center gap-1.5 text-xs text-ink-faint'>
                <Clock className='size-3.5' />
                {readableDate}
              </p>
            </div>

            {timings ? (
              <div className='grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-6'>
                {PRAYERS.map(({ key, label, icon: Icon }) => (
                  <div
                    key={key}
                    className='flex flex-col items-center gap-2 text-center'
                  >
                    <span className='flex size-11 items-center justify-center rounded-full bg-paper text-forest shadow-sm'>
                      <Icon className='size-4.5' />
                    </span>
                    <span className='text-xs font-semibold text-ink'>
                      {label}
                    </span>
                    <span className='text-xs text-ink-soft'>
                      {timings[key]}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-sm text-ink-faint'>
                Prayer times are unavailable right now — please check back
                shortly.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;
