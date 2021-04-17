import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
		'@': resolve(__dirname, 'src'),
    '@/component': resolve(__dirname, 'src/views/Component'),
    '@/home': resolve(__dirname, 'src/views/Home'),
	},
  server:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3001/api',
        changeOrigin:true
      },
    },
  }
})
