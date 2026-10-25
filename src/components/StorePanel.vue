<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { amapUrl, amapMapUrl, store } from '../data/store'

const emit = defineEmits(['close', 'copy'])

const copied = ref('')

function onKey(e) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

async function copy(text, label) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
  copied.value = label
  emit('copy', `已复制${label}：${text}`)
  setTimeout(() => (copied.value = ''), 2000)
}

const telHref = computed(() => `tel:${store.phone.replace(/-/g, '')}`)

const rows = computed(() => [
  {
    label: '门店名称',
    value: `${store.name}（${store.branch}）`,
    icon: 'M3 21V8l9-5 9 5v13h-6v-6H9v6H3z',
  },
  {
    label: '门店地址',
    value: store.address,
    icon: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
  },
  { label: '老板电话', value: store.phone, icon: 'M6.6 3h3l1.5 4-2 1.5a12 12 0 0 0 6.4 6.4L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3z', copyable: true, key: 'phone' },
  { label: '老板微信', value: store.wechat, icon: 'M8.7 3C4.9 3 2 5.5 2 8.6c0 1.8 1 3.3 2.6 4.3L4 15.7l2.9-1.5c.6.1 1.2.2 1.8.2h.6a5.6 5.6 0 0 1-.2-1.5c0-3.2 3.1-5.7 6.9-5.7h.6C16 4.6 12.7 3 8.7 3zm-2 3.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4.6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16 8.4c-3.3 0-5.9 2.2-5.9 4.9s2.6 4.9 5.9 4.9c.6 0 1.1-.1 1.6-.2l2.4 1.3-.6-2.1A4.7 4.7 0 0 0 22 13.3c0-2.7-2.6-4.9-6-4.9zm-2 2.6a.9.9 0 1 1 0 1.7.9.9 0 0 1 0-1.7zm4 0a.9.9 0 1 1 0 1.7.9.9 0 0 1 0-1.7z', copyable: true, key: 'wechat' },
  { label: '营业时间', value: store.hours, icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm1-13h-2v5l4 2.4 1-1.7-3-1.8V8z' },
])
</script>

<template>
  <Teleport to="body">
    <Transition name="store">
      <div v-if="true" class="mask" @click.self="emit('close')">
        <div class="panel" role="dialog" aria-modal="true" aria-label="门店信息">
          <button class="close" aria-label="关闭" @click="emit('close')">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div class="head">
            <span class="mark">美</span>
            <div>
              <h3>{{ store.name }}</h3>
              <p>{{ store.branch }} · 到店咨询</p>
            </div>
          </div>

          <div class="body">
            <div class="info">
              <ul class="rows">
                <li v-for="r in rows" :key="r.label">
                  <span class="ico">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path :d="r.icon" /></svg>
                  </span>
                  <span class="txt">
                    <em>{{ r.label }}</em>
                    <strong>{{ r.value }}</strong>
                  </span>
                  <span v-if="r.copyable" class="ops">
                    <a v-if="r.key === 'phone'" class="mini" :href="telHref">拨打</a>
                    <button class="mini" @click="copy(r.value, r.label)">{{ copied === r.label ? '已复制' : '复制' }}</button>
                  </span>
                </li>
              </ul>

              <div class="links">
                <a class="btn" :href="amapUrl" target="_blank" rel="noopener">在高德地图打开</a>
              </div>
            </div>

            <div class="map">
              <iframe :src="amapMapUrl" title="门店位置地图" loading="lazy" referrerpolicy="no-referrer"></iframe>
              <p class="tip">地图由高德地图提供，点击标记可查看门店位置</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mask {
  position: fixed;
  inset: 0;
  z-index: 110;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(30, 34, 40, 0.45);
  backdrop-filter: blur(6px);
}

.panel {
  position: relative;
  width: min(880px, 100%);
  max-height: 88vh;
  overflow: auto;
  background: var(--card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid var(--line);
  color: var(--ink-soft);
  transition: background 0.25s, color 0.25s, transform 0.25s;
}

.close:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: #f6f5f1;
  transform: rotate(90deg);
}

.head {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 24px 30px 18px;
  border-bottom: 1px solid var(--line-soft);
}

.mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: linear-gradient(140deg, var(--accent), var(--accent-deep));
  color: #f2f7f6;
  font-size: 20px;
  font-weight: 600;
}

.head h3 {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
}

.head p {
  color: var(--muted);
  font-size: 12.5px;
  letter-spacing: 1px;
}

.body {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;
  padding: 22px 30px 28px;
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.rows li {
  display: flex;
  align-items: flex-start;
  gap: 11px;
}

.ico {
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--accent-bg);
  color: var(--accent-deep);
}

.txt {
  flex: 1;
  min-width: 0;
}

.txt em {
  display: block;
  font-style: normal;
  color: var(--muted);
  font-size: 11.5px;
  letter-spacing: 1px;
}

.txt strong {
  display: block;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.5;
  word-break: break-all;
}

.ops {
  display: flex;
  gap: 6px;
  flex: 0 0 auto;
}

.mini {
  padding: 4px 11px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 12px;
  color: var(--ink-soft);
  transition: all 0.25s;
}

.mini:hover {
  border-color: var(--accent);
  color: var(--accent-deep);
}

.links {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 9px 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-deep));
  color: #f2f7f6;
  font-size: 13px;
  letter-spacing: 0.5px;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(33, 131, 129, 0.28);
}

.btn.ghost {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--ink-soft);
}

.btn.ghost:hover {
  border-color: var(--accent);
  color: var(--accent-deep);
  box-shadow: none;
}

.map {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.map iframe {
  width: 100%;
  height: 300px;
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  background: #f4f3ef;
}

.tip {
  color: var(--muted-2);
  font-size: 11.5px;
  text-align: center;
  letter-spacing: 0.5px;
}

.store-enter-active,
.store-leave-active {
  transition: opacity 0.3s ease;
}

.store-enter-active .panel,
.store-leave-active .panel {
  transition: transform 0.35s var(--ease), opacity 0.35s var(--ease);
}

.store-enter-from,
.store-leave-to {
  opacity: 0;
}

.store-enter-from .panel,
.store-leave-to .panel {
  transform: translateY(28px) scale(0.98);
  opacity: 0;
}

@media (max-width: 780px) {
  .body {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 20px 18px 24px;
  }

  .map iframe {
    height: 240px;
  }

  .head {
    padding: 20px 18px 16px;
  }

  /* 电话/微信行：复制按钮换到下一行，避免挤压号码 */
  .rows li {
    flex-wrap: wrap;
  }

  .ops {
    margin-left: 41px;
    margin-top: -6px;
  }

  .mini {
    padding: 7px 14px;
  }

  .links {
    margin-top: 16px;
  }

  .btn {
    flex: 1;
    padding: 11px 18px;
    text-align: center;
  }
}

@media (max-width: 560px) {
  .mask {
    padding: 14px;
  }

  .panel {
    max-height: 92vh;
    border-radius: var(--radius);
  }

  .close {
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
  }

  .map iframe {
    height: 220px;
  }
}
</style>
