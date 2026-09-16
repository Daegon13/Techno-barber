# Validación de la demo comercial

Fecha: 16/09/2026.

- Instalación de dependencias finalizada y lockfile actualizado con @astrojs/check. Nombre del paquete independiente.
- `npm run check`: 29 archivos, 0 errores, 0 advertencias y 0 hints.
- `npm run build`: éxito; cinco páginas estáticas generadas y scripts de cliente procesados.
- `npm run verify`: éxito; cinco rutas, un h1 por página, robots restrictivo, WhatsApp correcto, activos referenciados existentes, ningún script .ts entregado y ausencia de marca anterior en dist.
- Equipo, precios/duración, reseñas y galería vacíos no impiden compilar.
- Verificación manual de fuente y `dist`: cinco rutas, navegación móvil, teléfono, Waze, Instagram, WhatsApp de reservas y contacto comercial de Diego presentes; no se publican horarios, precios, duración, reseñas o equipo.
- `/turnos?servicio=corte` coincide con una opción estable; parámetros desconocidos no seleccionan una opción y conservan la consulta general. Una fecha anterior al mínimo de Montevideo muestra error y se omite del mensaje; todos los campos pueden quedar vacíos.
- Hero, servicio y portada OG existen en `barber-demo/public/images/techno/`; el verificador confirmó que las referencias públicas resuelven en `dist`. Los originales dejaron de estar fuera del `public` de Astro.
- La imagen de Corte aparece únicamente como imagen del servicio y lleva la leyenda «Imagen ilustrativa»; Trabajos conserva galería vacía y deriva al Instagram oficial.
- La nueva sección de recorrido enlaza a `/turnos?servicio=corte` y su mensaje preparado coincide con `buildBookingMessage`: «Hola, quiero reservar un turno para Corte en Techno Barber. ¿Qué disponibilidad tienen?».
- Código original del ZIP conservado sin modificación en esta sesión; solo se adaptó la copia nueva.
- Paquete sin node_modules, dist, .astro, .vercel, .git, secretos o workflow de despliegue.

No realizado: envío de mensajes, pruebas del WhatsApp activo, medición Lighthouse, despliegue, activación de protección de acceso o comprobación del dominio real. No se declara privacidad de hosting activa.

La QA con navegador y capturas en 360, 390, 430 px y escritorio no pudo ejecutarse en este contenedor: no hay Chromium, Chrome, Firefox, Playwright ni Puppeteer instalados, y `npx --yes playwright@1.55.0 install chromium` volvió a ser bloqueado por el registro npm con HTTP 403. Se revisaron en fuente las restricciones de ancho (`min-width: 0`, `max-width: 100%`, `overflow-x: hidden`), los puntos de quiebre, el espacio inferior del CTA y los estados de foco, pero la inspección visual real sigue pendiente y no se presenta como aprobada.

El build informa una base de Browserslist antigua. No impide compilar; no se amplió esta preparación con actualizaciones generales de dependencias.
