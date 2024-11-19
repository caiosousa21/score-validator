import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.ts",
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    exclude: [...configDefaults.exclude, "e2e/*"],
  },
});
