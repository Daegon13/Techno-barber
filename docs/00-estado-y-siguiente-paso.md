# Estado de la demo comercial

Fecha: 11 de septiembre de 2026.

## Hecho

- Dirección visual comercial implementada en negro, blanco y acero: tipografía editorial, composición de gran escala, ritmo de secciones y controles adaptados a móvil.
- Recorrido breve completo en Home: hero, servicio respaldado, acceso a trabajos reales, confianza verificable, ubicación y cierre de conversión.
- Cinco páginas revisadas con encabezados y contenido propio; navegación compacta y CTA persistente en móvil.
- Flujo de turnos presenta claramente campos opcionales, vista previa y confirmación posterior por el local.
- Pie con contacto comercial de Diego claramente separado del contacto de reservas.

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

## Pendientes concretos

- No se encontraron en el repositorio ni en los adjuntos accesibles los tres archivos conceptuales indicados: herramientas para hero, corte en proceso y portada «Techno Barber — Propuesta conceptual — Centro de Montevideo». La demo usa composiciones abstractas en CSS sin atribuirlas al negocio; `barber.json` mantiene `media` vacío y no hay referencias rotas.
- Cuando estén disponibles, optimizar y guardar esos tres originales en `barber-demo/public/images/techno/`, generar variantes responsive del hero y corte, y configurar la portada como `media.og`. No recortar el texto de la portada.
- Inspección visual actual del Instagram/logo y activos reales. No se copiaron publicaciones ni fotografías del negocio.
- Catálogo completo, precios/duraciones, horarios resueltos y equipo si se consiguen fuentes.
- Reputación numérica y citas verificables; mientras tanto solo confianza por presencia pública.
- OG con la portada proporcionada; hoy se omite `og:image` porque ese archivo no estuvo accesible. El título y descripción sí son conceptuales.
- Capturas y revisión en navegador real quedaron limitadas por el entorno: no había navegador instalado y la descarga de Playwright fue rechazada por el registro (HTTP 403). La revisión programática sí se completó.
- Creación del repo en GitHub, conexión del nuevo Vercel, SITE_URL y protección de acceso. No se hicieron operaciones remotas.

## Próxima acción

Incorporar los tres activos conceptuales originales y hacer la revisión visual final en un navegador real a 360, 390, 430 px y escritorio. Después, configurar un repositorio/despliegue privado independiente siguiendo `docs/03-arquitectura-y-entrega.md`.
