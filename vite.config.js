import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project under the repository name.
  base: '/Djo_Stroy/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
