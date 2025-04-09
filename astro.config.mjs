import dotenv from "dotenv";
dotenv.config();
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import relativeLinks from "astro-relative-links"; // 追加

// 環境変数でsiteとbaseを切り替える
const isDemo = process.env.BUILD_TARGET === "demo";

export default defineConfig({
  site: isDemo
    ? "https://plus-agc.sakura.ne.jp/plus-demo/tachineputa"
    : "https://tachineputa-official.jp",
  base: isDemo ? "/plus-demo/tachineputa/" : "/",
  integrations: [sitemap(), relativeLinks()], // 変更
  build: {
    sourcemap: true, // ソースマップを有効にする
  },
  // experimentalオプションを削除または修正
});
