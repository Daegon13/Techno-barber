# Implementation Plan

## Fase 0 — Limpieza del repositorio

Objetivo: dejar el repo listo para trabajar sin archivos generados ni basura de deploy.

Tareas:

- Verificar `.gitignore`.
- Eliminar `.vercel/` del control de versiones si existe.
- Eliminar `dist/`, `.astro/`, previews, screenshots y ZIPs del control de versiones.
- Mantener únicamente assets necesarios para la demo.
- Reemplazar README starter.
- Agregar `AGENTS.md`.
- Agregar documentación en `docs/`.

Criterio de aceptación:

- `git status` no muestra archivos generados.
- `npm install` funciona.
- `npm run build` funciona.
- El repo queda listo para el primer branch funcional.

## Fase 1 — Rebranding de datos

Objetivo: adaptar la fuente de datos central.

Archivos probables:

- `src/data/barber.json`
- `src/lib/whatsapp.ts`
- `src/scripts/turnos.ts`
- layouts/metadatos

Tareas:

- Cambiar nombre de marca.
- Cambiar dirección.
- Cambiar horarios.
- Cambiar servicios.
- Cambiar equipo.
- Cambiar mensajes de WhatsApp.
- Cambiar enlaces externos.
- Eliminar referencias residuales a la marca base anterior.

Criterio de aceptación:

- No quedan referencias visibles a la marca original.
- Los servicios y horarios están centralizados.
- Los CTAs usan la información nueva.

## Fase 2 — Adaptación visual

Objetivo: que la demo parezca una propuesta premium y no una plantilla reciclada.

Tareas:

- Ajustar hero.
- Ajustar paleta visual.
- Ajustar titulares.
- Reordenar secciones si hace falta.
- Mantener imágenes genéricas como placeholders.
- Evitar logos/fotos reales no autorizadas.
- Crear una narrativa de "estudio privado / experiencia premium / reserva previa".

Criterio de aceptación:

- Mobile se ve excelente.
- El hero comunica valor en menos de 3 segundos.
- La estética se siente premium, sobria y urbana.
- No hay placeholders obvios.

## Fase 3 — Capa de conversión

Objetivo: mostrar lo que la web aporta encima de la agenda actual.

Secciones sugeridas:

- "Convertí visitas en reservas".
- "Reservas por WhatsApp o agenda externa".
- "Reseñas post-servicio".
- "Recordatorios de retoque".
- "Clientes recurrentes".
- "Medición de clics y consultas".

Criterio de aceptación:

- La demo no compite agresivamente con Fresha.
- La demo explica el valor para el dueño.
- Hay CTA claro para WhatsApp y agenda externa.

## Fase 4 — Seguridad comercial y deploy

Objetivo: dejar la demo lista para compartir de forma privada.

Tareas:

- Agregar `noindex`.
- Agregar aviso de demo conceptual.
- Revisar title, description y OG.
- Validar links.
- Validar responsive.
- Ejecutar build.
- Preparar deploy privado o preview.

Criterio de aceptación:

- `npm run build` pasa.
- La demo no queda indexable.
- El footer aclara que es conceptual/no oficial.
- El link se puede enviar al lead sin vergüenza.
