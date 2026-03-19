import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vike()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('antd/es')) return 'antd'
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'vendor'
        },
      },
    },
  },
})
