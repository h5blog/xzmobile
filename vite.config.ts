import { extname } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const imageOrFontExt = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.avif',
  '.ico',
  '.bmp',
  '.woff',
  '.woff2',
  '.ttf',
  '.otf',
  '.eot',
])

const SITE = 'mobile-website'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `${SITE}/js/[name]-[hash].js`,
        chunkFileNames: `${SITE}/js/[name]-[hash].js`,
        assetFileNames(assetInfo) {
          const original = assetInfo.names?.[0] ?? ''
          const ext = extname(original).toLowerCase()
          if (ext === '.css') return `${SITE}/css/[name]-[hash][extname]`
          if (imageOrFontExt.has(ext)) return `${SITE}/images/[name]-[hash][extname]`
          return `${SITE}/images/[name]-[hash][extname]`
        },
      },
    },
  },
})
