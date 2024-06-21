import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${dirname(fileURLToPath(import.meta.url))}/src`
    }
  },
  server: {
    port: 15173,
    proxy: {
      '/vts': {
        target: 'http://tile0.tianditu.gov.cn',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
