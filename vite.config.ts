import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "#src", replacement: "/src" }],
  },
  plugins: [react()],
});
