"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FaqV2() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0a1331] py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="font-editorial text-lg italic text-green-bright">
            (Preguntas)
          </span>
          <h2 className="mt-4 font-editorial text-5xl font-light leading-[1] tracking-tight text-white md:text-6xl">
            Lo que más
            <br />
            nos preguntan.
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-xl font-light text-white md:text-2xl">
                    {faq.question}
                  </span>
                  <Plus
                    size={22}
                    className={cn(
                      "shrink-0 text-green-bright transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-8 text-lg leading-relaxed text-white/60">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
