import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
base: '/Deploy_vite-react/' // if the URL is https://username.github.io/Deploy_vite-react/

})
