import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind"; // Importa Tailwind

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), // Mantén React
    tailwind(), // Agrega Tailwind
  ],
});
