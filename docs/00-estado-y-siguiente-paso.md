# Estado de la demo comercial

Fecha: 16 de septiembre de 2026.

## Hecho

- Los tres activos conceptuales se trasladaron al `public` servido por Astro: hero de herramientas, imagen ilustrativa del servicio Corte y portada Open Graph. `barber.json` es ahora la única fuente de sus rutas.
- Hero fotográfico de alto impacto con marca, propuesta, dirección y dos CTA; el recorte móvil prioriza las herramientas y conserva un gradiente de contraste.
- Corte se presenta como único servicio respaldado, con imagen rotulada «Imagen ilustrativa», acceso contextual a WhatsApp y selección de preferencias; la consulta de otros servicios no crea categorías falsas.
- Trabajos dejó de ser un bloque vacío: ofrece una composición editorial y un acceso destacado al Instagram oficial, sin simular publicaciones, métricas ni clientes.
- Nueva sección «Del interés al turno»: explica el recorrido encontrar → elegir → abrir WhatsApp y muestra exactamente el mensaje de Corte que construye el flujo real, identificado como mensaje preparado.
- Ubicación, cierre de reserva, formulario de Turnos y las páginas interiores se elevaron al mismo sistema visual de superficies, profundidad, escala y jerarquía.
- El menú móvil se cierra al navegar o pulsar fuera. El CTA persistente conserva espacio inferior reservado en el layout.
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

- Inspección visual final en navegador real a 360, 390, 430 px y escritorio. El contenedor sigue sin navegador y el registro rechazó Playwright con HTTP 403; las comprobaciones de compilación, estructura y activos sí quedaron completas.
- El hero reutiliza el mismo WebP optimizado en móvil y escritorio porque es el único original entregado. Si se aprueba un encuadre móvil dedicado, incorporarlo sin reemplazar el original.
- Inspección visual actual del Instagram/logo y activos reales. No se copiaron publicaciones ni fotografías del negocio.
- Catálogo completo, precios/duraciones, horarios resueltos y equipo si se consiguen fuentes.
- Reputación numérica y citas verificables; mientras tanto solo confianza por presencia pública.
- Definir `SITE_URL` únicamente al crear el nuevo origen HTTPS; hasta entonces canonical, `og:url` y `og:image` se omiten deliberadamente aunque el activo OG ya está preparado.
- Creación del repo en GitHub, conexión del nuevo Vercel, SITE_URL y protección de acceso. No se hicieron operaciones remotas.

## Próxima acción

Hacer la revisión visual final en un navegador real a 360, 390, 430 px y escritorio. Después, configurar un repositorio/despliegue privado independiente y su `SITE_URL` siguiendo `docs/03-arquitectura-y-entrega.md`.
