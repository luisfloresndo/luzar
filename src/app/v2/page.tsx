import type { Metadata } from "next";
import { NavbarV2 } from "@/components/v2/navbar-v2";
import { HeroV2 } from "@/components/v2/hero-v2";
import { Statement } from "@/components/v2/statement";
import { IndustriesShowcase } from "@/components/v2/industries-showcase";
import { Cursor } from "@/components/v2/cursor";

export const metadata: Metadata = {
  title: "Luzar — v2 (dark editorial)",
  description: "Prueba de dirección visual: dark editorial, image-led.",
};

export default function V2Page() {
  return (
    <div className="theme-dark min-h-screen cursor-none bg-[#0a1331] [&_*]:cursor-none">
      <Cursor />
      <NavbarV2 />
      <main>
        <HeroV2 />
        <Statement />
        <IndustriesShowcase />
      </main>
      <footer className="border-t border-white/10 bg-[#0a1331] py-10 text-center text-sm text-white/40">
        Prueba de dirección v2 · Luzar Consultores
      </footer>
    </div>
  );
}
