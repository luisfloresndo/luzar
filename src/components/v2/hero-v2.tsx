import { HeroParallax } from "@/components/ui/hero-parallax";

// Muro de imágenes con parallax 3D al hacer scroll (Aceternity hero-parallax).
// Reutiliza las imágenes reales de Luzar como "portafolio visual".
// 15 imágenes únicas, interpoladas para variedad visual (sin repeticiones).
const IMAGES = [
  "/images/hero-main.webp",
  "/images/wall-handshake.webp",
  "/images/industry-construccion.webp",
  "/images/wall-documentos.webp",
  "/images/industry-industria.webp",
  "/images/wall-monterrey-noche.webp",
  "/images/case-meeting.webp",
  "/images/industry-restaurantes.webp",
  "/images/wall-reunion-mesa.webp",
  "/images/industry-comercio.webp",
  "/images/about-office.webp",
  "/images/wall-oficina-detalle.webp",
  "/images/industry-salud.webp",
  "/images/wall-asesora-retrato.webp",
  "/images/industry-transporte.webp",
];

const products = IMAGES.map((thumbnail) => ({
  title: "Luzar Consultores",
  link: "#contacto",
  thumbnail,
}));

export function HeroV2() {
  return (
    <div id="top">
      <HeroParallax products={products} />
    </div>
  );
}
