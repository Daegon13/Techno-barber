# Techno Barber — instrucciones para Codex

## Alcance y procedencia

- Adaptación comercial PRIVADA para Techno Barber, Centro de Montevideo.
- Base obligatoria: Daegon13/Barberia_demo. Conservar Astro + Tailwind + TypeScript, cinco rutas y componentes reutilizados. No generar otro proyecto ni migrar de framework.
- Aplicación en `barber-demo/`. Ejecutar npm allí, no en la raíz.
- No modificar ni hacer push al repositorio original. Nunca conectar su proyecto de Vercel ni copiar secretos.
- El secundario Daegon13/barber-premium-prospect-demo no fue inspeccionado. No atribuirle ventajas ni mezclarlo sin comprobar una mejora concreta.

## Leer primero

Leer `docs/00-estado-y-siguiente-paso.md`, `docs/02-fuentes-y-contenido.md` y `docs/03-arquitectura-y-entrega.md`. La auditoría original es histórica; consultar sus detalles cuando haga falta, no repetir toda la investigación ni rehacer correcciones ya verificadas.

## Contenido

- Única fuente de contenido publicable: `barber-demo/src/data/barber.json`, con contrato en `src/lib/types.ts` y exportación tipada en `src/data/business.ts`.
- Datos sin respaldo quedan null/ausentes; arrays vacíos ocultan módulos completos. Nunca inventar precios, duraciones, promociones, barberos, reseñas o reputación.
- No incluir fotos antiguas como local, equipo o trabajos de Techno Barber. No crear imágenes de supuestos resultados reales.
- Catálogo inicial prudente: Corte. Más servicios requieren evidencia. `destacado` es una decisión editorial, no una afirmación de popularidad.
- No publicar horarios hasta resolver la diferencia 19:30/20:00.
- Fotos y reseñas nuevas deben tener URL de origen registrada. Mantener documentación de procedencia fuera de public.

## Producto

- Objetivo: llevar a una consulta de turno por WhatsApp con fricción mínima. No prometer reservas confirmadas ni disponibilidad real.
- CTA principal: Reservar turno. Secundario: Ver servicios. Acceso persistente móvil.
- Mantener todas las páginas: Home, Servicios, Galería, Turnos y Ubicación. Equipo condicional.
- Home: Hero → servicios → trabajos → confianza/reputación verificable → equipo opcional → ubicación → CTA final.
- WhatsApp funciona sin fecha ni hora. Preferencias opcionales, por servicio; confirmación por el negocio. No agregar campos personales innecesarios.
- Mensajes centralizados en `src/lib/whatsapp.ts`; número publicado 59897097636. Abrir enlace no implica enviar mensaje. No enviar pruebas al negocio.

## Técnica y privacidad

- Preservar lockfile y dependencias salvo necesidad concreta. Mantener salida estática; no backend o calendario ficticio.
- Scripts cliente procesados por Astro, nunca importar TypeScript con ?url. Query de servicio leída en cliente por id estable.
- `SITE_URL` debe corresponder únicamente al nuevo origen HTTPS. Sin dominio inventado ni canonical al original.
- Todas las rutas con noindex, nofollow, noarchive. OG conceptual nuevo cuando exista arte aprobado; no reutilizar arte anterior.
- Acceso privado se configura en hosting; no anunciarlo activo antes de comprobarlo.
- Mantener aviso discreto de propuesta independiente. No publicar datos estructurados de sitio oficial.

## Forma de trabajo

Trabajar por los dos prompts de continuación. Completar cada etapa autorizada con criterio propio; no pedir confirmación por detalles reversibles. Respetar los puntos de revisión visual que pidió el usuario. Reportar qué quedó hecho, qué sigue pendiente y evidencia de pruebas, sin presentar la base como demo final.

Validación mínima: npm run check, npm run build, npm run verify; comprobar enlaces, preselección, datos ausentes y experiencia móvil en la etapa visual. La ausencia de activos reales no autoriza inventarlos.
