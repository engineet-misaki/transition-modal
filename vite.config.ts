import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  root: "src",
  publicDir: "public",

  // minifyせずに出力（コードを読みやすくするため）
  build: {
    minify: true,
    outDir: "../",
  },
});
