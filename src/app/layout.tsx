import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

// Display editorial de alto contraste (reemplaza el carácter "corporativo" anterior).
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Dominio base para metadatos/OG. Usa el dominio de producción de Vercel
// (luzar-blue.vercel.app) hasta que se conecte luzar.com.mx a este proyecto.
const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://luzar-blue.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luzar — Consultoría Contable y Fiscal | San Pedro Garza García",
    template: "%s | Luzar Consultores",
  },
  description:
    "Despacho contable y fiscal en San Pedro Garza García. Más de 25 años: contabilidad, planeación fiscal, nómina, legal y trámites con precisión para empresas y emprendedores.",
  keywords: [
    "contabilidad",
    "asesoría fiscal",
    "planeación fiscal",
    "despacho contable Monterrey",
    "San Pedro Garza García",
    "nómina",
    "SAT",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Luzar Consultores",
    title: "Luzar — Consultoría Contable y Fiscal",
    description:
      "Precisión que se ve en resultados. Más de 25 años de experiencia contable y fiscal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luzar — Consultoría Contable y Fiscal",
    description:
      "Precisión que se ve en resultados. Más de 25 años de experiencia contable y fiscal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@400,500,600&display=swap"
        />
      </head>
      <body className={`${fraunces.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
