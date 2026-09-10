# Estado al preparar el paquete

Fecha: 10 de septiembre de 2026.

## Hecho

- Copia independiente de la base, conservando carpeta barber-demo y cinco rutas Astro.
- Fuera del paquete: imágenes/ZIP anteriores, salida .vercel, capturas, starter sin uso y workflow que desplegaba producción en push.
- Contenido saneado; marca Techno Barber; teléfono, dirección e Instagram respaldados por fuentes públicas registradas.
- Contrato tipado sin casts unknown; precio/duración opcionales; horarios null y equipo/reseñas/galería vacíos.
- Hero y CTA utilitarios con los labels pedidos; navegación móvil accesible con details.
- ServiceCard enlaza a WhatsApp contextual y /turnos?servicio=corte.
- TurnosFlow conserva la ruta y propósito, sin modal obligatorio ni horarios simulados. Preferencias opcionales; script compilado; preselección en cliente; fecha mínima de Montevideo.
- Ubicación compartida en home y ruta; enlace público de navegación. Galería enlaza a Instagram cuando faltan imágenes propias.
- Meta robots, cabeceras de exclusión, aviso conceptual, canonical/OG sin dominio ficticio.
- Salida dist estática para Vercel. Dependencia del adaptador anterior retenida para minimizar cambios, pero no se usa: no hay servidor que adaptar.

## Pendiente — no confundir con funcionalidad terminada

- Diseño comercial fotográfico de alto impacto. La estética actual es una base neutral, no la identidad visual final.
- Inspección visual actual del Instagram/logo y activos reales. No se incluyen imágenes del negocio aún.
- Catálogo completo, precios/duraciones, horarios resueltos y equipo si se consiguen fuentes.
- Reputación numérica y citas verificables; mientras tanto solo confianza por presencia pública.
- OG con imagen nueva; hoy se omite og:image para no incluir arte falso. El título y descripción sí son conceptuales.
- Revisión real de interacciones y diseño móvil; no se hizo sesión de navegador en esta preparación.
- Creación del repo en GitHub, conexión del nuevo Vercel, SITE_URL y protección de acceso. No se hicieron operaciones remotas.

## Próxima acción

Subir esta base a un repositorio privado independiente y ejecutar el prompt 1 de docs/04-prompts-codex.md. Al revisar la primera demo visual, ejecutar el prompt 2. No repetir la fase de neutralización completa desde cero: verificar el trabajo existente y avanzar.
