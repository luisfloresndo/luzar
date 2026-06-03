import Image from "next/image";
import { ShieldCheck, Briefcase, Scale, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WHY_LUZAR } from "@/lib/content";

const ICONS = [ShieldCheck, Briefcase, Scale, MessageSquare];

export function WhyLuzar() {
  return (
    <section id="nosotros" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Imagen */}
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about-office.webp"
                alt="Asesores de Luzar revisando documentos"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-surface/95 px-5 py-4 backdrop-blur">
                <p className="font-display text-2xl font-semibold text-navy">San Pedro</p>
                <p className="text-sm text-muted-foreground">Garza García, N.L.</p>
              </div>
            </div>
          </Reveal>

          {/* Diferenciadores */}
          <div>
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-dark">
                Por qué Luzar
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl">
                Tu tranquilidad fiscal es el producto.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {WHY_LUZAR.map((item, i) => {
                const Icon = ICONS[i];
                return (
                  <Reveal key={item.title} delay={(i % 2) * 0.08}>
                    <div className="flex flex-col gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-soft text-green-dark">
                        <Icon size={20} />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
