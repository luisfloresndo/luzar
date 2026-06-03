"use client";

import { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CONTACT } from "@/lib/content";

export function CtaContact() {
  const [form, setForm] = useState({ nombre: "", negocio: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Luzar, soy ${form.nombre || "—"} (${
      form.negocio || "—"
    }). ${form.mensaje || "Quiero agendar un diagnóstico."}`;
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section id="contacto">
      <BackgroundBeamsWithCollision className="h-auto py-24 md:h-auto md:py-32">
        <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green">
              Da el primer paso
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Tu diagnóstico inicial es{" "}
              <span className="text-green">sin costo</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/75 lg:mx-0">
              Cuéntanos de tu negocio y te decimos exactamente cómo podemos
              ayudarte. Sin compromiso.
            </p>
            <div className="mt-7 space-y-1 text-sm text-white/70">
              <p>{CONTACT.phones.join(" · ")}</p>
              <p>{CONTACT.email}</p>
              <p>
                {CONTACT.address}, {CONTACT.city}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:p-8"
          >
            <div className="space-y-4">
              <input
                required
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-green focus:outline-none"
              />
              <input
                placeholder="Tu negocio o giro"
                value={form.negocio}
                onChange={(e) => setForm({ ...form, negocio: e.target.value })}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-green focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="¿En qué te ayudamos?"
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-green focus:outline-none"
              />
            </div>
            <ShimmerButton
              type="submit"
              shimmerColor="#3AB548"
              background="#3AB548"
              className="mt-5 w-full font-semibold"
            >
              Enviar por WhatsApp
            </ShimmerButton>
            <p className="mt-3 text-center text-xs text-white/45">
              Te responderemos el mismo día hábil.
            </p>
          </form>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
