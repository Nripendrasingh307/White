// // import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// // export default defineConfig({
//   // plugins: [
//     // tailwindcss(),
//   // ],
// // })
// // 
// import { defineConfig } from 'vite'
// import path from 'path'

// export default defineConfig({
//   plugins: [tailwindcss(),],
  
//   resolve: {
//     alias: {
//       // eslint-disable-next-line no-undef
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       external: [/^\/src\/assets\/.*/],
//       input: 'index.html',
//     },
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})