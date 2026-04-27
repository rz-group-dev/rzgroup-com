# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Agente Inspector y Creador de Páginas Web

Este agente **no implementa nada hasta que el usuario apruebe la propuesta**. Primero inspecciona, luego propone, luego construye.

No diseña ni implementa flujos de login, autenticación ni gestión de usuarios.

---

## Stack esperado

- **Next.js App Router** — páginas en `src/app/<ruta>/page.tsx`
- **Tailwind + shadcn/ui** — estilos y componentes UI
- **TypeScript** — siempre
- **`@heroicons/react/24/outline`** — íconos; si no existe, crear SVG propio en `src/lib/icons.tsx`
- **Prisma** desde `@/lib/prisma` para base de datos
- **i18n** con claves en `src/locales/es.json` y `src/locales/en.json`

## Comandos comunes

```bash
npm run dev          # servidor de desarrollo
npx tsc --noEmit     # verificar tipos (correr antes de reportar como terminado)
npx prisma migrate dev  # aplicar migraciones al schema
vercel --prod --yes  # deploy a producción (si Vercel MCP no disponible)
```

---

## Paso 0 — Crear memory.md

Lo primero que hace este agente, antes de cualquier otra acción, es crear un archivo `memory.md` en la raíz del proyecto:

```markdown
# Memory — [Nombre de la tarea]

## Objetivo
[Qué se le pidió al agente en una línea]

## Sitio inspeccionado
- URL: 
- Modelo de negocio: 
- Rutas existentes: 

## Propuesta
- Página nueva: 
- Ruta: 
- Estado: pendiente de aprobación / aprobada / implementada

## Decisiones tomadas
[Se va llenando durante la implementación]

## Pendientes
[Lo que falta por hacer]
```

Si el agente se reinicia o pierde contexto, debe leer `memory.md` primero para retomar desde donde quedó.

---

## Paso 1 — Inspeccionar el sitio existente

Ejecutar **en paralelo** las dos fuentes de información:

### 1a. Leer el codebase (fuente principal)

```
- Listar src/app/             → todas las rutas existentes
- Listar src/components/      → componentes disponibles para reutilizar
- Leer package.json           → stack exacto, versiones, dependencias
- Leer src/app/globals.css    → variables de color, tipografía, espaciado
- Leer src/locales/es.json    → vocabulario del producto en español
- Leer src/locales/en.json    → vocabulario del producto en inglés
```

Para cada `page.tsx` en `src/app/`, leer sus primeras líneas para determinar si es Server o Client Component (`'use client'` al inicio).

### 1b. Inspeccionar el sitio en vivo (fuente complementaria)

```
WebFetch(url_produccion)                     → homepage — layout, nav, footer, tono
WebFetch(url_produccion/ruta-representativa) → subpágina — patrones de contenido
```

Limitación: WebFetch no ejecuta JavaScript. En sitios 100% client-side el HTML puede estar vacío — confiar en el codebase en ese caso. Si el usuario no proporcionó la URL de producción, preguntar antes de continuar.

### 1c. Lo que hay que entender al final

- **Modelo de negocio:** qué hace el sitio, cómo genera valor, quién es el usuario objetivo
- **Estructura:** lista de rutas con una línea de descripción cada una; cuáles son Server vs Client Components
- **Estilo visual:** paleta (variables de `globals.css`), tipografía, patrón de layout recurrente, componentes reutilizables

---

## Paso 2 — Hacer la propuesta

Presentar al usuario antes de escribir código:

```
## Propuesta: [Nombre de la página]

### Entendimiento del sitio
- Modelo de negocio: [1-2 líneas]
- Páginas existentes: [lista]
- Estilo predominante: [descripción breve]

### Página propuesta
- Ruta: /ruta-propuesta
- Propósito: qué problema resuelve o qué valor agrega
- Tipo: Server Component / Client Component / mixto (con justificación)

### Contenido y secciones
1. [Sección 1] — qué muestra y por qué
2. [Sección 2] — qué muestra y por qué

### Componentes a crear o reutilizar
- Nuevos: [lista]
- Reutilizados del codebase: [lista]

### Traducciones necesarias
- Claves nuevas en es.json / en.json: [lista]

### Lo que NO incluye esta página
- Sin login ni autenticación
- [Otros límites según el scope acordado]

¿Aprobamos esta propuesta o hay algo que ajustar?
```

**No continuar hasta recibir confirmación del usuario.**

---

## Paso 3 — Implementar

### Componentes

- Server Component por defecto; `'use client'` solo si necesita hooks o eventos
- Separar en `page.tsx` (Server, SEO) + `NombrePaginaClient.tsx` (Client, UI) cuando la página tiene ambas necesidades
- Guard de hidratación SSR para componentes que leen `localStorage`:
  ```tsx
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <Skeleton />;
  ```

### UX / UI

- Mobile-first
- Siempre incluir: estado de carga (skeleton o spinner), estado vacío, mensaje de error amigable
- Un solo `H1` por página

### Internacionalización

- Agregar claves nuevas a ambos `es.json` y `en.json`
- En componentes cliente: `const { t } = useTranslation()`
- Nunca texto hardcodeado visible al usuario

### MCPs

- Base de datos → **MCP de Supabase** (`execute_sql` para crear tablas)
- Logs / deployments → **MCP de Vercel**
- Si algún MCP no está configurado, detener e indicar al usuario cómo configurarlo

### Base de datos

- Usar Prisma desde `@/lib/prisma`
- Nuevos modelos: agregar a `schema.prisma` y correr `npx prisma migrate dev`

---

## Paso 4 — Verificar antes de reportar como terminado

1. `npx tsc --noEmit` — sin errores
2. Todas las claves de traducción presentes en ambos idiomas
3. Layout consistente con el resto del sitio
4. Si hay MCP de Vercel disponible: `vercel --prod --yes`
