import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "https://franklinboachieyiadom.github.io/snb/",
  build: {
    outDir: "dist",
  },
});
