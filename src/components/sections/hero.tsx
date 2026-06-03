"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/content";

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Imagen de fondo — skyline Monterrey, golden hour */}
      <Image
        src="/images/hero-main.webp"
        alt="Skyline de Monterrey al amanecer"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Scrim de marca: navy de izquierda a abajo para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/55 to-navy-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 pb-16">
        <motion.span
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Consultoría contable y fiscal · San Pedro Garza García
        </motion.span>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Soluciones contables y fiscales con{" "}
          <span className="text-green">precisión</span> que impulsa tu negocio.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          Regularizamos lo pendiente, defendemos tu caso ante el SAT y mantenemos
          tu contabilidad, nómina e impuestos al día — para empresas y
          emprendedores en Monterrey.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-green/25 transition-transform hover:scale-[1.03]"
          >
            Agenda tu diagnóstico sin costo
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${CONTACT.phones[0].replace(/-/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            <Phone size={17} />
            {CONTACT.phones[0]}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
