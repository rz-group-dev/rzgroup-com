# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev          # servidor de desarrollo en localhost:3000
npm run build        # verifica tipos y build completo (tsc está roto en node_modules, usar build)
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

### Navbar
- Fondo transparente → negro al hacer scroll (`isScrolled`)
- En rutas con fondo claro (`OPAQUE_ROUTES`: `/reservas`, `/contactanos`), el fondo es negro desde el inicio via `usePathname()`
- "Reserva Ahora" → `/reservas` | "Contáctanos" → `/contactanos`

### Página de reservas (`/reservas`)
- Componente: `src/components/reservas/BookingForm.tsx`
- Fondo `#f9f9fe`, 4 secciones numeradas
- Sección 1: Fecha, País, Ciudad (ciudad dinámica por país)
- Sección 2: Tipo de servicio (dropdown) → si es Luxury o Confort, aparece dropdown de vehículo
- Sección 3: N° personas, Modalidad (Transfer/Horas — solo para Luxury/Confort/Aéreo), Hotel o dirección de inicio (siempre), N° de vuelo (solo Transfer Aeropuerto)
- Sección 4: Nombre, Email, Teléfono, Notas
- Submit: POST a `/api/reservas` → Resend → email HTML. `RESEND_API_KEY` en Vercel env vars.

### Páginas de servicio
Patrón estándar en `src/components/services/<Nombre>Page.tsx`:
1. Hero — `min-h-screen bg-[#070d0f]`, overlay `opacity-20` con `Homepage_image.svg`, texto blanco, CTA vinotinto
2. Descripción + features — `bg-[#f9f9fe]`, grid 2 cols (texto izq, features der)
3. Flota o modalidades — `bg-white` o `bg-[#f9f9fe]`
4. CTA final — `bg-primary` (vinotinto), botón blanco → `/reservas`

Páginas construidas: `/transporte-luxury`, `/transporte-confort`, `/seguridad-privada`, `/rent-a-car`
Pendientes: `/transporte-aereo`, `/contactanos`

### Terminología
- "Rent a Car" (no "Renting de SUV") — actualizado en nav, ServicesSection y traducciones
- Ruta: `/rent-a-car` (no `/renting-suv`)

### Git / Deploy
- Antes de push, verificar tamaño de imágenes nuevas: `du -sh public/images/**/*`
- Archivos mayores a 50 MB no van a GitHub — usar almacenamiento externo (Vercel Blob, Cloudinary)
- Si el push falla por archivos grandes: `git reset --soft HEAD~N` para reescribir los commits locales
- Probar cambios visuales en ventana incógnita (evita caché del navegador)
