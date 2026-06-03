"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/reveal";
import { INDUSTRIES } from "@/lib/content";

export function Industries() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  return (
    <section id="industrias" className="bg-navy-deep py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green">
            Industrias
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Cada giro tiene sus reglas. Las conocemos.
          </h2>
        </Reveal>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.name}
              onClick={() => setActive(i)}
              className="relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {active === i && (
                <motion.span
                  layoutId="industry-pill"
                  className="absolute inset-0 rounded-full bg-green"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={active === i ? "relative text-white" : "relative text-white/70"}>
                {ind.name}
              </span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-8 grid items-stretch gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={`Industria: ${current.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-3xl font-semibold text-white">
                  {current.name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/75">
                  {current.blurb}
                </p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-green transition-colors hover:text-white"
                >
                  Hablemos de tu caso →
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
