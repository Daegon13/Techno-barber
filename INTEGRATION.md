# Integración requerida

1. Copiar `public/images/techno/` al mismo path dentro de `barber-demo/public/`.
2. Agregar las tres rutas a `src/data/barber.json` en `media`: `heroDesktop`, `heroMobile` (puede usar el mismo hero hasta crear un recorte dedicado) y `og`.
3. Asociar `service-corte-illustrative.webp` al único servicio confirmado (`Corte`), con alt que indique que es una imagen ilustrativa.
4. Actualizar Hero y ServiceCard para que el hero use la imagen sin ocultar el texto y la tarjeta incluya la etiqueta `Imagen ilustrativa`.
5. No añadir el servicio ni la imagen a la galería de trabajos. La galería sigue apuntando a Instagram hasta contar con fotos reales verificadas.
6. Ejecutar `npm run check`, `npm run build` y `npm run verify`. Verificar desktop y móvil, en especial el recorte del hero y el mensaje de WhatsApp.
