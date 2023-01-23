import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    preact(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    astroImageTools,
  ],
  server: {
    host: true,
  },
});
