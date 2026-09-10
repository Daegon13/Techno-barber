# Techno Barber — auditoría y plan de adaptación

Fecha de revisión: 10 de septiembre de 2026. Alcance: auditoría y planificación; sin cambios en la aplicación, creación de repositorios remotos ni despliegue.

## 1. Decisión técnica y comercial

Conservar Barberia_demo como base de implementación. Astro, Tailwind, las cinco rutas, el layout, las tarjetas y el generador de WhatsApp permiten realizar esta adaptación sin empezar de cero. Se necesita sanear contenido y corregir funcionalidad antes del rediseño.

Objetivo: transformar una visita en una solicitud de turno con el mínimo de pasos. Abrir WhatsApp no equivale a una reserva confirmada. La confirmación corresponde al negocio.

Fuente auditada: Barberia_demo-main.zip suministrado por el usuario. El comentario del ZIP identifica el commit 9cf6825e6f3fd047ea19008af9498696e1f523d2. No se pudo contrastar con el estado remoto actual de GitHub. El repositorio secundario Daegon13/barber-premium-prospect-demo tampoco fue accesible mediante la consulta pública; no se le atribuyen componentes o ventajas no inspeccionados. Su comparación es opcional y no bloquea esta adaptación.

Se revisaron los archivos fuente, configuración, lockfile, flujo de despliegue, inventario público, imágenes PNG/JPEG mediante hoja de contacto y contenido listado del ZIP de imágenes anidado. No se ejecutó un build nuevo ni una sesión de navegación de la aplicación: los defectos indicados provienen de inspección estática y de la salida compilada incluida, que está desactualizada respecto del código fuente. No se certifica funcionamiento móvil todavía.

## 2. Investigación pública y registro de evidencias

Las fuentes se consultaron en la fecha de revisión. Una ficha visible hoy no prueba por sí sola la vigencia operativa de todos sus datos.

| Campo | Evidencia y estado | Uso propuesto |
|---|---|---|
| Nombre | Techno Barber, coincidente en Instagram y Waze | Publicar |
| Dirección | Av. 18 de Julio 959, local 4, Montevideo; Waze y video público de Modo Radio coinciden | Publicar; destacar local 4 para la llegada presencial |
| Teléfono | 097 097 636 en Waze | Usar como contacto publicado; formato internacional +598 97 097 636 |
| WhatsApp | El índice de una publicación de Instagram asociada al perfil menciona WhatsApp al mismo número; Opina también lo enlaza | Número con respaldo público, pero sin comprobar actividad actual; destino técnico 59897097636 |
| Instagram | @techno.barber, enlazado también desde Waze | Enlace público del negocio |
| Horarios | Waze: lunes a viernes 10–20, sábado 10–15. Video público anterior: lunes a viernes hasta 19:30 | Conflicto pendiente. No afirmar horario vigente ni generar disponibilidad con estos datos |
| Actividad | Barbería/cortes respaldados por publicaciones indexadas y ficha comercial | Categoría Corte, descripción prudente |
| Cursos/eventos | El fragmento indexado de la biografía menciona cursos iniciales/intermedios y entradas a eventos | Indicio público, sin vigencia comprobada; fuera del recorrido principal de reservas |
| Catálogo | Sin carta oficial actual accesible | No confirmar barba, combo, afeitado, perfilado, toalla caliente ni duración |
| Precios/promociones | Sin lista pública actual verificable obtenida | Precio y duración opcionales; nunca heredar valores de NOIR |
| Equipo | Sin nombres, roles y fotos verificables obtenidos | Sección oculta completa |
| Reputación | Opina muestra 4,8 y 165 votos, con 3 comentarios; no se verificó su origen ni equivalencia con Google | No publicar puntuación, volumen o testimonios como reputación de Google |
| Identidad visual | No se pudo inspeccionar directamente el perfil actual de Instagram ni obtener imágenes atribuibles con suficiente certeza | Logo, colores y fotografía oficial pendientes; dirección visual conceptual provisional |

Fuentes:

