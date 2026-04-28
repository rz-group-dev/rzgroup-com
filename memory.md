# Memory — rzgroup.com

## Objetivo
Construir y mejorar el sitio web de RZ Group SAS — empresa de transporte VIP y seguridad privada.

## Sitio
- URL producción: https://rzgroupsas.com/
- Repo: https://github.com/diego-martinez-dev/rzgroup-com (privado)
- Deploy: Vercel — push a `main` despliega automáticamente

## Modelo de negocio
Agencia de transporte VIP y seguridad privada de alto perfil. Clientes: turistas premium, empresas, embajadas, celebridades, family offices.

**Cobertura:** Estados Unidos, Puerto Rico, Colombia, México, Brasil y Argentina.

## Stack
Next.js App Router + Tailwind + shadcn/ui + TypeScript + react-i18next (ES/EN)

## Identidad de marca
- **Color primario:** vino/borgoña — `oklch(0.42 0.14 12)` / `#5b201f`
- **Color secundario:** verde militar — `oklch(0.32 0.05 145)`
- **Background página:** `#f9f9fe`
- **Colores oscuros:** `#070d0f` (casi negro), `#b1b0b0` (gris)
- **Fuente:** Jost (equivalente Avenir Light) — Google Fonts
- **Logo:** SVG vectorizado (texto convertido a paths) en `public/Logo.svg` — se muestra en blanco con `brightness-0 invert`

## Rutas existentes
- `/` — Homepage
- `/reservas` — Formulario de reservas (nuevo)
- `/transporte-luxury` — Transporte con conductores y vehículos de lujo
- `/transporte-confort` — Transporte confort
- `/transporte-aereo` — Helicópteros y jets privados
- `/seguridad-privada` — Guardaespaldas con entrenamiento militar
- `/renting-suv` — Renting de SUV
- `/contactanos` — Formulario y datos de contacto

## Estructura de la homepage (`src/app/page.tsx`)
1. `HeroSection` — imagen de fondo `public/images/hero/Homepage_image.svg`, overlay oscuro
2. `StatsSection` — fondo `#f9f9fe`, números en color primario: 10+ años, 6 países, 24/7
3. `ServicesSection` — fondo `bg-primary` (vinotinto), texto blanco, 6 servicios
4. `FleetSection` — Flota Luxury, fondo `#f9f9fe`, contenedores imagen `#ffffff`
5. `FleetComfortSection` — Flota Confort, fondo `#f9f9fe`, contenedores imagen `#ffffff`
6. `CoverageSection` — Mapa interactivo react-simple-maps, fondo `#f9f9fe`

## Flota Luxury (`public/images/fleet/`)
- Tahoe Z71, Tahoe LT, Cadillac Escalade, Mercedes Benz E250, Sprinter Blindada, Toyota Blindada

## Flota Confort (`public/images/fleet/`)
- Renault Duster (`Duster.png`), Hyundai H1, Mercedes Vito, Mercedes Sprinter, Bus 40 Pax

## Header (NavbarClient)
- Fondo transparente → negro (`bg-black`) al hacer scroll
- Logo blanco (`brightness-0 invert`), tamaño 185×64px, header `h-24`
- Texto siempre blanco
- Orden: `Reserva Ahora` (CTA) → toggle `EN/ES`
- Dropdown "Nuestros servicios" con 5 links incluyendo Renting de SUV

## Footer
- Fondo `#070d0f`. Logo SVG en blanco (`brightness-0 invert`), tamaño 150×52px.
- Columnas: logo+tagline | Nuestras Redes (correo, Instagram, LinkedIn) | Bogotá | Nueva York
- Instagram: https://www.instagram.com/rzgroup_/
- LinkedIn: https://www.linkedin.com/company/rz-group-co
- Correo: reservas@rzgroupsas.com

## Mapa de cobertura (CoverageSection)
- Zoom y coordenadas aprobados — NO modificar sin permiso explícito
- Ver memory file: `project_rzgroup_coverage_map.md`

## Reglas de git
- `public/images/services/` está en `.gitignore` — archivos demasiado grandes para GitHub
- Las imágenes de `fleet/`, `hero/` y `stats/` sí van a git
- Antes de push: `du -sh public/images/**/*` para verificar tamaños
- Vercel requiere `.npmrc` con `legacy-peer-deps=true` por react-simple-maps (React 19)

## Decisiones técnicas
- Logo SVG: texto convertido a paths/outlines para evitar dependencia de fuentes en producción
- Imágenes de flota: SVGs con PNG embebido (~700KB-1.5MB c/u). Usar `bg-[#ffffff]` en contenedor para que los elementos blancos sean visibles.
- Lazy loading: imágenes de flota solo cargan al entrar al viewport — en puppeteer/headless hay que hacer scroll antes de capturar.
- Caché del navegador: probar cambios en ventana incógnita

## Página de reservas (`/reservas`)
- `src/app/reservas/page.tsx` + `src/components/reservas/BookingForm.tsx`
- Servicios: Transporte Luxury, Confort, Aéreo, Seguridad Privada, Rent a Car
- Luxury y Confort desplegan dropdown de vehículo
- Modalidad (Transfer/Horas) solo para Luxury, Confort y Aéreo
- "Hotel o dirección de inicio" siempre visible en sección 3
- "Número de vuelo" solo si modalidad = Transfer Aeropuerto
- Sin integración backend — muestra estado de éxito al enviar

## Pendientes
- Integración backend para formulario de reservas (email o CRM)
- Páginas de servicio individuales: /transporte-luxury, /transporte-confort, /transporte-aereo, /seguridad-privada, /renting-suv
- /contactanos — formulario funcional
