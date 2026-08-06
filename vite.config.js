import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project Pages is served under the repository path, including root deployment.
  base: '/Djo_Stroy/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
