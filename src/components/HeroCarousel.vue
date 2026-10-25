<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { allModels, seasonalIds } from '../data/products'

const emit = defineEmits(['view'])

const slides = computed(() =>
  seasonalIds.map((id) => allModels.find((m) => m.id === id)).filter(Boolean)
)

const tones = [
  { bg: 'linear-gradient(115deg, #11403f 0%, #17635f 55%, #218381 100%)', tag: '当季热卖 · 取暖' },
  { bg: 'linear-gradient(115deg, #124544 0%, #196b66 55%, #238e8b 100%)', tag: '当季热卖 · 水壶' },
  { bg: 'linear-gradient(115deg, #103c3b 0%, #175f5b 55%, #207c78 100%)', tag: '当季热卖 · 火锅' },
  { bg: 'linear-gradient(115deg, #124544 0%, #186864 55%, #228584 100%)', tag: '当季热卖 · 油汀' },
]

const current = ref(0)
const paused = ref(false)
let timer = null

function start() {
  stop()
  timer = setInterval(() => {
    if (!paused.value) current.value = (current.value + 1) % slides.value.length
  }, 5200)
}

function stop() {
  if (timer) clearInterval(timer)
  timer = null
}

function go(i) {
  current.value = (i + slides.value.length) % slides.value.length
  start()
}

function onKey(e) {
  if (e.key === 'ArrowLeft') go(current.value - 1)
  if (e.key === 'ArrowRight') go(current.value + 1)
}

// 触摸滑动
let startX = 0
let deltaX = 0
function touchStart(e) {
  startX = e.touches[0].clientX
  deltaX = 0
  paused.value = true
}
function touchMove(e) {
  deltaX = e.touches[0].clientX - startX
}
function touchEnd() {
  if (Math.abs(deltaX) > 45) go(current.value + (deltaX < 0 ? 1 : -1))
  paused.value = false
}

onMounted(() => {
  start()
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  stop()
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <section
    id="seasonal"
    class="hero"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @touchstart.passive="touchStart"
    @touchmove.passive="touchMove"
    @touchend="touchEnd"
  >
    <div class="container">
      <div class="hero-card">
        <div class="track" :style="{ transform: `translateX(-${current * 100}%)` }">
          <article
            v-for="(s, i) in slides"
            :key="s.id"
            class="slide"
            :class="{ zoom: i === current }"
            :style="{ background: tones[i % tones.length].bg }"
            @click="emit('view', s)"
          >
            <div class="slide-inner">
              <div class="copy">
                <span class="tag">{{ tones[i % tones.length].tag }}</span>
                <h2>{{ s.name }}</h2>
                <p class="desc">{{ s.desc }}</p>
                <div class="specs">
                  <span v-for="t in s.tags" :key="t">{{ t }}</span>
                </div>
                <div class="row">
                  <button class="cta" @click.stop="emit('view', s)">
                    查看详情
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
                  </button>
                  <button class="link" @click.stop="emit('browse', s)">
                    进入「{{ s.categoryName }}」选购
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              <div class="visual">
                <span class="halo" />
                <img :src="s.img" :alt="s.name" />
              </div>
            </div>
          </article>
        </div>

        <div class="controls">
          <button class="arrow" aria-label="上一张" @click="go(current - 1)">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <div class="dots">
            <button
              v-for="(s, i) in slides"
              :key="s.id"
              :class="{ active: i === current }"
              :aria-label="`第 ${i + 1} 张`"
              @click="go(i)"
            >
              <em v-if="i === current" />
            </button>
          </div>
          <button class="arrow" aria-label="下一张" @click="go(current + 1)">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 22px 0 6px;
}

/* 轮播容器：两侧留白 + 圆角 */
.hero-card {
  position: relative;
  overflow: hidden;
  max-width: 860px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.track {
  display: flex;
  transition: transform 0.7s var(--ease);
}

.slide {
  flex: 0 0 100%;
  color: #e9e7e2;
  cursor: pointer;
}

.slide-inner {
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  align-items: center;
  gap: 16px;
  height: 280px;
  padding: 0 42px;
}

.tag {
  padding: 2px 10px;
  border: 1px solid rgba(233, 231, 226, 0.28);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: #d8d5cf;
}

.copy h2 {
  margin: 10px 0 4px;
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #f2f1ee;
}

.desc {
  max-width: 480px;
  color: rgba(233, 231, 226, 0.6);
  font-size: 12px;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.specs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 12px;
}

.specs span {
  padding: 2px 9px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #cfcbc4;
}

.row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.price {
  color: #a8d8d4;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.price i {
  font-style: normal;
  font-size: 12px;
  margin-right: 2px;
}

.origin {
  color: rgba(233, 231, 226, 0.4);
  font-size: 12px;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: 4px;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.94);
  color: #16625f;
  font-size: 12.5px;
  letter-spacing: 1px;
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), background 0.3s;
}

.cta svg {
  transition: transform 0.3s var(--ease);
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 2px;
  color: rgba(233, 231, 226, 0.78);
  font-size: 12.5px;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(233, 231, 226, 0.3);
  transition: color 0.25s, border-color 0.25s;
}

.link svg {
  transition: transform 0.3s var(--ease);
}

.link:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.7);
}

.link:hover svg {
  transform: translateX(3px);
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

.cta:hover svg {
  transform: translateX(3px);
}

.visual {
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
}

.halo {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 68%);
}

/* 图片尺寸收敛 */
.visual img {
  position: relative;
  width: 150px;
  height: 150px;
  object-fit: contain;
  filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.35));
  transform: scale(0.94);
  transition: transform 0.9s var(--ease);
}

.slide.zoom .visual img {
  transform: scale(1);
}

.controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.arrow {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1px solid rgba(233, 231, 226, 0.3);
  color: #dcd9d3;
  transition: background 0.25s, border-color 0.25s, color 0.25s;
}

.arrow:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(233, 231, 226, 0.5);
  color: #fff;
}

.dots {
  display: flex;
  gap: 8px;
}

.dots button {
  width: 22px;
  height: 4px;
  border-radius: 999px;
  background: rgba(233, 231, 226, 0.28);
  transition: background 0.3s;
}

.dots button.active {
  width: 34px;
}

.dots button em {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: #a8d8d4;
  animation: grow 5.2s linear forwards;
  transform-origin: left;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (max-width: 860px) {
  .slide-inner {
    grid-template-columns: 1fr;
    height: auto;
    padding: 26px 24px 54px;
    text-align: left;
  }

  .visual {
    display: none;
  }

  .copy h2 {
    font-size: 17px;
  }

  .specs,
  .desc {
    display: none;
  }
}

/* 手机端细化 */
@media (max-width: 780px) {
  .hero {
    padding: 14px 0 0;
  }

  .hero-card {
    border-radius: var(--radius);
  }

  .slide-inner {
    padding: 24px 20px 66px;
  }

  /* 描述在手机上保留一行，规格标签仍隐藏 */
  .desc {
    display: -webkit-box;
    font-size: 12px;
  }

  .row {
    flex-wrap: wrap;
    gap: 8px 10px;
  }

  .cta,
  .link {
    padding: 8px 16px;
  }

  /* 触屏下放大控件，避免误触 */
  .controls {
    bottom: 14px;
    gap: 12px;
  }

  .arrow {
    width: 34px;
    height: 34px;
  }

  .dots button {
    width: 16px;
    height: 4px;
  }

  .dots button.active {
    width: 26px;
  }
}
</style>
