import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/test-notebook/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        // fallback to index.html on unknown routes
      }
    }
  }
});

