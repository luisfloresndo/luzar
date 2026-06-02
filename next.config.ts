import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Evita el warning de múltiples lockfiles fijando la raíz de trazado a este proyecto.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
