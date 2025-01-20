import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "src/styles/main.scss" as *;` -> SCSS 파일 내에서 자동으로 main.scss을 불러와야 하지만 해당 경로에는 main.scss가 없음
        additionalData: `@use "/src/styles/custom-font.scss" as *;`,
      },
    },
  },
})
