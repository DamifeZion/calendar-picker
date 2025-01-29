import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   css: ["@/assets/css/index.css", "@vuepic/vue-datepicker/dist/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
   },
   imports: {
      dirs: ["utils"],
   },
});
