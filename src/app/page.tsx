import { NavbarV2 } from "@/components/v2/navbar-v2";
import { HeroV2 } from "@/components/v2/hero-v2";
import { Statement } from "@/components/v2/statement";
import { ServicesV2 } from "@/components/v2/services-v2";
import { IndustriesShowcase } from "@/components/v2/industries-showcase";
import { ProcessV2 } from "@/components/v2/process-v2";
import { WhyV2 } from "@/components/v2/why-v2";
import { CasosV2 } from "@/components/v2/casos-v2";
import { FaqV2 } from "@/components/v2/faq-v2";
import { CtaV2 } from "@/components/v2/cta-v2";
import { FooterV2 } from "@/components/v2/footer-v2";
import { Cursor } from "@/components/v2/cursor";
import { WhatsappFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="theme-dark relative min-h-screen cursor-none bg-[#0a1331] [&_*]:cursor-none">
      <Cursor />
      <NavbarV2 />
      <main className="relative z-10 bg-[#0a1331]">
        <HeroV2 />
        <Statement />
        <ServicesV2 />
        <IndustriesShowcase />
        <ProcessV2 />
        <WhyV2 />
        <CasosV2 />
        <FaqV2 />
        <CtaV2 />
      </main>
      <FooterV2 />
      <WhatsappFloat />
    </div>
  );
}
