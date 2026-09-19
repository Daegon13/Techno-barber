# AGENTS.md

Instrucciones obligatorias para agentes de código que trabajen en este repositorio.

## Contexto del proyecto

Este repositorio contiene una demo privada de prospección para barberías premium, basada en una plantilla Astro/Tailwind existente. La demo busca mostrar una capa de marca, conversión y retención encima de una agenda externa ya existente.

La prioridad es crear una demo visual y comercialmente convincente, no construir un SaaS completo.

## Objetivo del agente

Implementar cambios pequeños, seguros y revisables que adapten la plantilla existente a una demo de prospección para una barbería premium.

## Reglas técnicas

- Mantener Astro + Tailwind + TypeScript.
- No migrar framework.
- No agregar backend.
- No agregar base de datos.
- No agregar autenticación.
- No agregar pagos.
- No agregar dependencias pesadas sin justificación.
- No cambiar el gestor de paquetes si existe `package-lock.json`.
- No tocar archivos de build/deploy generados.
- No agregar archivos binarios nuevos.
- No commitear capturas, previews, ZIPs, `.vercel`, `dist`, `.astro` ni `node_modules`.

## Archivos que NO deben modificarse ni agregarse

No modificar ni versionar:

```txt
.vercel/
.vercel/output/
dist/
.astro/
node_modules/
preview.png
screenshots/
*.zip
*.mp4
*.mov
*.webm
```

Si ya existen en el repo, proponer eliminarlos del control de versiones en un patch de limpieza.

## Reglas de diseño y contenido

- No usar fotos reales del negocio sin autorización.
- No copiar logos reales salvo que el usuario entregue el asset.
- Usar imágenes genéricas o placeholders existentes.
- Incluir aviso de demo conceptual no oficial.
- Mantener `noindex` mientras la demo sea de prospección.
- No inventar reseñas reales.
- No afirmar que la demo reemplaza el sistema actual de reservas.
- Posicionar la demo como capa de marca/conversión encima del sistema actual.

## Reglas de implementación

- Priorizar mobile-first.
- Centralizar datos editables en `src/data/barber.json` o archivo equivalente.
- Mantener componentes simples.
- Evitar duplicar strings de negocio en muchos archivos.
- Actualizar metadatos SEO y Open Graph, pero con `noindex`.
- Verificar que no queden referencias visibles a la marca base anterior.
- Verificar que los CTAs funcionen.

## Checklist antes de cerrar un patch

- `npm run build` pasa.
- No hay archivos binarios nuevos.
- No hay cambios en `.vercel/output`, `dist`, `.astro` o `node_modules`.
- No quedan textos genéricos tipo "Lorem ipsum", "NOIR" o "mock" visibles de forma descuidada.
- La demo se ve correctamente en mobile.
- WhatsApp abre con un mensaje razonable.
- La agenda externa se respeta como opción secundaria o complementaria.
- El footer incluye aviso de demo conceptual.
