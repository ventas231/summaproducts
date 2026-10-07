// Genera el sitio estático que se publica en summaproducts.com.
// Une site.body.html + site.css + site.js en un solo index.html y copia public/.
// Uso: node scripts/build-static.mjs  →  sale en dist-static/
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist-static");
const read = (p) => readFileSync(join(root, p), "utf8");

const css = read("src/summa/site.css");
const body = read("src/summa/site.body.html");
const js = read("src/summa/site.js");

const title = "Summa Products — Para fabricantes y dueños de marca";
const description =
  "Summa Products: soluciones para fabricantes y dueños de marca, con acompañamiento de principio a fin.";
const ogDescription =
  "Soluciones para fabricantes y dueños de marca, con acompañamiento de principio a fin.";

const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<meta property="og:title" content="Summa Products">
<meta property="og:description" content="${ogDescription}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.png" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600;700&display=swap">
<style>
${css}
</style>
</head>
<body>
<div>
${body}
</div>
<script>
(function(){
${js}
})();
</script>
</body>
</html>
`;

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
if (existsSync(join(root, "public"))) cpSync(join(root, "public"), out, { recursive: true });
writeFileSync(join(out, "index.html"), html);
writeFileSync(join(out, "404.html"), html);
writeFileSync(join(out, ".nojekyll"), "");
writeFileSync(join(out, "CNAME"), "summaproducts.com\n");

// Aviso si falta alguna imagen referenciada por la página.
const missing = [...new Set(body.match(/\/__l5e\/[^"' )]+/g) ?? [])].filter(
  (p) => !existsSync(join(out, p)),
);
if (missing.length) {
  console.error(`Faltan ${missing.length} imágenes en public/:\n` + missing.join("\n"));
  process.exit(1);
}
console.log("Sitio estático listo en dist-static/");
