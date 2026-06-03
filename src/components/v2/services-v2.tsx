"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { SERVICES } from "@/lib/content";

const content = SERVICES.map((s, i) => ({
  title: s.title,
  description: s.description + " " + s.points.join(" · ") + ".",
  content: (
    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
      <span className="font-editorial text-7xl font-light text-white/90">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="mt-4 text-sm uppercase tracking-[0.25em] text-white/80">
        {s.title}
      </span>
    </div>
  ),
}));

export function ServicesV2() {
  return (
    <section id="servicios" className="bg-[#0a1331]">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-4">
        <span className="font-editorial text-lg italic text-green-bright">
          (Servicios)
        </span>
        <h2 className="mt-4 max-w-4xl font-editorial text-5xl font-light leading-[1] tracking-tight text-white md:text-7xl">
          Todo lo contable y fiscal,
          <br />
          bajo un mismo techo.
        </h2>
      </div>
      <StickyScroll content={content} />
    </section>
  );
}
