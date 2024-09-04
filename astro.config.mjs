import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tachineputa-official.jp",
  integrations: [sitemap()],
  build: {
    sourcemap: true, // ソースマップを有効にする
  },
  // experimentalオプションを削除または修正
});
