import { HeroParallax } from "@/components/ui/hero-parallax";

// Muro de imágenes con parallax 3D al hacer scroll (Aceternity hero-parallax).
// Reutiliza las imágenes reales de Luzar como "portafolio visual".
const IMAGES = [
  "/images/hero-main.webp",
  "/images/industry-construccion.webp",
  "/images/about-office.webp",
  "/images/industry-industria.webp",
  "/images/contact-building.webp",
  "/images/industry-restaurantes.webp",
  "/images/case-meeting.webp",
  "/images/industry-comercio.webp",
  "/images/industry-salud.webp",
  "/images/industry-transporte.webp",
];

const products = Array.from({ length: 15 }, (_, i) => ({
  title: "Luzar Consultores",
  link: "#contacto",
  thumbnail: IMAGES[i % IMAGES.length],
}));

export function HeroV2() {
  return (
    <div id="top">
      <HeroParallax products={products} />
    </div>
  );
}
