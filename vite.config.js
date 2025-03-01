import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 3000
  },
  build: {
    outDir: "build", // Certifique-se de que está gerando para "build"
    cssCodeSplit: false, // Isso evita que os arquivos CSS sejam fragmentados
  }
});
