<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { serviceTags } from '../data/products'

const props = defineProps({
  model: { type: Object, default: null },
})

const emit = defineEmits(['close', 'inquire'])

// 商品图片放大预览
const showImage = ref(false)
function closeImage() {
  showImage.value = false
}

function onKey(e) {
  if (e.key === 'Escape') {
    if (showImage.value) closeImage()
    else emit('close')
  }
}

// 仅在弹窗打开时锁定页面滚动；关闭弹窗时同时收起图片预览
watch(
  () => props.model,
  (m) => {
    document.body.style.overflow = m ? 'hidden' : ''
    if (!m) showImage.value = false
  }
)

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="model" class="mask" @click.self="emit('close')">
        <div class="dialog" role="dialog" aria-modal="true">
          <button class="close" aria-label="关闭" @click="emit('close')">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div class="dialog-body">
            <div class="left">
              <div class="pic" role="button" tabindex="0" aria-label="查看大图" @click="showImage = true">
                <img :src="model.img" :alt="model.name" />
                <span class="zoom-hint">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                  点击放大
                </span>
              </div>
              <p class="note">{{ serviceTags.join(' · ') }}</p>
            </div>

            <div class="right">
              <span class="cat">{{ model.categoryName }}</span>
              <h3>{{ model.name }}</h3>
              <p class="model-no">型号 {{ model.model }}<span class="dot">/</span>{{ model.sales }}</p>

              <p class="desc">{{ model.desc }}</p>

              <ul class="features">
                <li v-for="f in model.features" :key="f">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5" /></svg>
                  {{ f }}
                </li>
              </ul>

              <table class="specs">
                <tbody>
                  <tr v-for="(r, i) in model.specs" :key="i">
                    <th>{{ r[0] }}</th>
                    <td>{{ r[1] }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="actions">
                <button class="btn" @click="emit('inquire', model)">到店咨询</button>
                <button class="btn ghost" @click="emit('close')">继续浏览</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 商品图片放大预览 -->
    <Transition name="fade">
      <div v-if="showImage && model" class="img-preview" @click="closeImage">
        <img :src="model.img" :alt="model.name" @click.stop />
        <button class="img-close" aria-label="关闭预览" @click="closeImage">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mask {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(30, 34, 40, 0.45);
  backdrop-filter: blur(6px);
}

.dialog {
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
  background: rgba(255, 255, 255, 0.8);
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

.dialog-body {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 30px;
  padding: 32px 34px 30px;
}

/* 图片尺寸收敛 */
.pic {
  position: relative;
  display: grid;
  place-items: center;
  height: 320px;
  padding: 18px;
  border-radius: var(--radius);
  background: linear-gradient(180deg, #faf9f6, #f3f2ee);
  border: 1px solid var(--line-soft);
  overflow: hidden;
  cursor: zoom-in;
  transition: border-color 0.25s;
}

.pic:hover {
  border-color: var(--accent-soft);
}

.zoom-hint {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid var(--line-soft);
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.5px;
  pointer-events: none;
}

.pic img {
  max-width: 100%;
  max-height: 260px;
  width: auto;
  height: auto;
  object-fit: contain;
}

.note {
  margin-top: 14px;
  text-align: center;
  color: var(--muted);
  font-size: 11.5px;
  letter-spacing: 1px;
}

/* 商品图片放大预览（灯箱） */
.img-preview {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(18, 20, 24, 0.92);
  cursor: zoom-out;
}

.img-preview img {
  max-width: 92vw;
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  cursor: default;
}

.img-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  cursor: pointer;
  transition: background 0.25s;
}

.img-close:hover {
  background: rgba(255, 255, 255, 0.25);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cat {
  display: inline-block;
  padding: 3px 11px;
  border-radius: 3px;
  background: var(--accent-bg);
  color: var(--accent-deep);
  font-size: 12px;
  letter-spacing: 1px;
}

.right h3 {
  margin: 14px 0 6px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.model-no {
  color: var(--muted);
  font-size: 12.5px;
  letter-spacing: 0.5px;
}

.dot {
  margin: 0 8px;
  color: var(--line);
}

.desc {
  color: var(--ink-soft);
  font-size: 13.5px;
  margin-bottom: 14px;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 16px;
  margin-bottom: 16px;
}

.features li {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 12.5px;
  color: var(--ink-soft);
}

.features svg {
  flex: 0 0 auto;
  margin-top: 5px;
  color: var(--accent);
}

.specs {
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
}

.specs th,
.specs td {
  border: 1px solid var(--line-soft);
  padding: 7px 12px;
  text-align: left;
  font-weight: 400;
}

.specs th {
  width: 92px;
  background: #faf9f6;
  color: var(--muted);
  letter-spacing: 1px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 9px 24px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-deep));
  color: #f2f7f6;
  font-size: 13.5px;
  letter-spacing: 1px;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(33, 131, 129, 0.3);
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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .dialog,
.modal-leave-active .dialog {
  transition: transform 0.35s var(--ease), opacity 0.35s var(--ease);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .dialog,
.modal-leave-to .dialog {
  transform: translateY(28px) scale(0.98);
  opacity: 0;
}

@media (max-width: 780px) {
  .dialog-body {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 18px 24px;
  }

  .pic {
    height: 220px;
    padding: 12px;
  }

  .pic img {
    max-height: 180px;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .right h3 {
    font-size: 18px;
  }

  /* 规格表：标签列收窄、字号下调，避免 360px 下横向溢出 */
  .specs th,
  .specs td {
    padding: 6px 9px;
    font-size: 12px;
    word-break: break-word;
  }

  .specs th {
    width: 74px;
    letter-spacing: 0;
  }

  /* 按钮撑满一行，触屏更易点 */
  .actions {
    gap: 8px;
    margin-top: 16px;
  }

  .btn {
    flex: 1;
    padding: 11px 18px;
    text-align: center;
  }
}

/* 弹窗在手机上更贴近全屏，减少留白 */
@media (max-width: 560px) {
  .mask {
    padding: 14px;
  }

  .dialog {
    max-height: 92vh;
    border-radius: var(--radius);
  }

  .close {
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
  }

  .pic {
    height: 190px;
  }

  .pic img {
    max-height: 155px;
  }
}
</style>
