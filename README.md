# luzar

Sitio premium de **Luzar Consultores** — despacho contable y fiscal en San Pedro Garza García, N.L.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript strict**
- **Tailwind CSS v4** + **shadcn/ui** (estilo new-york)
- **Framer Motion** (`motion`) — animaciones · **Lenis** — smooth scroll
- Componentes de efectos: **21st.dev** (Aceternity / MagicUI / motion-primitives)
- Deploy: **Vercel**

## Sistema de diseño

- Navy `#1B2F6E` + Verde `#3AB548` (brandbook oficial). Ver `design-system/luzar/MASTER.md`.
- Tipografía: **Clash Display** (titulares) + **General Sans** (cuerpo) vía Fontshare.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de producción (Webpack)
pnpm lint
```

## Estructura

```
src/
  app/          rutas (App Router)
  components/   componentes de UI y secciones
  lib/          utilidades (cn, etc.)
public/images/  imágenes premium del sitio
design-system/  sistema de diseño persistido (ui-ux-pro-max)
```

Copia `.env.example` → `.env.local` para variables locales.
