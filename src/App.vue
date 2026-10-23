<script setup>
import { nextTick, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroCarousel from './components/HeroCarousel.vue'
import CategoryGrid from './components/CategoryGrid.vue'
import ModelGrid from './components/ModelGrid.vue'
import ProductModal from './components/ProductModal.vue'
import StorePanel from './components/StorePanel.vue'
import { allModels, categories, serviceTags } from './data/products'

const activeCategoryId = ref(categories[0].id)
const currentModel = ref(null)
const storeOpen = ref(false)
const toast = ref('')
let toastTimer = null

function showToast(msg) {
  toast.value = msg
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (toast.value = ''), 2200)
}

function scrollToModels() {
  nextTick(() => {
    document.querySelector('#models')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function selectCategory(id) {
  activeCategoryId.value = id
  scrollToModels()
}

function viewModel(m) {
  currentModel.value = m
}

function browseCategory(m) {
  selectCategory(m.categoryId)
}

function inquire() {
  // 关闭商品弹窗，展示门店信息
  currentModel.value = null
  storeOpen.value = true
}

function openStore() {
  storeOpen.value = true
}

function handleSearch(keyword) {
  const k = keyword.toLowerCase()
  const hit = allModels.find((m) => m.name.toLowerCase().includes(k) || m.model.toLowerCase().includes(k))
  if (hit) {
    activeCategoryId.value = hit.categoryId
    scrollToModels()
    showToast(`已找到「${hit.name}」`)
    return
  }
  const cat = categories.find((c) => c.name.includes(keyword))
  if (cat) {
    selectCategory(cat.id)
    showToast(`已切换到「${cat.name}」分类`)
  } else {
    showToast(`未找到与“${keyword}”相关的商品`)
  }
}
</script>

<template>
  <SiteHeader @search="handleSearch" @store="openStore" />

  <main>
    <HeroCarousel @view="viewModel" @browse="browseCategory" />
    <CategoryGrid :active-id="activeCategoryId" @select="selectCategory" />
    <ModelGrid :active-id="activeCategoryId" @select="selectCategory" @view="viewModel" />
  </main>

  <footer class="ft">
    <div class="container ft-inner">
      <span class="brand">美的慧生活 · 电器专卖店</span>
      <span class="line">{{ serviceTags.join(' · ') }}</span>
      <button class="ft-link" @click="openStore">门店信息 / 到店咨询</button>
    </div>
    <div class="container ft-note">
      本页面为商品展示页，图片仅做参考。
    </div>
  </footer>

  <ProductModal
    :model="currentModel"
    @close="currentModel = null"
    @inquire="inquire"
  />

  <StorePanel v-if="storeOpen" @close="storeOpen = false" @copy="showToast" />

  <Transition name="toast">
    <div v-if="toast" class="toast">{{ toast }}</div>
  </Transition>
</template>

<style scoped>
main {
  min-height: 60vh;
}

.ft {
  margin-top: 64px;
  padding: 22px 0 18px;
  border-top: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.55);
}

@media (max-width: 780px) {
  .ft {
    margin-top: 40px;
    /* 适配 iPhone 底部横条的安全区 */
    padding-bottom: calc(18px + env(safe-area-inset-bottom));
  }

  .ft-inner {
    gap: 4px 12px;
  }
}

/* 底部服务保障：一行小字 */
.ft-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px 18px;
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--muted);
}

.ft-inner .brand {
  color: var(--ink);
  font-weight: 500;
  letter-spacing: 2px;
}

.ft-link {
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--accent-deep);
  border-bottom: 1px solid rgba(33, 131, 129, 0.35);
  padding-bottom: 1px;
  transition: color 0.25s, border-color 0.25s;
}

.ft-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.ft-inner .dot {
  color: var(--line);
}

.ft-note {
  margin-top: 6px;
  text-align: center;
  color: var(--muted-2);
  font-size: 11px;
  letter-spacing: 1px;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  z-index: 200;
  padding: 10px 24px;
  border-radius: 999px;
  background: rgba(22, 98, 95, 0.94);
  color: #f2f7f6;
  font-size: 13px;
  letter-spacing: 1px;
  box-shadow: var(--shadow-md);
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s, transform 0.3s var(--ease);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 12px);
}
</style>
