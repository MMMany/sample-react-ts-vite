import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitest.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const plugins = [
    react(),
    mode === "analyze" &&
      visualizer({
        filename: "stats.html",
        brotliSize: true,
        gzipSize: true,
      }),
  ].filter(Boolean);

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: Number(env.PORT) || 3000,
    },
    test: {
      environment: "jsdom",
      setupFiles: ["tests/setup.ts"],
      coverage: {
        enabled: true,
        include: ["src/**/*"],
        exclude: ["src/main.tsx", "src/styles/theme.ts", "src/vite-env.d.ts"],
        thresholds: {
          lines: 80,
          functions: 80,
          branches: 80,
          statements: 80,
        },
      },
    },
  };
});
