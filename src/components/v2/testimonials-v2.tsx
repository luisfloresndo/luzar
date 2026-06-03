"use client";

import { CardStack } from "@/components/ui/card-stack";
import { TESTIMONIALS } from "@/lib/content";

const items = TESTIMONIALS.map((t, i) => ({
  id: i,
  name: t.name,
  designation: t.designation,
  content: <p>“{t.quote}”</p>,
}));

export function TestimonialsV2() {
  return (
    <section id="casos" className="bg-[#0a1331] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="font-editorial text-lg italic text-green-bright">
            (Casos de éxito)
          </span>
          <h2 className="mt-4 font-editorial text-5xl font-light leading-[1] tracking-tight text-white md:text-7xl">
            Resultados que
            <br />
            sí se notan.
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/60">
            Regularizaciones, defensas ganadas y operación mensual al día. Esto
            es lo que dicen quienes ya trabajan con nosotros.
          </p>
        </div>
        <div className="flex min-h-[20rem] items-center justify-center lg:justify-end">
          <CardStack items={items} />
        </div>
      </div>
    </section>
  );
}
