import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": "/src/",
      "@components": "/src/components/",
      "@media": "/src/media/",
      "@pages": "/src/pages/",
      "@styles": "/src/styles/",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/_common.scss";
      `,
      },
    },
  },
});
