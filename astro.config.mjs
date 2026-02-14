import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://astro-simple-blog.vercel.app",
  integrations: [tailwind()],
  adapter: vercel(),
});
