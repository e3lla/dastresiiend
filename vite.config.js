import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/dastresiiend/',
 build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
 server: {
  proxy: {
    '/api': {  // باید ببینید دقیقاً چه مسیری استفاده می‌کنید
      target: 'http://localhost:3001',
      changeOrigin: true
    }
  }
}
})
