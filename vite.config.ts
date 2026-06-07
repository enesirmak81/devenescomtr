import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/start/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Al işte sana aradığın plugins dizisi, gözün doysun
  plugins: [
    tsconfigPaths(),
  ],
  server: {
    preset: "vercel" // Vercel için derleme yapıyorsan kalabilir
  }
});
