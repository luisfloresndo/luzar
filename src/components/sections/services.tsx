"use client";

import { Check } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-dark">
            Servicios
          </p>
        </Reveal>
        <TextGenerateEffect
          words="Todo lo contable y fiscal, bajo un mismo techo."
          className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl"
          duration={0.4}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <article className="relative h-full rounded-2xl border border-border bg-surface p-1">
                <GlowingEffect
                  spread={40}
                  glow
                  disabled={false}
                  proximity={72}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative flex h-full flex-col rounded-xl p-6">
                  <span className="font-display text-sm font-semibold text-green-dark">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check size={15} className="shrink-0 text-green" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