- [Waze — Techno Barber](https://www.waze.com/es/live-map/directions/uy/departamento-de-montevideo/montevideo/techno-barber?to=place.ChIJT85VRYWBn5UReQvNm_PixUs): dirección, teléfono, Instagram y horarios publicados.
- [Instagram — perfil](https://www.instagram.com/techno.barber/): el buscador devuelve nombre, usuario y parte de la biografía; la apertura directa no fue accesible.
- [Instagram — publicación indexada](https://www.instagram.com/p/CUgHtsZsvbO/): fragmento asociado al negocio menciona WhatsApp al 097 097 636. Al no poder revisar el post completo, no se toma como comprobación de actividad actual del canal.
- [Modo Radio — video público](https://www.facebook.com/Modo.Radio.Oficial/videos/sabias-algo-de-technobarber-encontranos-en-18-de-julio-y-rio-branco-959-local-4-/1602047826613843/): dirección coincidente y horario histórico distinto.
- [Opina — ficha](https://www.opina.com.uy/barberia/11100-montevideo/techno-barber-11100-montevideo_487250.php): hallazgo secundario de reputación y contacto, excluido como prueba de Google o catálogo oficial.

La búsqueda también devolvió barberías homónimas y fotos de otros locales. Se excluyeron. No se concluye que el negocio carezca de web o agenda porque no se haya localizado una fuente oficial verificable.

## 3. Arquitectura real y reutilización

Raíz de aplicación: barber-demo/. En la raíz exterior solo se encuentra la automatización de GitHub. Lockfile: Astro 5.16.11, @astrojs/vercel 8.2.11 y Tailwind 3.4.19. TypeScript; salida estática; sin React, backend, base de datos ni agenda sincronizada identificados.

| Pieza existente | Decisión |
|---|---|
| src/pages/index.astro | Conservar ruta y composición por componentes; corregir estructura y reordenar home |
| servicios.astro | Conservar listado y ServiceCard; eliminar equipo obligatorio y dependencia de precios |
| galeria.astro | Conservar ruta y grid; admitir trabajos individuales reales, sin exigir antes/después |
| turnos.astro | Conservar ruta y contenedor del flujo; priorizar contacto inmediato |
| ubicacion.astro | Conservar ruta; completar dirección, mapa/enlace de llegada y datos respaldados |
| BaseLayout.astro | Conservar esqueleto; centralizar metadata privada, navegación y CTA |
| Header / Footer / Section | Adaptar marca, navegación móvil, jerarquía y aviso conceptual |
| Hero.astro | Conservar picture responsive y composición; dos CTA principales y fotografía nueva |
| ServiceCard.astro | Conservar componente; contrato de props único, precio/duración opcionales y CTA funcional |
| StickyCTA.astro | Conservar; Reservar turno + Ver servicios, safe-area y espacio inferior suficiente |
| TurnosFlow.astro + scripts/turnos.ts | Reutilización parcial; corregir carga de script, preselección y lógica de preferencias |
| lib/whatsapp.ts | Conservar codificación del mensaje; centralizar todas las variantes y validar teléfono |
| BarbersSection / Testimonials | Conservar capacidad opcional, sin datos anteriores ni render vacío |
| SiteBackground.astro | Conservar solo si aporta; retirar imagen heredada y evitar peso innecesario |
| PriceCards / Welcome / Layout / assets de Astro | Sin uso identificado en las páginas activas; retirar de la copia tras confirmar imports |
| src/data/barber.json + lib/types.ts | Conservar centralización; corregir contrato y separar contenido publicable de evidencia |

## 4. Defectos que condicionan la adaptación

1. ServiceCard contiene un botón data-open-schedule sin listener identificado. Cambiarlo a enlace real /turnos?servicio=<id> o conectar comportamiento accesible.
2. TurnosFlow importa turnos.ts?url. La salida incluida entrega un .ts con anotaciones de tipos sin transformar. Debe compilarse como script cliente de Astro y verificarse en producción, no solo en desarrollo. [Documentación de scripts de Astro](https://docs.astro.build/en/guides/client-side-scripts/).
3. La preselección se lee con Astro.request.url en una página estática; debe leerse en el navegador. Actualmente se compara nombre mientras las tarjetas exponen id. Unificar por id estable.
4. El flujo exige servicio, día y hora antes de habilitar WhatsApp. Introduce fricción y utiliza días genéricos y horarios cada 30 minutos sin fechas, agenda, duración ni disponibilidad real.
5. ubicacion.astro tiene un cierre BaseLayout adicional y solo una imagen, con comentario de contenido pendiente. index.astro contiene un cierre div sin apertura correspondiente, dos h1 y ubicación incompleta.
6. La home no incluye una muestra de galería; equipo aparece antes de confianza; CTA final está antes de ubicación. No sigue la secuencia comercial solicitada.
7. El menú desaparece en móvil sin alternativa equivalente; logo de 80 px en cabecera de 64 px. Validar tras adaptar.
8. Cinco referencias de datos no encuentran archivo: /images/overlay-texture.png, /images/services/fade.png, /images/services/beard.png, /images/barbers/barber-a.png, /images/barbers/barber-b.png. La primera sí la consume Hero; las restantes son referencias latentes.
9. Horario tipado como array de {dias,horas}, pero JSON es objeto {dias,abre,cierra,nota}. Casts unknown esconden discrepancias; media y branding también necesitan contrato coherente.
10. Dorado en cyanA convive con clases cyan directas. Hero móvil es principalmente textura, no fotografía de identidad. Hay imágenes de varios MB, duplicados y un ZIP público de activos.
11. No hay robots meta restrictivo ni configuración de acceso privado. Canonical usa example.vercel.app y OG relativo. La salida .vercel contiene contenido viejo y referencias que ya difieren del fuente.
12. npm run check invoca astro check, pero @astrojs/check no figura instalado en el lockfile. Preparar comprobación reproducible antes del gate de validación.

## 5. Neutralización completa de NOIR

La copia nueva no se obtiene mediante un reemplazo global de nombre. Se conserva código reutilizable y se sanea toda superficie publicada.

| Superficie | Contaminación encontrada | Tratamiento en el nuevo repositorio |
|---|---|---|
| Datos | NOIR Barber Studio; Av. Ejemplo 1234; 59899123456 | Sustituir por ficha respaldada; ningún fallback al número anterior |
| Catálogo | Corte 650/40 min; Barba 550/35; Combo 1100/75; Perfilado 450/20; Afeitado 700/45 | Retirar precios, duración, popularidad y descripciones no verificadas |
| Equipo | Nico, Santi, Fade/Textura, Barba/Perfilado, dos retratos | Vaciar datos y ocultar sección |
| Testimonios | Martín, Gonzalo, Fede; textos y estrellas 5/5/4 | Eliminar datos, sin reutilizarlos como reputación |
| Promesas | Reservá en 10s, Sin sorpresas, puntualidad, experiencia, toalla caliente | Reescribir; no atribuir prácticas o garantías desconocidas |
| Marca | noir-mark.png, noir-wordmark.png; ambos campos del JSON apuntan al mark | Retirar; nombre tipográfico provisional hasta disponer de logo real |
| Fotos | Hero, fachada, interiores, servicios, teléfono, retratos, antes/después | Excluir como evidencia del negocio; reemplazar por material real o ilustrativo claramente identificado |
| Activos ocultos | SiteBackground usa /og/og-cover.png, distinto de media.og | Revisar fondos CSS, rutas de respaldo y overrides de cada componente |
| Paquetes y capturas | public/barber-demo-assets.zip contiene más logos NOIR; output.png, collages, preview.png | No copiar a public; eliminar de la copia si no cumplen función documentada |
| Ajeno al proyecto | JPEG de la Luna en gallery | Retirar |
| SEO y distribución | example.vercel.app; .vercel/output; metadata de NOIR; README starter; favicon Astro | Regenerar metadata y arte de demo; descartar salida y documentación obsoletas |
| Automatización | Workflow despliega producción en push a main; referencia secrets de Vercel | No activar en la copia; enlazar un proyecto Vercel nuevo posteriormente |

Todas las fotos existentes quedan excluidas por defecto del conjunto publicable. Una textura decorativa solo se retiene si está libre de marca y no implica representar al negocio. Las imágenes ilustrativas nunca se presentan como trabajos, empleados, reseñas o local reales.

Control de cierre: buscar nombres, teléfono viejo, dirección ficticia, NOIR/noir, example.vercel.app y textos mock tanto en fuente como en salida nueva; inventariar public incluyendo ZIP y SVG; inspeccionar visualmente raster y OG. El registro de auditoría puede documentar lo retirado fuera del contenido servido, pero las páginas y assets públicos deben quedar limpios.

## 6. Arquitectura de conversión propuesta

Home: Hero → servicios destacados verificados → trabajos reales → confianza/reputación verificable → equipo opcional → ubicación → CTA final.

Hero: Techno Barber, Centro de Montevideo, dirección abreviada y propuesta de coordinación simple. CTA principal «Reservar turno», secundario «Ver servicios». Sin promesa temporal ni número de clientes. WhatsApp directo desde hero/header/sticky y final; no exigir formulario previo.

Servicios: solo categorías respaldadas. Al principio se puede mostrar Corte y un acceso «Consultar otros servicios», sin inventar variedad. Precio ausente se muestra como consulta o se omite; jamás $0, NaN ni duración ficticia. Cada tarjeta conserva el contexto del servicio.

Galería: idealmente 4–6 trabajos identificables del perfil oficial, con URL de origen y material apto para reutilización. Mientras no se obtengan, enlace «Ver trabajos en Instagram», sin galería ficticia atribuida al local. La etapa visual final queda pendiente de ese material.

Confianza: con la evidencia disponible, mostrar presencia pública, ubicación comprobable y enlace al perfil. No llamar reseñas a esa información. Incorporar puntuación/testimonios solo si se obtiene ficha original y trazabilidad; ocultar el módulo de reseñas hasta entonces.

Turnos: selección opcional de servicio y preferencia de fecha/franja; WhatsApp habilitado desde el inicio. Mensaje general: «Hola, quiero reservar un turno en Techno Barber. ¿Qué disponibilidad tienen?». Mensaje contextual: «Hola, quiero reservar un corte en Techno Barber. ¿Qué disponibilidad tienen?». Preferencia: «Me gustaría el [fecha] por la [franja]. ¿Podrían confirmarme disponibilidad?». Texto junto al cierre: «El turno queda confirmado cuando te responda el local». No envío automático.

Si se ofrece hora concreta más adelante: fechas reales, zona America/Montevideo, sin fechas pasadas ni horas fuera del horario verificado; seguirá siendo una preferencia hasta tener integración de agenda real.

Ubicación: dirección completa y local 4, enlace verificable a navegación y foto real de acceso cuando exista. No reciclar la fachada elegante anterior ni publicar un pin supuesto.

Estética provisional: carbón/blanco, tipografía contemporánea, fotografía protagonista y un solo acento a definir después de revisar la marca real. Es una propuesta de diseño, no una afirmación sobre su identidad actual. No inferir neón o estética electrónica únicamente por «Techno».

## 7. Plan de ejecución para Codex: cuatro fases

### Fase 1 — Copia independiente, saneamiento y estabilidad

Repositorio propuesto: Daegon13/techno-barber-demo, privado. Crear historial independiente desde la base recibida y registrar procedencia/commit en documentación. Mantener barber-demo/ para minimizar cambios de estructura. No modificar ni hacer push al original. No arrastrar .git, .vercel, artefactos compilados, credenciales o workflow activo de producción.

Corregir markup, scripts, tipado y referencias. Incorporar ficha de fuentes fuera de public; datos no confirmados como ausentes y módulos condicionales. Desactivar todas las identidades anteriores. Conservar lockfile de partida; no migrar de framework ni mezclar el secundario. Verificar compatibilidad de dependencias y corregir solo lo necesario.

Salida: build reproducible, cinco rutas accesibles, ningún dato anterior servido. Primer punto de revisión: copia aislada y sana antes de diseñar.

### Fase 2 — Identidad, home y contenido verificable

Cerrar fuentes de fotografías/logo/catálogo; aplicar diseño móvil; adaptar Hero, Header, Footer, ServiceCard, galería y ubicación; completar secuencia comercial. Equipo y reseñas condicionados a evidencia. No rellenar huecos para aparentar completitud.

Salida: home revisable en 360–430 px y escritorio. Segundo punto de revisión: primeros 10 segundos y recorrido identidad → servicios → trabajos → confianza.

### Fase 3 — Reservas y fricción mínima

Centralizar mensajes/validación de teléfono, arreglar preselección por id en cliente, conectar todos los CTA, simplificar TurnosFlow, permitir WhatsApp sin fecha ni hora, añadir preferencia opcional y confirmación por el negocio. Unificar labels y acceso móvil persistente.

Salida: recorrido de 30–60 s sin botones muertos, bloqueos artificiales o reservas ficticias. Comprobar URLs y mensajes sin enviar comunicaciones al negocio.

### Fase 4 — Demo privada y validación de entrega

Proyecto Vercel independiente, root directory barber-demo, instalación con lockfile, build nuevo y configuración acorde al adaptador comprobado. No desplegar .vercel/output del ZIP ni ejecutar el workflow heredado.

Meta robots: noindex, nofollow, noarchive. Cabecera X-Robots-Tag equivalente en todas las rutas. OG con título «Techno Barber — propuesta conceptual», imagen nueva, URLs absolutas del nuevo despliegue y aviso discreto: «Propuesta conceptual independiente para Techno Barber. No es el sitio oficial».

Noindex limita indexación; no restringe acceso. Activar protección real del despliegue según las opciones disponibles en la cuenta y verificarla sin sesión. Preparar el acceso en el teléfono de presentación. La protección puede impedir que WhatsApp lea OG: verificar el comportamiento y mantener privacidad como prioridad. [Vercel Deployment Protection](https://vercel.com/docs/deployment-protection), [cabeceras de respuesta](https://vercel.com/docs/headers/response-headers).

Evitar sitemap comercial y structured data que presente la demo como sitio oficial. Robots.txt no sustituye meta/cabeceras ni autenticación; no depender de bloquear rastreo para que el robot descubra noindex.

Validación: build y check; todas las rutas directas sin 404; JavaScript compilado sin errores; CTA, query param, volver/atrás y enlaces correctos; casos con datos ausentes; navegación por teclado y foco del diálogo; móvil 360/390/430 px y escritorio; contraste, legibilidad, safe-area y ausencia de scroll horizontal; imágenes sin rutas rotas, pesos ajustados y dimensiones declaradas; inspección de metadata y privacidad; cero marca anterior en salida.

Metas de rendimiento a medir, no resultados prometidos: LCP ≤2,5 s, CLS ≤0,1 y Lighthouse móvil ≥90 bajo condiciones documentadas. No ampliar pruebas una vez resueltos los riesgos reales.

## 8. Demostración presencial

0–8 s: identidad y CTA visibles.
8–20 s: servicio verificable y forma de consultar precio.
20–32 s: trabajos reales; con material pendiente, mostrar acceso a Instagram.
32–42 s: confianza respaldada y dirección; reseñas solo si verificadas.
42–60 s: pulsar Reservar turno y mostrar mensaje contextual listo en WhatsApp, sin necesidad de enviarlo.

Frase comercial propuesta: «La idea es que quien te encuentra vea dónde estás, revise tus trabajos y llegue a tu WhatsApp con el servicio que quiere, sin tener que preguntarte todo desde cero».

## 9. Pendientes concretos y criterio de avance

Se puede iniciar saneamiento y estructura con esta auditoría. Para cerrar la presentación comercial completa faltan: inspección visual actual del perfil/logo, fotografías reales seleccionadas, catálogo vigente, confirmación del horario discrepante y, si se desea mostrar reputación numérica, ficha original de reseñas. La actividad actual del WhatsApp deberá comprobarse al preparar la demostración sin enviar mensajes de prueba no autorizados.

No hace falta esperar precios para desarrollar: el diseño admitirá su ausencia. Tampoco se inventará equipo. Si no se consigue material real, la entrega debe describirse como demo conceptual con contenido parcial y enlaces a las fuentes, sin fingir una galería o reputación completas.
