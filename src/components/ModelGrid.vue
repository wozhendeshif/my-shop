<script setup>
import { computed } from 'vue'
import { categories } from '../data/products'

const props = defineProps({
  activeId: { type: String, required: true },
})

const emit = defineEmits(['select', 'view'])

const active = computed(() => categories.find((c) => c.id === props.activeId) || categories[0])
</script>

<template>
  <section id="models" class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2><em>02</em>型号选购</h2>
          <p class="sub">{{ active.desc }}｜点击卡片查看商品详情</p>
        </div>
        <span class="meta">当前：{{ active.name }}</span>
      </div>

      <div class="chips">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="chip"
          :class="{ active: cat.id === activeId }"
          @click="emit('select', cat.id)"
        >
          {{ cat.name }}
        </button>
      </div>

      <div :key="active.id" class="grid">
        <article
          v-for="(m, i) in active.models"
          :key="m.id"
          class="card"
          :style="{ animationDelay: `${i * 90}ms` }"
          @click="emit('view', m)"
        >
          <div class="pic">
            <img :src="m.img" :alt="m.name" loading="lazy" />
            <span v-if="m.hot" class="hot">当季热卖</span>
          </div>

          <div class="body">
            <h3>{{ m.name }}</h3>
            <p class="model">型号 {{ m.model }}</p>
            <p class="sales">{{ m.sales }} · 门店有货</p>
          </div>

          <span class="more">
            查看详情
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
          </span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chips {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 16px;
  margin-bottom: 8px;
  scrollbar-width: none;
}

.chips::-webkit-scrollbar {
  display: none;
}

.chip {
  flex: 0 0 auto;
  padding: 6px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  letter-spacing: 0.5px;
  color: var(--ink-soft);
  transition: all 0.28s var(--ease);
}

.chip:hover {
  border-color: var(--accent-soft);
  color: var(--accent);
}

.chip.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #f2f7f6;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
  gap: 16px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--card);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.35s;
  animation: in 0.55s var(--ease) both;
}

@keyframes in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-soft);
  box-shadow: var(--shadow-md);
}

/* 图片尺寸收敛 */
.pic {
  position: relative;
  display: grid;
  place-items: center;
  height: 132px;
  padding: 12px;
  background: linear-gradient(180deg, #faf9f6, #f4f3ef);
  border-bottom: 1px solid var(--line-soft);
  overflow: hidden;
}

.pic img {
  max-width: 82%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.45s var(--ease);
}

.card:hover .pic img {
  transform: scale(1.07);
}

.hot {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 2px 8px;
  border-radius: 3px;
  background: rgba(38, 42, 48, 0.82);
  color: #f0eee9;
  font-size: 11px;
  letter-spacing: 0.5px;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 14px 16px 16px;
}

.body h3 {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.3px;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 42px;
}

.model {
  color: var(--muted);
  font-size: 11.5px;
  letter-spacing: 0.5px;
}

.sales {
  color: var(--muted-2);
  font-size: 11.5px;
}

.more {
  position: absolute;
  right: 14px;
  bottom: 14px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--accent);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
}

.card:hover .more {
  opacity: 1;
  transform: none;
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .pic {
    height: 108px;
  }

  .body {
    padding: 12px 12px 14px;
  }

  .body h3 {
    font-size: 13px;
    min-height: 39px;
  }

  .sales {
    display: none;
  }
}

/* 触屏设备没有 hover，"查看详情"改为常显 */
@media (hover: none) {
  .more {
    opacity: 1;
    transform: none;
  }

  .card:active {
    border-color: var(--accent-soft);
    box-shadow: var(--shadow-sm);
  }

  .card:hover {
    transform: none;
    box-shadow: none;
  }

  .card:hover .pic img {
    transform: none;
  }
}
</style>
