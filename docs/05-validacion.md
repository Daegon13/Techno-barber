# Validación de la demo comercial

Fecha: 11/09/2026.

- Instalación de dependencias finalizada y lockfile actualizado con @astrojs/check. Nombre del paquete independiente.
- `npm run check`: 28 archivos, 0 errores, 0 advertencias y 0 hints tras retirar un import sin uso detectado en la primera pasada.
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`: éxito; cinco páginas estáticas generadas. La telemetría opcional se desactivó para no depender de red durante el build.
- `npm run verify`: éxito; cinco rutas, un h1 por página, robots restrictivo, WhatsApp correcto, activos referenciados existentes, ningún script .ts entregado y ausencia de marca anterior en dist.
- Equipo, precios/duración, reseñas y galería vacíos no impiden compilar.
- Verificación manual de fuente y `dist`: cinco rutas, navegación móvil, teléfono, Waze, Instagram, WhatsApp de reservas y contacto comercial de Diego presentes; no se publican horarios, precios, duración, reseñas o equipo.
- `/turnos?servicio=corte` coincide con una opción estable; parámetros desconocidos no seleccionan una opción y conservan la consulta general. Una fecha anterior al mínimo de Montevideo muestra error y se omite del mensaje; todos los campos pueden quedar vacíos.
- Los tres activos conceptuales solicitados no estaban presentes entre los archivos accesibles. No se crearon sustitutos ni rutas de imagen ficticias; por eso no hay `og:image` todavía.
- Código original del ZIP conservado sin modificación en esta sesión; solo se adaptó la copia nueva.
- Paquete sin node_modules, dist, .astro, .vercel, .git, secretos o workflow de despliegue.

No realizado: envío de mensajes, pruebas del WhatsApp activo, medición Lighthouse, despliegue, activación de protección de acceso o comprobación del dominio real. No se declara privacidad de hosting activa.

La QA con navegador y capturas en 360, 390, 430 px y escritorio no pudo ejecutarse en este contenedor: no hay Chromium, Chrome, Firefox, Playwright ni Puppeteer instalados, y `npx --yes playwright@1.55.0 install chromium` fue bloqueado por el registro npm con HTTP 403. Debe repetirse esa comprobación en un entorno con navegador antes de presentar la demo.

El build informa una base de Browserslist antigua. No impide compilar; no se amplió esta preparación con actualizaciones generales de dependencias.
