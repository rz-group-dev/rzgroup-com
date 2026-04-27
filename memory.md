# Memory — rzgroup.com

## Objetivo
Inspeccionar el sitio rzgroupsas.com y crear páginas nuevas según lo que apruebe el usuario.

## Sitio inspeccionado
- URL: https://rzgroupsas.com/
- Modelo de negocio: Agencia de transporte VIP y seguridad privada de alto perfil. Operan en Colombia (Bogotá) y EE.UU. (Nueva York). 10 años de experiencia. Clientes: turistas premium, empresas, embajadas, celebridades, family offices.
- Idiomas: Bilingüe ES / EN
- Rutas existentes:
  - `/` — Homepage con hero, indicadores (10 años, 10 ciudades, 1000+ clientes, 24/7), servicios, flota, CTA
  - `/transporte-luxury` — Servicio con conductores profesionales y vehículos de última generación
  - `/transporte-confort` — Conductor a nivel mundial (tier inferior al Luxury)
  - `/transporte-aereo` — Helicópteros y jets privados
  - `/seguridad-privada` — Guardaespaldas con entrenamiento militar; subcategorías: Security Drivers, Personal Bodyguards, VIP Protection
  - `/contactanos` — Formulario / datos de contacto

## Estilo visual observado
- Marca premium/luxury; tono serio y confiable
- Componentes recurrentes: hero (headline + CTA), service cards, vehicle carousel/grid, FAQ accordion, contact block doble (Bogotá + Nueva York)
- Nav: sticky header con dropdown Transporte, toggle de idioma EN/ES
- Footer: multi-columna con links de servicios, contacto, política de datos, cookies
- Vehículos de flota: Chevrolet Tahoe Z71, Mercedes Sprinter, Ford Explorer, Toyota TXL, Ford Expedition

## Identidad de marca
- Color primario: vino/borgoña — oklch(0.42 0.14 12)
- Color secundario: verde militar — oklch(0.32 0.05 145)
- Gris oscuro: oklch(0.38 0 0) | Gris claro: oklch(0.72 0 0)
- Fuente cuerpo: Jost (equivalente a Avenir Light) — Google Fonts
- Fuente display "RZ": Valorant (renderizado en CSS con tracking-widest + bold)
- Logo: ›RZ GROUP / Exclusive Transportation S.A.S.

## Codebase
- Stack: Next.js App Router + Tailwind + shadcn/ui + TypeScript + react-i18next
- Repo: https://github.com/diego-martinez-dev/rzgroup-com (privado)

## Decisiones tomadas
- CLAUDE.md y memory.md inicializados (2026-04-27)
- Inspección del sitio en vivo completada (2026-04-27)
- Repo GitHub creado y stack base instalado (2026-04-27)
- globals.css con tema luxury dark y paleta de marca real (2026-04-27)
- Navbar (sticky, dropdown Transporte, toggle ES/EN, mobile hamburger) (2026-04-27)
- Footer (4 columnas: logo+tagline, servicios, Bogotá, Nueva York) (2026-04-27)
- Fuente Jost (Avenir equivalente) configurada como --font-sans

## Pendientes
- Homepage (hero, stats, servicios, flota, CTA)
- Páginas de servicio: /transporte-luxury, /transporte-confort, /transporte-aereo
- /seguridad-privada
- /contactanos
