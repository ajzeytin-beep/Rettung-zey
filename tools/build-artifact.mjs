// Baut eine einzelne HTML-Datei (alle CSS/JS inline) für Hosting als Einzeldatei.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const html = readFileSync('index.html', 'utf8');
let body = html
  .replace(/<link rel="stylesheet" href="css\/app.css">/, () => '<style>\n' + readFileSync('css/app.css', 'utf8') + '\n</style>')
  .replace(/<script src="(js\/[^"]+)"><\/script>/g, (_, p) => '<script>\n' + readFileSync(p, 'utf8') + '\n</script>');
body = body.replace(/\s*<link rel="(manifest|icon|apple-touch-icon)"[^>]*>/g, '');
mkdirSync('dist', { recursive: true });
writeFileSync('dist/rsplus-lernapp.html', body);
console.log('dist/rsplus-lernapp.html', body.length, 'bytes');
