import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes to local network
    port: 3000,       // Change the port if needed
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Minimierung deaktivieren, falls Sie lesbaren Code wünschen
    minify: false,
    // Sourcemaps generieren
    sourcemap: true
  }
})
