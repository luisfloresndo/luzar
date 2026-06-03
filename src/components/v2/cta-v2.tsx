"use client";

import { useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CONTACT } from "@/lib/content";

export function CtaV2() {
  const [form, setForm] = useState({ nombre: "", negocio: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Luzar, soy ${form.nombre || "—"} (${
      form.negocio || "—"
    }). ${form.mensaje || "Quiero recibir asesoría contable y fiscal."}`;
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-[#0a1331] pt-10 pb-28">
      {/* Tipografía gigante con hover gradient (Aceternity text-hover-effect) */}
      <div className="mx-auto h-[18rem] max-w-7xl md:h-[26rem]">
        <TextHoverEffect text="LUZAR" />
      </div>

      <div className="mx-auto -mt-10 grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="font-editorial text-lg italic text-green-bright">
            (Contacto)
          </span>
          <h2 className="mt-4 font-editorial text-5xl font-light leading-[1.02] tracking-tight text-white md:text-6xl">
            Hablemos de tu
            <br />
            <span className="italic text-green-bright">situación</span> fiscal.
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/55">
            Cuéntanos cómo está tu negocio y un experto te dice exactamente
            cómo podemos ayudarte.
          </p>
          <div className="mt-8 space-y-1.5 text-white/55">
            <p>{CONTACT.phones.join(" · ")}</p>
            <p>{CONTACT.email}</p>
            <p>
              {CONTACT.address}, {CONTACT.city}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md sm:p-9"
        >
          <div className="space-y-4">
            <input
              required
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 focus:border-green-bright focus:outline-none"
            />
            <input
              placeholder="Tu negocio o giro"
              value={form.negocio}
              onChange={(e) => setForm({ ...form, negocio: e.target.value })}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 focus:border-green-bright focus:outline-none"
            />
            <textarea
              rows={3}
              placeholder="¿En qué te ayudamos?"
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 focus:border-green-bright focus:outline-none"
            />
          </div>
          <ShimmerButton
            type="submit"
            shimmerColor="#4fd96a"
            background="#3AB548"
            className="mt-5 w-full font-semibold"
          >
            Enviar por WhatsApp
          </ShimmerButton>
        </form>
      </div>
    </section>
  );
}
