import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'figma:asset/c3fdc0d346b78c04dcf01a50654d24b0fa5a6a26.png': path.resolve(__dirname, './src/assets/c3fdc0d346b78c04dcf01a50654d24b0fa5a6a26.png'),
      'figma:asset/b48868211125c39945a35734c2c4047cabd22aba.png': path.resolve(__dirname, './src/assets/b48868211125c39945a35734c2c4047cabd22aba.png'),
      'figma:asset/918b477c0df526c77d56e64af98643e2308b399a.png': path.resolve(__dirname, './src/assets/918b477c0df526c77d56e64af98643e2308b399a.png'),
      'figma:asset/88c94566b6c767ff7590263928671503f9613eb8.png': path.resolve(__dirname, './src/assets/88c94566b6c767ff7590263928671503f9613eb8.png'),
      'figma:asset/002c452449522e77edad068251d057b7c59aff45.png': path.resolve(__dirname, './src/assets/002c452449522e77edad068251d057b7c59aff45.png'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', 'framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3000,
    open: true,
  },
});
