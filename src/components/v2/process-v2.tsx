"use client";

import { motion } from "motion/react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { PROCESS } from "@/lib/content";

export function ProcessV2() {
  return (
    <section id="proceso" className="bg-[#0a1331] py-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="font-editorial text-lg italic text-green-bright">
          (Proceso)
        </span>
        <h2 className="mt-4 font-editorial text-5xl font-light leading-[1] tracking-tight text-white md:text-7xl">
          Un proceso claro,
          <br />
          de principio a fin.
        </h2>
      </div>

      <TracingBeam className="mt-16 px-6">
        <div className="mx-auto max-w-2xl space-y-24">
          {PROCESS.map((step) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-editorial text-6xl font-light text-green-bright">
                {step.step}
              </span>
              <h3 className="mt-3 font-editorial text-3xl font-light text-white md:text-4xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/65">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}
