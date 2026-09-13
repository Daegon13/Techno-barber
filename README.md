# Assets — Techno Barber

Copiar la carpeta `public/images/techno/` dentro de `barber-demo/public/images/techno/` del repositorio. Los nombres son definitivos; no renombrarlos sin actualizar las referencias.

| Archivo | Tamaño | Uso | Regla de contenido |
|---|---:|---|---|
| `hero-tools.webp` | 1672×941 | Hero de la home | Imagen conceptual de herramientas, no del local real. Dejar el texto HTML sobre el tercio izquierdo oscuro. |
| `service-corte-illustrative.webp` | 1254×1254 | Tarjeta de Corte | Imagen ilustrativa. Añadir etiqueta visual discreta `Imagen ilustrativa`; no usarla en galería de trabajos. |
| `og-techno-barber-concept.webp` | 1733×907 | Open Graph de la demo | Portada conceptual con texto integrado. Usar exclusivamente como preview social, nunca como fondo del sitio. |

Los tres archivos están comprimidos en WebP, sin metadata innecesaria. No convertirlos de nuevo a PNG/JPG.

## Rutas de integración

```text
/images/techno/hero-tools.webp
/images/techno/service-corte-illustrative.webp
/images/techno/og-techno-barber-concept.webp
```

La imagen Open Graph debe configurarse como `media.og` solo cuando `SITE_URL` esté definido; BaseLayout debe resolverla como URL absoluta. Mantener `noindex, nofollow, noarchive` y el aviso de propuesta conceptual independiente.
