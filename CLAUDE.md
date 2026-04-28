# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev          # servidor de desarrollo en localhost:3000
npx tsc --noEmit     # verificar tipos antes de reportar como terminado
```

> Deploy: push a `main` despliega automáticamente en Vercel. No se necesita comando manual.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js App Router — páginas en `src/app/<ruta>/page.tsx` |
| UI | Tailwind + shadcn/ui + TypeScript |
| Íconos | `@heroicons/react/24/outline` |
| i18n | `react-i18next` — claves en `src/locales/es.json` y `src/locales/en.json` |
| Deploy | Vercel |

---

## Marca

- **Color primario:** vino/borgoña — `oklch(0.42 0.14 12)` / `#5b201f`
- **Background:** `#f9f9fe`
- **Oscuro base:** `#070d0f`
- **Logo:** `public/Logo.svg` — SVG con texto en paths (sin fuentes). Se renderiza en blanco con `className="brightness-0 invert"`.

---

## Arquitectura de la homepage

```
HeroSection          → src/components/home/HeroSection.tsx
StatsSection         → src/components/home/StatsSection.tsx
ServicesSection      → src/components/home/ServicesSection.tsx
FleetSection         → src/components/home/FleetSection.tsx         (Luxury)
FleetComfortSection  → src/components/home/FleetComfortSection.tsx  (Confort)
CoverageSection      → src/components/home/CoverageSection.tsx      (Mapa interactivo)
```

Navbar y Footer en `src/components/layout/`.

## Decisiones de diseño (homepage)

- **ServicesSection** — fondo `bg-primary` (vinotinto), texto blanco. Grid separado con `bg-white/10`. Hover `bg-white/10`.
- **FleetSection (Luxury)** — fondo `bg-[#f9f9fe]`, contenedores de imagen `bg-[#ffffff]`. Texto oscuro.
- **FleetComfortSection** — fondo `bg-[#f9f9fe]`, contenedores de imagen `bg-[#ffffff]`. Texto oscuro.
- **CoverageSection** — fondo `bg-[#f9f9fe]`, mapa con `react-simple-maps`. Países cubiertos en vinotinto (`#5b201f`), seleccionado en `#3d1515`. Pins y labels de ciudades con escala inversa al zoom (`scale(1/zoom)`).
- **Footer** — fondo `#070d0f`. Logo SVG en blanco. Columnas: logo+tagline, Nuestras Redes (correo/Instagram/LinkedIn), Bogotá, Nueva York.
- Imágenes de flota: SVGs con PNG embebido. Necesitan `bg-[#efefef]` o `bg-[#ffffff]` para verse — fondo blanco hace invisibles los elementos blancos del SVG.
- Para screenshots en headless (puppeteer): hacer scroll por la página antes de capturar para activar lazy loading.

---

## Reglas de arquitectura

### Componentes
- Server Component por defecto; `'use client'` solo si necesita hooks o eventos del DOM
- Texto visible al usuario siempre vía `t('clave')` — nunca hardcodeado
- Al agregar texto nuevo: actualizar `src/locales/es.json` **y** `src/locales/en.json`

### Imágenes
- Imágenes de flota, hero y stats van en `public/images/` y se commitean a git
- `public/images/services/` está en `.gitignore` — los archivos son demasiado grandes (>50 MB)
- Imágenes de flota usan `fill` + `object-contain` + `p-4`
- SVGs de fondo de sección: usar CSS `background-image` en el `<section>` en lugar de `<Image fill>` de Next.js

### Internacionalización
- Siempre agregar claves nuevas a ambos archivos de idioma en paralelo
- Seguir la estructura existente de claves: `seccion.subseccion.clave`

### Git / Deploy
- Antes de push, verificar tamaño de imágenes nuevas: `du -sh public/images/**/*`
- Archivos mayores a 50 MB no van a GitHub — usar almacenamiento externo (Vercel Blob, Cloudinary)
- Si el push falla por archivos grandes: `git reset --soft HEAD~N` para reescribir los commits locales
- Probar cambios visuales en ventana incógnita (evita caché del navegador)
