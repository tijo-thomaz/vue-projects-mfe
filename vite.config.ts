import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vue_projects_mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.vue",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3001,
    cors: true,
  },
});
