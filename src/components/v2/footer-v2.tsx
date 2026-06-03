import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/content";

const LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function FooterV2() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1331] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1.2fr]">
        <div>
          <Image
            src="/logo-lockup-dark.png"
            alt="Luzar Consultores"
            width={330}
            height={107}
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
            Precisión contable y fiscal para empresas y emprendedores en San
            Pedro Garza García y todo Nuevo León.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-editorial text-sm uppercase tracking-wider text-white">
            Navegación
          </h4>
          <ul className="space-y-2.5 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-green-bright">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
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
                <a href={`tel:${p.replace(/-/g, "")}`} className="hover:text-green-bright">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-green-bright" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-green-bright">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Luzar Consultores · Consultoría Contable Fiscal
        </div>
      </div>
    </footer>
  );
}
