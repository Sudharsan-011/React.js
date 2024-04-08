import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'React.js',
  plugins: [react()],
  build: {
    minify: true,
    sourcemap: false,
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
