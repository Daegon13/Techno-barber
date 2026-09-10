# Techno Barber — base de desarrollo

Derivada de Daegon13/Barberia_demo. Esta es una base saneada y funcional para continuar con Codex, no la demo visual final. El repositorio original no fue modificado. No se creó ni conectó un repositorio remoto o despliegue.

## Inicio rápido

1. Crear en GitHub un repositorio **privado e independiente**, sugerido: `Daegon13/techno-barber-demo`.
2. Descomprimir este paquete y subir **el contenido** de la carpeta `techno-barber-demo`, conservando la estructura. No subir el ZIP como único archivo del repositorio.
3. Conectar ese repositorio nuevo al entorno de Codex. El archivo `AGENTS.md` se aplica desde la raíz.
4. Usar el prompt 1 de `docs/04-prompts-codex.md`. Revisar la experiencia móvil y continuar con el prompt 2 del mismo documento.

No hace falta subir primero la versión anterior. Este paquete ya conserva su arquitectura y documenta la procedencia.

## Desarrollo local

Desde `barber-demo/`:

```bash
npm ci
npm run dev
```

Comprobaciones antes de entregar:

```bash
npm run check
npm run build
npm run verify
```

`verify` inspecciona la salida estática y no sustituye las pruebas de interacción móvil. No envía mensajes ni contacta al negocio.

## Documentación

- `AGENTS.md`: reglas persistentes de implementación.
- `docs/00-estado-y-siguiente-paso.md`: qué está hecho y qué falta.
- `docs/01-auditoria-original.md`: investigación y diagnóstico de la base anterior; es contexto histórico, no una lista de defectos aún presentes.
- `docs/02-fuentes-y-contenido.md`: registro de evidencia y política de datos ausentes.
- `docs/03-arquitectura-y-entrega.md`: archivos, decisiones, despliegue y criterios de cierre.
- `docs/04-prompts-codex.md`: dos instrucciones de continuación completas.
- `docs/05-validacion.md`: comprobaciones realizadas a este paquete.
- `docs/06-cambios-desde-base.md`: trazabilidad de la adaptación.

## Estado de privacidad

Se incluye `noindex, nofollow, noarchive` en HTML y `X-Robots-Tag` en `barber-demo/vercel.json`. **La protección de acceso todavía no está activada**: se configura en el proyecto Vercel nuevo. Noindex no hace privada una URL. Un repositorio privado tampoco hace privado su despliegue.

No hay secretos, credenciales, vínculo a proyectos anteriores ni automatización de producción. No hay agenda real, cobros ni envío automático de mensajes.
