import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const STATS = [
  { value: "42", label: "Active Lodges", note: "Verified across the state" },
  { value: "650+", label: "Muslim Corpers Deployed", note: "Active members" },
  { value: "6", label: "Ongoing Dawah Projects", note: "State-wide programs" },
];

const CtaBanner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-forest-night py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,#000_0%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-forest/40 blur-[110px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <p className="label-mono text-[11px] text-gold-soft">
          Newly posted, or relocating states?
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-paper text-balance sm:text-4xl">
          Your chapter is already waiting for you
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/65">
          Reach out to your state chapter&apos;s executives as soon as you
          arrive at camp — MCAN is often one of the first communities corps
          members find.
        </p>
        <Button
          href="#chapters"
          tone="onDark"
          variant="solid"
          trailingIcon={ArrowRight}
          className="mt-8"
        >
          Browse state chapters
        </Button>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-4xl grid-cols-1 divide-y divide-white/10 border-y border-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 px-6 py-8 text-center"
          >
            <span className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-paper/80">
              {stat.label}
            </span>
            <span className="label-mono text-[10px] text-gold-soft">
              {stat.note}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CtaBanner;
