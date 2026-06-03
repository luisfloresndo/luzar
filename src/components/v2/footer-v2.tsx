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
  // Efecto "reveal": el espaciador reserva el alto; el footer va fixed detrás
  // del contenido (que tiene fondo sólido + z mayor). Al hacer scroll al final,
  // el contenido se desliza hacia arriba y descubre el footer.
  return (
    <div className="relative h-[42rem] md:h-[26rem]">
      <div className="fixed bottom-0 left-0 z-0 flex h-[42rem] w-full items-center overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0f1c44] to-[#1a2a58] text-white/70 md:h-[26rem]">
        <div className="w-full">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.5fr_1fr_1.2fr]">
            <div>
              {/* Logo original full-color sobre placa: legible sobre el navy */}
              <Image
                src="/logo-opt1-plate.png"
                alt="Luzar Consultores"
                width={460}
                height={202}
                className="h-[88px] w-auto"
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
                    <a
                      href={l.href}
                      className="transition-colors hover:text-green-bright"
                    >
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
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl px-6">
            <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
              © {new Date().getFullYear()} Luzar Consultores · Consultoría
              Contable Fiscal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
