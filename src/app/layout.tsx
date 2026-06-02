import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://luzar.com.mx"),
  title: {
    default: "Luzar — Consultoría Contable y Fiscal | San Pedro Garza García",
    template: "%s | Luzar Consultores",
  },
  description:
    "Despacho contable y fiscal en San Pedro Garza García. Contabilidad, planeación fiscal, nómina, jurídico y trámites con precisión para empresas y emprendedores.",
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
      "Soluciones contables y fiscales con precisión que impulsa tu negocio.",
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
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
