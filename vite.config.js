import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const partials = {
  "gallery-1": fs.readFileSync(
    path.resolve(__dirname, "src/partials/gallery-1.html"),
    "utf-8"
  ),
  hero: fs.readFileSync(
    path.resolve(__dirname, "src/partials/hero.html"),
    "utf-8"
  ),
  head: fs.readFileSync(
    path.resolve(__dirname, "src/partials/head.html"),
    "utf-8"
  ),
  header: fs.readFileSync(
    path.resolve(__dirname, "src/partials/header.html"),
    "utf-8"
  ),
  ownersSection: fs.readFileSync(
    path.resolve(__dirname, "src/partials/owners-section.html"),
    "utf-8"
  ),
  mainContent: fs.readFileSync(
    path.resolve(__dirname, "src/partials/main-content.html"),
    "utf-8"
  ),
  footer: fs.readFileSync(
    path.resolve(__dirname, "src/partials/footer.html"),
    "utf-8"
  ),
  structuredData: fs.readFileSync(
    path.resolve(__dirname, "src/partials/structured-data.html"),
    "utf-8"
  ),
  styles: fs.readFileSync(
    path.resolve(__dirname, "src/partials/styles.html"),
    "utf-8"
  ),
};

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, "src/partials"),
      context: partials,
    }),
  ],
});
