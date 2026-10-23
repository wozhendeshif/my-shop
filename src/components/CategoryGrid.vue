<script setup>
import { categories } from '../data/products'

defineProps({
  activeId: { type: String, default: '' },
})

const emit = defineEmits(['select'])
</script>

<template>
  <section id="categories" class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2><em>01</em>商品分类</h2>
          <p class="sub">先选择品类，再挑选具体型号</p>
        </div>
        <span class="meta">{{ categories.length }} 个品类 · {{ categories.reduce((n, c) => n + c.models.length, 0) }} 款型号</span>
      </div>

      <div class="cat-grid">
        <button
          v-for="(cat, i) in categories"
          :key="cat.id"
          v-reveal="i * 35"
          class="cat"
          :class="{ active: cat.id === activeId }"
          @click="emit('select', cat.id)"
        >
          <span class="thumb">
            <img :src="cat.icon" :alt="cat.name" loading="lazy" />
          </span>
          <span class="name">{{ cat.name }}</span>
          <span class="count">{{ cat.models.length }} 款型号</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 14px;
}

.cat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 22px 12px 18px;
  background: var(--card);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s;
}

.cat:hover {
  transform: translateY(-4px);
  border-color: var(--line);
  box-shadow: var(--shadow-sm);
}

.cat.active {
  border-color: var(--accent);
  box-shadow: var(--shadow-sm);
}

/* 图片尺寸收敛 */
.thumb {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
}

.thumb img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.35s var(--ease);
}

.cat:hover .thumb img {
  transform: scale(1.09);
}

.name {
  font-size: 14.5px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.count {
  color: var(--muted);
  font-size: 11.5px;
  letter-spacing: 0.5px;
}

.cat.active .count {
  color: var(--accent);
}

/* 手机端：3 列紧凑排布，避免 150px 下限退化成单列 */
@media (max-width: 780px) {
  .cat-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .cat {
    padding: 16px 8px 14px;
  }

  .thumb {
    width: 52px;
    height: 52px;
    margin-bottom: 8px;
  }

  .name {
    font-size: 13px;
    letter-spacing: 0;
  }

  .count {
    font-size: 11px;
  }

  /* 触屏点击反馈替代 hover */
  .cat:active {
    border-color: var(--accent);
  }

  .cat:hover {
    transform: none;
    box-shadow: none;
  }

  .cat:hover .thumb img {
    transform: none;
  }
}
</style>
