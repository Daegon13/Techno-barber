import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve('dist');
const routes = ['index.html', 'servicios/index.html', 'galeria/index.html', 'turnos/index.html', 'ubicacion/index.html'];
const forbidden = /NOIR|noir-mark|noir-wordmark|59899123456|Av\. Ejemplo|example\.vercel\.app|Nico|Santi|\bmock\b/;
for (const route of routes) {
  const file = resolve(root, route);
  assert(existsSync(file), `Falta ruta: ${route}`);
  const html = readFileSync(file, 'utf8');
  assert(!forbidden.test(html), `Contenido anterior en ${route}`);
  assert(/name="robots" content="noindex, nofollow, noarchive"/.test(html), `Falta robots en ${route}`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `Debe haber un h1: ${route}`);
  assert(html.includes('wa.me/59897097636?text='), `Falta WhatsApp: ${route}`);
  assert(!/<script[^>]+src="[^"]+\.ts(?:\?|"|$)/.test(html), `TypeScript sin procesar: ${route}`);
  for (const match of html.matchAll(/(?:src|href)="([^"?#]+)(?:[^"]*)"/g)) {
    const url = match[1];
    if (/^(?:https?:|tel:|mailto:|data:)/.test(url) || !/\.(?:png|jpg|jpeg|webp|avif|svg|js|css)$/.test(url)) continue;
    const target = url.startsWith('/') ? resolve(root, url.slice(1)) : resolve(dirname(file), url);
    assert(existsSync(target), `Activo ausente: ${url}`);
  }
}
function scan(dir) {
  for (const entry of readdirSync(dir, {withFileTypes:true})) {
    const file = resolve(dir, entry.name);
    if (entry.isDirectory()) scan(file);
    else if (/\.(?:html|js|css|json|svg|txt)$/.test(entry.name)) assert(!forbidden.test(readFileSync(file, 'utf8')), `Marca anterior: ${file}`);
  }
}
scan(root);
console.log('OK: cinco rutas, h1, robots, WhatsApp, activos y ausencia de marca anterior en dist.');
