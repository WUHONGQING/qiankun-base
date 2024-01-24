import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  // 8081端口是子应用1的端口
  server: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    vue(),
    qiankun('sub-app-1', {
      useDevMode: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
