// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'; // Ensure React plugin is included
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],  // No need to add TailwindCSS here

//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },

//   build: {
//     outDir: 'dist', // Ensure build output goes to the correct folder
//     rollupOptions: {
//       external: [/^\/src\/assets\/.*/],
//       input: 'index.html', // Ensure the correct entry file
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});

