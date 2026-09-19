# Reuse Notes — Noir Barber Studio

## Base reutilizable

La base actual ya tiene una arquitectura útil para demos comerciales de barbería.

Componentes detectados:

- `src/components/Hero.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/ServiceCard.astro`
- `src/components/BarbersSection.astro`
- `src/components/TurnosFlow.astro`
- `src/components/StickyCTA.astro`
- `src/components/Testimonials.astro`
- `src/components/PriceCards.astro`
- `src/components/SiteBackground.astro`

Datos:

- `src/data/barber.json`

Lógica:

- `src/lib/whatsapp.ts`
- `src/scripts/turnos.ts`

Páginas:

- `src/pages/index.astro`
- `src/pages/servicios.astro`
- `src/pages/galeria.astro`
- `src/pages/ubicacion.astro`
- `src/pages/turnos.astro`

## Qué conservar

- Stack Astro/Tailwind.
- Componentización actual.
- Datos centralizados.
- Flujo de reserva demostrativo.
- Imágenes IA genéricas como placeholders, siempre que no agreguen peso innecesario.
- Páginas principales.
- Estética oscura como punto de partida.

## Qué cambiar

- Branding completo.
- Copy del hero.
- Servicios.
- Horarios.
- Dirección.
- Equipo.
- CTA principal.
- Mensajes de WhatsApp.
- Footer.
- Metadatos.
- Avisos legales/comerciales.
- Secciones orientadas a conversión y retención.

## Qué eliminar o ignorar

- `.vercel/output/`
- `dist/`
- `.astro/`
- `preview.png`
- ZIPs generados.
- Outputs temporales.
- Referencias a la plantilla inicial.
- Archivos starter innecesarios si no se usan.

## Riesgos detectados en la base

- README genérico de Astro.
- Archivos de deploy generados dentro del ZIP.
- Posibles imágenes o previews innecesarios.
- Branding residual.
- Paleta visual que puede sentirse más plantilla que identidad personalizada.
- Palabra "mock" potencialmente visible en UX comercial.

## Enfoque de reutilización

No convertir el proyecto en SaaS.

La plantilla debe evolucionar a un sistema reusable de prospección:

```txt
src/data/barber.json
src/components/*
src/pages/*
```

La idea es que futuras barberías puedan adaptarse tocando principalmente:

- datos;
- textos;
- enlaces;
- paleta;
- imágenes placeholder.
