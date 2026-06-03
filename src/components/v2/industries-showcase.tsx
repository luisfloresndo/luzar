"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { INDUSTRIES } from "@/lib/content";

function Panel({
  index,
  name,
  image,
  blurb,
}: {
  index: number;
  name: string;
  image: string;
  blurb: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax: la imagen se mueve más lento que el scroll.
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[88vh] items-end overflow-hidden border-t border-white/10"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={image}
          alt={`Industria: ${name}`}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1331] via-[#0a1331]/55 to-[#0a1331]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1331]/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:pb-24">
        <span className="font-editorial text-lg text-green-bright">
          ({String(index + 1).padStart(2, "0")})
        </span>
        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-editorial text-6xl font-light leading-[0.9] tracking-tight text-white sm:text-7xl md:text-[7rem]"
          >
            {name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-sm text-lg leading-relaxed text-white/75"
          >
            {blurb}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export function IndustriesShowcase() {
  return (
    <section id="industrias" className="bg-[#0a1331]">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12">
        <span className="font-editorial text-lg italic text-green-bright">
          (Industrias)
        </span>
        <h2 className="mt-4 max-w-4xl font-editorial text-5xl font-light leading-[1] tracking-tight text-white md:text-7xl">
          Cada giro tiene sus reglas.
          <br />
          Las conocemos todas.
        </h2>
      </div>
      {INDUSTRIES.map((ind, i) => (
        <Panel
          key={ind.name}
          index={i}
          name={ind.name}
          image={ind.image}
          blurb={ind.blurb}
        />
      ))}
    </section>
  );
}
