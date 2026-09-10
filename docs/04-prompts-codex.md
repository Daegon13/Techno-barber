# Dos prompts para terminar la demo

Los dos prompts trabajan sobre este repositorio ya preparado. No subir primero el original. Leer AGENTS.md es parte de ambos.

## Prompt 1 — identidad, contenido y experiencia comercial

```text
Trabajá sobre el repositorio actual de Techno Barber. Leé AGENTS.md, docs/00-estado-y-siguiente-paso.md, docs/02-fuentes-y-contenido.md y docs/03-arquitectura-y-entrega.md. La aplicación está en barber-demo/. La auditoría original es histórica: la base ya está saneada y sus fallas esenciales fueron corregidas. No reinicies el proyecto, no migres Astro/Tailwind, no modifiques Daegon13/Barberia_demo y no crees otro repositorio.

Objetivo de esta etapa: completar una demo comercial fotográfica, urbana y excelente en móvil que convierta interés en consultas de turno por WhatsApp. Trabajá autónomamente hasta una versión revisable; resolvé detalles reversibles con criterio propio.

Primero inspeccioná solo el estado actual y comprobá los comandos de validación. Después cerrá la investigación pendiente sobre identidad visual, fotos de trabajos/local y catálogo actual usando las fuentes oficiales registradas. Documentá evidencia nueva en docs/02-fuentes-y-contenido.md. No repitas búsquedas ya resueltas sin motivo. No inventes imágenes del local/equipo ni testimonios, precios, duración, popularidad, promociones o servicios. No transformes snippets o directorios en reputación Google. Si una fuente no es accesible, avanzá con lo respaldado y señalá exactamente qué activo hace falta.

Adaptá los componentes existentes para esta home: Hero potente → CTA Reservar turno → servicios destacados verificados → trabajos reales → confianza/reputación verificable → equipo solo si corresponde → ubicación → CTA final. CTA secundario Ver servicios. Conservá las cinco páginas y los enlaces de WhatsApp contextuales ya implementados, con acceso persistente móvil. Mantener consulta sin fecha y preferencias opcionales, nunca una agenda con disponibilidad ficticia.

Elegí una dirección visual coherente con la marca real: contemporánea, fotográfica, contrastada y legible. No imponer dorado, vintage ni neón por el nombre. Podés usar nombre tipográfico provisional si no hay logo verificable. Nunca presentar fotos ilustrativas como trabajos propios. No introducir pantallas vacías para simular contenido completo; conservar enlace a Instagram cuando falten fotos reales.

Prepará una imagen Open Graph conceptual nueva coherente con el diseño, sin fotografías falsas del negocio; configurala solo si existe un archivo válido. Conservá el aviso independiente y restricciones de indexación. No desplegar durante esta etapa.

Revisá en navegador los tamaños 360, 390 y 430 px y escritorio, navegación, scroll, lectura, CTA y mensaje preseleccionado; esto autoriza la QA de navegador. Ejecutá npm run check, npm run build y npm run verify. Corregí defectos detectados. Actualizá docs/00-estado-y-siguiente-paso.md y docs/05-validacion.md con evidencia real y pendientes.

Al terminar, entregá la versión revisable y un resumen breve de cambios, validación y limitaciones. Este es el punto de revisión de la experiencia móvil antes del despliegue; no pedir aprobación por cada detalle de implementación.
```

## Prompt 2 — cierre, QA y preparación de entrega privada

```text
Continuá sobre la demo de Techno Barber ya desarrollada en este repositorio. Leé AGENTS.md y los documentos de estado/validación actualizados. Incorporá el feedback que acompaña este prompt, si lo hay. No reinicies ni rediseñes innecesariamente la web.

Completá la revisión final: fuente y dist sin contaminación anterior; cinco rutas directas; query de servicio válida e inválida; WhatsApp sin preferencias, con servicio y con fecha/franja; fechas pasadas; navegación móvil y teclado; botones visibles sin solapamiento; ausencia de precios/duración/equipo/reseñas sin respaldo; carga de imágenes y procedencia; un h1 por página; metadata conceptual correcta. Revisá navegador en 360/390/430 px y escritorio. No enviar mensajes reales al negocio. Ejecutá npm run check, npm run build y npm run verify. Medí rendimiento móvil si la herramienta está disponible y reportá condiciones/resultados sin inventar puntuaciones.

Prepará la entrega en un proyecto Vercel NUEVO e independiente con root barber-demo, build npm run build y output dist. No usar el workflow o proyecto del original. Configurá SITE_URL con el origen real, y verificá canonical/OG absolutos después de reconstruir. Mantené noindex, nofollow, noarchive tanto en HTML como cabeceras.

Si este entorno tiene acceso autorizado a Vercel y la cuenta permite proteger el despliegue, publicá la demo únicamente con protección real de acceso y comprobala sin sesión. Este prompt autoriza ese despliegue privado. Si faltan conexión, permisos u opciones de protección, completá todo lo local y entregá los pasos exactos pendientes; no publiques una URL abierta ni afirmes que noindex es privacidad. No modificar repositorios o despliegues ajenos.

Actualizá estado, validación y README con lo efectivamente realizado. Dejá una guía breve de presentación presencial de 30–60 segundos y el acceso que corresponda. Señalá si la protección impide la vista previa de WhatsApp. No considerar la demo terminada si falta contenido comercial esencial: indicá con precisión qué no pudo verificarse.
```
