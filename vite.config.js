import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // 部署在根路径时用默认的 '/'；若站点挂在子路径（如 /my-shop），
  // 构建前设置环境变量 VITE_BASE 即可，不要写死在 npm 脚本里。
  base: process.env.VITE_BASE || '/',
  plugins: [vue()],
})
