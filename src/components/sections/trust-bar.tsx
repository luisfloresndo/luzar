"use client";

import { motion } from "motion/react";

const ITEMS = [
  "Regularización de declaraciones",
  "Defensa ante el SAT",
  "Cancelación de multas",
  "Contabilidad electrónica",
  "Nómina y CFDI",
  "Planeación fiscal",
  "Arranque de negocios",
  "Estados financieros",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <motion.div
      className="flex shrink-0 gap-4 pr-4"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 32, ease: "linear", repeat: Infinity }}
    >
      {loop.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          {item}
        </span>
      ))}
    </motion.div>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-background py-7">
      <p className="mx-auto mb-5 max-w-7xl px-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Lo que resolvemos todos los días
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row />
        <Row />
      </div>
    </section>
  );
}
