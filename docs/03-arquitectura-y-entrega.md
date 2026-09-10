# Arquitectura y entrega

## Mapa de implementación

- `barber-demo/src/pages/`: cinco rutas originales.
- `src/layouts/BaseLayout.astro`: shell, metadata conceptual, navegación y CTA.
- `src/components/`: Hero, ServiceCard, TurnosFlow, Header, Footer, StickyCTA, Section, SiteBackground, BarbersSection y Testimonials proceden de la base; LocationSection y GalleryGrid extraen contenido compartido.
- `src/data/barber.json`: contenido público; `business.ts`: contrato tipado; fuentes fuera de public.
- `src/scripts/turnos.ts`: selección por id desde query de cliente y preferencias opcionales.
- `src/lib/whatsapp.ts`: mensaje, validación del teléfono y formato monetario.
- `scripts/verify-build.mjs`: guardas de salida comercial.

No existe backend, agenda compartida ni confirmación automática. No añadirlos para completar el diseño. Los horarios de atención no son disponibilidad de turnos.

## Nuevo Vercel

1. Importar solamente el nuevo repositorio privado.
2. Root Directory: `barber-demo`. Framework: Astro. Install: `npm ci`. Build: `npm run build`. Output: `dist`.
3. Crear/proteger el proyecto antes de compartirlo. Verificar las opciones de Deployment Protection disponibles para la cuenta y asegurar protección en el dominio que se vaya a usar. Probar acceso sin sesión.
4. Definir `SITE_URL` con el origen HTTPS real de esta demo y reconstruir. Nunca apuntar al dominio de otra barbería.
5. `vercel.json` aplica X-Robots-Tag; verificar cabeceras y meta en todas las rutas del despliegue.
6. Añadir imagen OG nueva y `media.og` solo cuando exista un archivo válido. Los previews de WhatsApp pueden no acceder a un despliegue protegido; privacidad tiene prioridad.
7. Preparar la sesión de acceso del teléfono antes de la visita presencial. No suponer que una URL no indexada está protegida.

Referencias: https://vercel.com/docs/deployment-protection y https://docs.astro.build/en/guides/deploy/vercel/ . Revisar opciones vigentes al desplegar.

## Recorrido de 30–60 segundos

Identidad (0–8 s) → servicio (8–20 s) → trabajos reales (20–32 s) → confianza verificable y ubicación (32–42 s) → WhatsApp con mensaje contextual (42–60 s). No hace falta enviar el mensaje en la presentación.

## Criterios de cierre

- Cero nombres, teléfono, fotos o testimonios de la marca anterior en fuente publicable o dist.
- Cinco rutas directas sin 404. Sin errores de consola, scripts TypeScript crudos o imágenes rotas.
- Un h1 por página, foco visible, navegación móvil y CTA accesibles; 360, 390 y 430 px sin scroll horizontal.
- WhatsApp funciona sin fecha; servicio se conserva desde tarjeta; fecha pasada no se envía; enlace de teléfono y mapa correctos.
- No muestra precios 0/NaN ni secciones vacías al faltar evidencia.
- Imagen hero móvil optimizada si existe; galería real con procedencia; ausencia de afirmaciones no respaldadas.
- Meta/cabeceras noindex, nofollow, noarchive; OG conceptual; protección real comprobada antes de llamar privada a la entrega.
- Reportar resultados y límites de QA. No prometer Lighthouse, rendimiento o conversiones sin medirlos.
