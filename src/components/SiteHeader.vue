<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search', 'store'])

const keyword = ref('')
const links = [
  { label: '当季热卖', id: 'seasonal' },
  { label: '商品分类', id: 'categories' },
  { label: '型号选购', id: 'models' },
]

function submit() {
  if (keyword.value.trim()) emit('search', keyword.value.trim())
}
</script>

<template>
  <header class="hdr">
    <div class="container hdr-inner">
      <a class="logo" href="#seasonal">
        <span class="mark">美</span>
        <span class="words">
          <strong>美的慧生活</strong>
          <small>电器专卖店 · 商品展示</small>
        </span>
      </a>

      <nav class="nav">
        <a v-for="l in links" :key="l.id" :href="`#${l.id}`">
          {{ l.label }}
          <i />
        </a>
      </nav>

      <form class="search" @submit.prevent="submit">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l4.5 4.5" />
        </svg>
        <input v-model="keyword" type="text" placeholder="搜索型号 / 品类" />
      </form>

      <button class="store-btn" @click="emit('store')">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7">
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
        门店信息
      </button>
    </div>
  </header>
</template>

<style scoped>
.hdr {
  position: sticky;
  top: 0;
  z-index: 60;
  background: rgba(246, 245, 241, 0.86);
  backdrop-filter: blur(14px) saturate(1.2);
  border-bottom: 1px solid var(--line);
}

.hdr-inner {
  display: flex;
  align-items: center;
  gap: 36px;
  height: 66px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 11px;
}

.mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(140deg, var(--accent), var(--accent-deep));
  color: #f2f7f6;
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0;
}

.words strong {
  display: block;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 2px;
}

.words small {
  display: block;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 1.5px;
}

.nav {
  display: flex;
  gap: 26px;
  margin-left: auto;
}

.nav a {
  position: relative;
  padding: 4px 0;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: var(--ink-soft);
  transition: color 0.25s;
}

.nav a i {
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: var(--ink);
  transition: width 0.3s var(--ease), left 0.3s var(--ease);
}

.nav a:hover {
  color: var(--ink);
}

.nav a:hover i {
  width: 100%;
  left: 0;
}

.search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: var(--muted);
  transition: border-color 0.25s, background 0.25s;
}

.search:focus-within {
  border-color: var(--accent-soft);
  background: #fff;
}

.search input {
  width: 130px;
  border: none;
  outline: none;
  background: none;
  font-size: 13px;
  color: var(--ink);
  transition: width 0.35s var(--ease);
}

.search:focus-within input {
  width: 190px;
}

.store-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: 0 0 auto;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.7);
  color: var(--ink-soft);
  font-size: 13px;
  letter-spacing: 1px;
  transition: all 0.25s var(--ease);
}

.store-btn:hover {
  border-color: var(--accent);
  color: var(--accent-deep);
  transform: translateY(-1px);
}

@media (max-width: 780px) {
  .nav {
    display: none;
  }

  /* 手机端改两行：上行 logo + 门店按钮，下行搜索框占满 */
  .hdr-inner {
    height: auto;
    flex-wrap: wrap;
    gap: 10px 12px;
    padding: 10px 0 12px;
  }

  .search {
    order: 3;
    flex: 1 1 100%;
    min-width: 0;
    margin-left: 0;
    padding: 9px 14px;
  }

  .search input,
  .search:focus-within input {
    width: auto;
    flex: 1;
    /* 覆盖 scoped 的 13px：iOS Safari 聚焦时会缩放 <16px 的输入框 */
    font-size: 16px;
  }

  .store-btn {
    margin-left: auto;
    padding: 8px 14px;
  }
}

/* 窄屏进一步压缩，避免 360px 宽度换行 */
@media (max-width: 400px) {
  .words small {
    display: none;
  }

  .mark {
    width: 34px;
    height: 34px;
    font-size: 17px;
  }

  .words strong {
    font-size: 15.5px;
    letter-spacing: 1px;
  }
}
</style>
