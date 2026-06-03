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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      // Barra CLARA esmerilada fija — color distinto al navy de la página
      // para que el logo original (con su navy) resalte en cualquier scroll.
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#c5cee4]/85 backdrop-blur-xl transition-shadow duration-500",
        scrolled && "shadow-[0_8px_30px_rgba(10,19,49,0.18)]",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        <a href="#top" className="block shrink-0">
          <Image
            src="/logo-color.svg"
            alt="Luzar — Consultoría Contable Fiscal"
            width={300}
            height={103}
            priority
            className="h-14 w-auto md:h-[4.25rem]"
          />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-navy-deep/70 transition-colors hover:text-navy"
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
          className="hidden rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-green/30 transition-transform hover:scale-[1.04] md:inline-flex"
        >
          Agenda tu diagnóstico
        </a>
      </nav>
    </motion.header>
  );
}
