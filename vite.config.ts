import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
const path = require('path')

export default defineConfig({
  // also change alias in tsconfig.json compilerOptions > path
  base: '/react-navbar/',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@config': path.resolve(__dirname, './src/config'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@assets': path.resolve(__dirname, './assets'),

    },
  },
  server: {
    host: true
  },
  plugins: [react(), svgr({
    include: '**/*.svg',
    exportAsDefault: true,
  })]
})
