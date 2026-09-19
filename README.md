# Barber Premium Prospect Demo

Demo privada de prospección para presentar una experiencia digital premium a barberías que ya reciben clientes desde redes sociales, Google y una agenda externa.

> **Aviso:** este proyecto es una demo conceptual no oficial. No debe publicarse ni presentarse como el sitio real de un negocio sin autorización expresa.

## Propósito

La propuesta muestra una capa de marca, conversión y retención que complementa el sistema de reservas existente. No busca reemplazar la agenda actual ni implementar un SaaS completo.

La demo debe comunicar:

- una presencia de marca propia y consistente;
- rutas claras desde redes y Google hacia una acción de contacto;
- reserva rápida por WhatsApp;
- acceso complementario a la agenda externa;
- ideas de reputación y seguimiento post-servicio;
- una experiencia mobile-first, estática y ligera.

## Stack

- Astro
- Tailwind CSS
- TypeScript
- npm, con versiones bloqueadas en `package-lock.json`

## Requisitos

- Node.js compatible con las dependencias declaradas en `package.json`.
- npm.

## Puesta en marcha

```bash
npm ci
npm run dev
```

El servidor de desarrollo informa la URL disponible al iniciar.

## Comandos

```bash
npm run dev      # desarrollo
npm run build    # compilación de producción
```

## Alcance

### Incluido

- adaptación de marca y contenido sobre la base existente;
- servicios, horarios, equipo y ubicación configurables;
- CTA principal a WhatsApp y enlace complementario a agenda externa;
- secciones conceptuales de experiencia, reputación y retención;
- metadatos con `noindex` mientras el proyecto sea una demo de prospección;
- aviso visible de demo conceptual no oficial.

### Fuera de alcance

- backend o base de datos;
- autenticación o panel administrativo;
- pagos;
- calendario o automatizaciones reales;
- integración profunda con proveedores de agenda;
- scraping;
- fotografías, reseñas o logotipos reales sin autorización.

## Organización del proyecto

```text
src/components/   Componentes de interfaz
src/data/         Datos editables de la barbería
src/layouts/      Estructura y metadatos compartidos
src/pages/        Rutas de la demo
src/lib/          Utilidades compartidas
src/styles/       Estilos globales
docs/             Brief, límites y plan de implementación
```

La información comercial debe centralizarse en `src/data/barber.json` o en un archivo equivalente, evitando repetir strings de negocio en múltiples componentes.

## Documentación

El índice y el propósito de cada documento están en [`docs/README.md`](docs/README.md).

Antes de modificar código, leer [`AGENTS.md`](AGENTS.md). Sus reglas son obligatorias para cualquier agente o colaborador automatizado.

## Flujo de trabajo

1. Crear una rama corta para un cambio concreto.
2. Mantener el patch pequeño y revisable.
3. No mezclar limpieza, contenido y rediseño en el mismo cambio.
4. Ejecutar `npm run build` antes de cerrar.
5. Confirmar que Git no incluya dependencias, salidas generadas, capturas ni archivos temporales.

## Restricciones esenciales

- Mantener Astro, Tailwind y TypeScript.
- Mantener npm mientras exista `package-lock.json`.
- No agregar backend, base de datos, autenticación ni pagos.
- No versionar artefactos generados o archivos locales.
- No usar activos reales de un negocio sin autorización.
- No presentar la demo como oficial.
- No afirmar que la propuesta reemplaza la agenda actual.
