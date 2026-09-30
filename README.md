# Armadura de Dios — Mini App

Mini app de compra única baseado en el manual "Cómo Activar la Armadura de Dios en el Día a Día".
React + Vite + TypeScript + Tailwind. Sin backend — todo el progreso se guarda en el propio celular
del usuario (localStorage).

## Cómo probarlo en tu computadora

```bash
npm install
npm run dev
```

Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

## Cómo publicarlo (sin VPS — GitHub + Netlify, como enseña el curso)

1. Crea un repositorio nuevo en GitHub y sube esta carpeta (`git init`, `git add .`, `git commit`, `git push`).
2. Entra a [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project" → conecta tu GitHub.
3. Configuración de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Netlify te da una URL (puedes personalizar el subdominio en Site settings).

Cada vez que subas un cambio a GitHub, Netlify vuelve a publicar automáticamente.

## Cómo editar el contenido (sin tocar código)

Todo el contenido que cambia con frecuencia está en `src/data/`:

- **`config.ts`** — el código de acceso que entregas a quien compra en Hotmart, y el nombre/tagline de la app.
- **`chapters.ts`** — el texto completo del libro, ya cargado con los 9 capítulos + introducción + conclusión.
- **`ritual.ts`** — los pasos del ritual diario (Capítulo 9).
- **`devotionals.ts`** — los devocionales diarios (30 por ahora). La app muestra uno distinto cada día y, al terminar la lista, vuelve a empezar. Para agregar más, copia un bloque al final de la lista.
- **`prayer.ts`** — las preguntas de reflexión que aparecen en la pantalla del devocional.
- **`biblePlan.json`** — el plan de lectura de la Biblia en 365 días (ya generado, no necesitas tocarlo).

## Sobre el código de acceso

Por ahora hay **un solo código compartido** (`ARMADURA2026` en `config.ts`) que se entrega a todos los
compradores — el más simple de implementar y de mandar por Hotmart (puedes ponerlo directo en el mensaje
de entrega del producto). Si más adelante quieres códigos distintos por comprador, `ACCESS_CODE` puede
convertirse en una lista y automatizarse con un webhook de Hotmart — pero eso ya requiere un backend
(Supabase, por ejemplo), que este proyecto no tiene a propósito, para mantenerlo simple y sin
mantenimiento continuo.

## Estructura

```
src/
  data/       contenido editable (capítulos, ritual, devocionales, plan bíblico, config)
  components/ piezas reutilizables de UI (banner, botones, iconos, checkbox…)
  screens/    las 6 pantallas del menú principal + detalle de capítulo
  hooks/      persistencia en localStorage
  utils/      cálculo de fechas, racha del ritual
  App.tsx     navegación y estado general
```
