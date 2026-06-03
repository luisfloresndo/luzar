"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WHY_LUZAR } from "@/lib/content";

export function WhyV2() {
  return (
    <section id="nosotros" className="bg-[#0a1331] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-editorial text-lg italic text-green-bright">
          (Por qué Luzar)
        </span>
        <h2 className="mt-4 max-w-4xl font-editorial text-5xl font-light leading-[1.02] tracking-tight text-white md:text-7xl">
          Tu tranquilidad fiscal
          <br />
          es el producto.
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/about-office.webp"
              alt="Asesores de Luzar"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1331]/60 to-transparent" />
          </div>

          <div className="divide-y divide-white/10">
            {WHY_LUZAR.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="py-6 first:pt-0"
              >
                <h3 className="font-editorial text-2xl font-light text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/60">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
