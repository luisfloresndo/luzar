"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { METRICS } from "@/lib/content";

function BigCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);
  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <span
      ref={ref}
      className="font-editorial text-6xl font-light text-white sm:text-7xl md:text-8xl"
    >
      {display}
      <span className="text-green-bright">{suffix}</span>
    </span>
  );
}

export function Statement() {
  return (
    <section className="relative bg-[#0a1331]">
      <LampContainer className="min-h-[34rem] bg-[#0a1331] md:min-h-[42rem]">
        <motion.h2
          initial={{ opacity: 0.4, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 max-w-4xl text-center font-editorial text-4xl font-light leading-[1.05] tracking-tight text-white md:text-7xl"
        >
          Los números no <span className="italic text-green-bright">mienten</span>.
        </motion.h2>
      </LampContainer>

      {/* Métricas gigantes */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-14 px-6 pb-32 lg:grid-cols-4">
        {METRICS.map((m) => (
          <div key={m.label} className="flex flex-col items-center text-center">
            <BigCounter value={m.value} suffix={m.suffix} />
            <p className="mt-4 max-w-[12rem] text-sm text-white/55">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
