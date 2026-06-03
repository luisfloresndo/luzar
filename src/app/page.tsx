import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Metrics } from "@/components/sections/metrics";
import { WhyLuzar } from "@/components/sections/why-luzar";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaContact } from "@/components/sections/cta-contact";
import { Footer } from "@/components/sections/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Industries />
        <Process />
        <Metrics />
        <WhyLuzar />
        <Testimonials />
        <Faq />
        <CtaContact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
