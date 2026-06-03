"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/content";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

// Footer "sticky reveal" (técnica de efferd footer-6): clip-path + fixed +
// sticky, con stagger de aparición en el contenido.
export function FooterV2() {
  return (
    <footer
      className="relative h-(--footer-height) w-full border-t border-white/10 [--footer-height:640px] md:[--footer-height:460px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-(--footer-height) w-full">
        <div className="sticky top-[calc(100vh-var(--footer-height))] h-full overflow-hidden bg-gradient-to-b from-[#0f1c44] to-[#1a2a58]">
          <div className="relative mx-auto flex size-full max-w-7xl flex-col justify-between gap-6 px-6 py-12 text-white/70">
            <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.3fr]">
              <AnimatedContainer className="space-y-6">
                {/* Placa con el mismo fondo frosted slate de la barra superior.
                    -ml-6 compensa el padding para alinear el logo con el del navbar;
                    mismo tamaño que el navbar (h-14 / md:h-[4.25rem]). */}
                <div className="-ml-6 inline-flex w-max items-center rounded-2xl border border-white/15 bg-[#c5cee4]/85 px-6 py-3.5 backdrop-blur-xl">
                  <Image
                    src="/logo-color.svg"
                    alt="Luzar Consultores"
                    width={300}
                    height={103}
                    className="h-14 w-auto md:h-[4.25rem]"
                  />
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-white/55">
                  Precisión contable y fiscal para empresas y emprendedores en
                  San Pedro Garza García y todo Nuevo León.
                </p>
              </AnimatedContainer>

              <AnimatedContainer delay={0.15}>
                <h4 className="mb-4 font-editorial text-sm uppercase tracking-wider text-white">
                  Navegación
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="transition-colors hover:text-green-bright"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>

              <AnimatedContainer delay={0.3}>
                <h4 className="mb-4 font-editorial text-sm uppercase tracking-wider text-white">
                  Contacto
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2.5">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-green-bright" />
                    <span>
                      {CONTACT.address}
                      <br />
                      {CONTACT.city}
                    </span>
                  </li>
                  {CONTACT.phones.map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <Phone size={16} className="shrink-0 text-green-bright" />
                      <a
                        href={`tel:${p.replace(/-/g, "")}`}
                        className="hover:text-green-bright"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-center gap-2.5">
                    <Mail size={16} className="shrink-0 text-green-bright" />
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="hover:text-green-bright"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                </ul>
              </AnimatedContainer>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
              <p>
                © {new Date().getFullYear()} Luzar Consultores · Consultoría
                Contable Fiscal
              </p>
              <p>San Pedro Garza García, Nuevo León</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div {...(props as object)}>{children}</div>;

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
