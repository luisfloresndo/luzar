import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Luzar Consultores — Precisión que se ve en resultados. Consultoría contable y fiscal.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(weight: number) {
  const res = await fetch(
    `https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-${weight}-normal.ttf`,
  );
  return res.arrayBuffer();
}

function dataUri(relPath: string) {
  const buf = readFileSync(join(process.cwd(), relPath));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

export default async function Image() {
  const [f600, f400] = await Promise.all([loadFont(600), loadFont(400)]);
  const logoPlate = dataUri("public/logo-opt1-plate.png"); // logo full-color sobre placa
  const mono = dataUri("src/app/icon.png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 70px",
          background:
            "linear-gradient(135deg, #0A1331 0%, #0D1B44 58%, #142768 100%)",
          fontFamily: "Fraunces",
          position: "relative",
        }}
      >
        {/* Glow verde decorativo */}
        <div
          style={{
            position: "absolute",
            right: -150,
            top: -170,
            width: 540,
            height: 540,
            borderRadius: 9999,
            display: "flex",
            background:
              "radial-gradient(circle, rgba(58,181,72,0.26), rgba(58,181,72,0))",
          }}
        />
        {/* Monograma marca de agua */}
        <img
          src={mono}
          width={430}
          height={430}
          alt=""
          style={{
            position: "absolute",
            right: -20,
            bottom: -80,
            opacity: 0.08,
          }}
        />

        {/* Logo original (full-color) sobre placa — membrete prominente */}
        <div style={{ display: "flex" }}>
          <img src={logoPlate} width={486} height={213} alt="Luzar" />
        </div>

        {/* Titular */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 70,
              lineHeight: 1.04,
              fontWeight: 600,
              color: "#F4F6FC",
              letterSpacing: "-0.02em",
              maxWidth: 860,
            }}
          >
            <span>Precisión&nbsp;que&nbsp;se&nbsp;</span>
            <span style={{ color: "#4FD96A" }}>ve&nbsp;</span>
            <span>en&nbsp;resultados.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 400,
              color: "rgba(244,246,252,0.66)",
              marginTop: 22,
              maxWidth: 740,
            }}
          >
            Consultoría contable y fiscal · Más de 25 años en el noreste de
            México.
          </div>
        </div>

        {/* Pie */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#3AB548",
              color: "#06122E",
              fontSize: 25,
              fontWeight: 600,
              padding: "9px 26px",
              borderRadius: 9999,
            }}
          >
            luzar.com.mx
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 23,
              color: "rgba(244,246,252,0.5)",
            }}
          >
            Contabilidad · Fiscal · Nómina · Legal · Trámites
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: f600, weight: 600, style: "normal" },
        { name: "Fraunces", data: f400, weight: 400, style: "normal" },
      ],
    },
  );
}
