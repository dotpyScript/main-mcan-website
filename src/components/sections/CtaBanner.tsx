import { ArrowRight } from "lucide-react";

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
        <a
          href="#chapters"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[15px] font-semibold text-forest-night transition-colors hover:bg-gold-soft"
        >
          Browse state chapters
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
