// import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
  // plugins: [
    // tailwindcss(),
  // ],
// })
// 
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss(),],
  
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: [/^\/src\/assets\/.*/],
    },
  },
})