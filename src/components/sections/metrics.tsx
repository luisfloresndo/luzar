"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { METRICS } from "@/lib/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref} className="font-display text-5xl font-semibold text-white sm:text-6xl">
      {display}
      <span className="text-green">{suffix}</span>
    </span>
  );
}

export function Metrics() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4">
        {METRICS.map((m) => (
          <div key={m.label} className="flex flex-col items-center text-center">
            <Counter value={m.value} suffix={m.suffix} />
            <p className="mt-3 max-w-[12rem] text-sm text-white/65">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
