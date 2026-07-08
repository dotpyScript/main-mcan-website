import { BookOpen, HeartHandshake, Users, Compass } from "lucide-react";

const PILLARS = [
  {
    index: "01",
    icon: BookOpen,
    title: "Dawah",
    description:
      "Deepening Islamic knowledge and practice among corps members through study circles, lectures, and outreach in host communities.",
  },
  {
    index: "02",
    icon: HeartHandshake,
    title: "Welfare",
    description:
      "Supporting members with lodging, feeding, medical assistance, and emergency relief during their service year.",
  },
  {
    index: "03",
    icon: Users,
    title: "Mentorship",
    description:
      "Connecting members with alumni and professionals for guidance on career, deen, and life after service.",
  },
  {
    index: "04",
    icon: Compass,
    title: "Unity",
    description:
      "Building brotherhood and sisterhood across states, cultures, and backgrounds under one national body.",
  },
];

const Pillars = () => {
  return (
    <section id="mission" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-mono text-[11px] text-forest">Our mission</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">
            Four pillars, one national purpose
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Every chapter of MCAN — from orientation camps to local
            government inaugurations — is built on the same foundation.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative flex flex-col gap-5 bg-paper p-8 transition-colors hover:bg-paper-2"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <pillar.icon className="size-5" />
                </span>
                <span className="label-mono text-xs text-ink-faint">
                  {pillar.index}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
