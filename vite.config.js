import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure React plugin is included
import path from 'path';

export default defineConfig({
  plugins: [react()],  // No need to add TailwindCSS here

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist', // Ensure build output goes to the correct folder
    rollupOptions: {
      input: 'index.html', // Ensure the correct entry file
    },
  },
});
