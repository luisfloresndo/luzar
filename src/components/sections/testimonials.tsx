"use client";

import { useEffect, useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  // El carrusel usa AnimatePresence con transforms 3D que difieren en SSR.
  // Lo montamos solo en cliente para evitar hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="casos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-green-dark">
          Casos de éxito
        </p>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          Resultados que nuestros clientes sí notan.
        </h2>
      </div>
      <div className="min-h-[28rem]">
        {mounted ? (
          <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay />
        ) : null}
      </div>
    </section>
  );
}
