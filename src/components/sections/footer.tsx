import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICES } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="font-display text-2xl font-semibold tracking-tight text-white">
            LUZAR<span className="text-green">.</span>
          </span>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/50">
            Consultoría contable fiscal
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Precisión contable y fiscal para empresas y emprendedores en San
            Pedro Garza García y todo Nuevo León.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
            Navegación
          </h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-green">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-green" />
              <span>
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </span>
            </li>
            {CONTACT.phones.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-green" />
                <a href={`tel:${p.replace(/-/g, "")}`} className="hover:text-green">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-green" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-green">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Luzar Consultores. Todos los derechos reservados.</p>
          <p>{SERVICES.length} servicios · 6 industrias · San Pedro Garza García</p>
        </div>
      </div>
    </footer>
  );
}
