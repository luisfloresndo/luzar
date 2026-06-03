"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CONTACT } from "@/lib/content";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#0a1331]/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="relative block h-11 w-40 md:h-12 md:w-48">
          <Image
            src="/logo-blanco.svg"
            alt="Luzar Consultores"
            fill
            priority
            sizes="192px"
            className="object-contain object-left"
          />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hidden overflow-hidden rounded-full border border-green/40 px-5 py-2.5 text-sm font-semibold text-white md:inline-flex"
        >
          <span className="absolute inset-0 -z-10 translate-y-full bg-green transition-transform duration-300 group-hover:translate-y-0" />
          Agenda tu diagnóstico
        </a>
      </nav>
    </motion.header>
  );
}
