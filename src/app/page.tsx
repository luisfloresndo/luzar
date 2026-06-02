export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-green-dark">
        Setup completo · Next.js 15 + Tailwind v4
      </span>
      <h1 className="font-display text-5xl font-semibold text-navy sm:text-7xl">
        Luzar Consultores
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Soluciones contables y fiscales con precisión que impulsa tu negocio.
        Esqueleto listo — implementación de secciones en la siguiente fase.
      </p>
      <div className="mt-4 flex items-center gap-3">
        <span className="h-3 w-12 rounded-full bg-navy" />
        <span className="h-3 w-12 rounded-full bg-green" />
        <span className="h-3 w-12 rounded-full bg-navy-deep" />
      </div>
    </main>
  );
}
