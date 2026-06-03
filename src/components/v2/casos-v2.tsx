"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";
import TextRotate, { type TextRotateRef } from "@/components/fancy/text/text-rotate";
import { CASES } from "@/lib/content";

export function CasosV2() {
  const rotateRef = useRef<TextRotateRef>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Sync con el scroll de Lenis (no dispara eventos 'scroll' nativos):
  // el caso cuyo centro esté más cerca del centro del viewport es el activo.
  useLenis(() => {
    const mid = window.innerHeight / 2;
    let best = 0;
    let bestDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dist = Math.abs(r.top + r.height / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive((prev) => {
      if (prev !== best) rotateRef.current?.jumpTo(best);
      return best;
    });
  });

  return (
    <section id="casos" className="bg-[#0a1331] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-editorial text-lg italic text-green-bright">
          (Casos de éxito)
        </span>
        <h2 className="mt-4 max-w-3xl font-editorial text-5xl font-light leading-[1] tracking-tight text-white md:text-7xl">
          Resultados que sí se notan.
        </h2>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr]">
        {/* Izquierda: texto sticky que rota en sync */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen flex-col justify-center">
            <TextRotate
              ref={rotateRef}
              texts={CASES.map((c) => c.designation)}
              as="h3"
              auto={false}
              loop={false}
              splitBy="characters"
              staggerFrom="first"
              staggerDuration={0.012}
              mainClassName="font-editorial text-4xl md:text-6xl font-light text-white leading-[1] flex-wrap"
              splitLevelClassName="overflow-hidden pb-1"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-110%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            />

            <div className="mt-8 min-h-[10rem] max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg leading-relaxed text-white/70">
                    “{CASES[active].quote}”
                  </p>
                  <p className="mt-5 font-semibold text-white">
                    {CASES[active].name}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Derecha: imágenes grandes */}
        <div>
          {CASES.map((c, i) => (
            <div
              key={c.name}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex min-h-[88vh] items-center py-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40"
              >
                <Image
                  src={c.src}
                  alt={c.designation}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1331]/85 via-[#0a1331]/10 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <span className="font-editorial text-6xl font-light text-green-bright">
                    0{i + 1}
                  </span>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-white/85">
                    {c.designation}
                  </p>
                  {/* En móvil el texto del caso vive en la card */}
                  <p className="mt-3 text-base leading-relaxed text-white/75 lg:hidden">
                    “{c.quote}”
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
