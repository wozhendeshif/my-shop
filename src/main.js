import { createApp } from 'vue'
// 全局基础样式（CSS 变量、重置、.container 布局等），必须保留
import './style.css'
import App from './App.vue'

// 滚动入场指令：v-reveal="staggerMs"
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
)

const app = createApp(App)

app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    observer.observe(el)
  },
})

app.mount('#app')
