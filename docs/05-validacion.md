# Validación de la base empaquetada

Fecha: 10/09/2026. Esto valida la preparación técnica, no una demo visual final.

- Instalación de dependencias finalizada y lockfile actualizado con @astrojs/check. Nombre del paquete independiente.
- `npm run check`: 28 archivos, 0 errores, 0 advertencias y 0 hints.
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`: éxito; cinco páginas estáticas generadas. La telemetría opcional se desactivó para no depender de red durante el build.
- `npm run verify`: éxito; cinco rutas, un h1 por página, robots restrictivo, WhatsApp correcto, activos referenciados existentes, ningún script .ts entregado y ausencia de marca anterior en dist.
- Equipo, precios/duración, reseñas y galería vacíos no impiden compilar.
- Código original del ZIP conservado sin modificación en esta sesión; solo se adaptó la copia nueva.
- Paquete sin node_modules, dist, .astro, .vercel, .git, secretos o workflow de despliegue.

No realizado: navegador/QA visual móvil, envío de mensajes, pruebas del WhatsApp activo, medición Lighthouse, despliegue, activación de protección de acceso o comprobación del dominio real. No se declara privacidad de hosting activa.

El build informa una base de Browserslist antigua. No impide compilar; no se amplió esta preparación con actualizaciones generales de dependencias.
