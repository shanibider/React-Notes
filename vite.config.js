import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    base: '/React-Notes/',
    outDir: 'dist', // Default output directory
  },
});
