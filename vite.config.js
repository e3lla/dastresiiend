import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/dastresiiend/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
    // rollupOptions رو حذف کردیم چون نیازی نیست
  }
})
