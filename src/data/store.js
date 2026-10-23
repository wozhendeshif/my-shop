// 门店信息（可在下方直接修改）
export const store = {
  name: '美的慧生活电器专卖店',
  branch: '太原小商品店',
  boss: '刘老板',
  address: '山西省太原市尖草坪区小商品批发市场五金四厅75号',
  phone: '136-236-51408',
  wechat: 'l13623651408',
  hours: '每日 8:00 - 19:00',
  // 高德坐标 (GCJ02)，用于地图定位
  lng: 112.560836,
  lat: 37.906184,
}

// GCJ02 -> BD09（百度地图坐标转换）
function outOfChina(lng, lat) {
  return lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271
}
function tLat(x, y) {
  let r = -100 + 2 * x + 3 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x))
  r += ((20 * Math.sin(6 * x * Math.PI) + 20 * Math.sin(2 * x * Math.PI)) * 2) / 3
  r += ((20 * Math.sin(y * Math.PI) + 40 * Math.sin((y / 3) * Math.PI)) * 2) / 3
  r += ((160 * Math.sin((y / 12) * Math.PI) + 320 * Math.sin((y * Math.PI) / 30)) * 2) / 3
  return r
}
function tLng(x, y) {
  let r = 300 + x + 2 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x))
  r += ((20 * Math.sin(6 * x * Math.PI) + 20 * Math.sin(2 * x * Math.PI)) * 2) / 3
  r += ((20 * Math.sin(x * Math.PI) + 40 * Math.sin((x / 3) * Math.PI)) * 2) / 3
  r += ((150 * Math.sin((x / 12) * Math.PI) + 300 * Math.sin((x / 30) * Math.PI)) * 2) / 3
  return r
}

export function toBd09(lng, lat) {
  if (outOfChina(lng, lat)) return { lng, lat }
  const A = 6378245.0
  const EE = 0.00669342162296594323
  let dLat = tLat(lng - 105, lat - 35)
  let dLng = tLng(lng - 105, lat - 35)
  const rad = (lat / 180) * Math.PI
  let magic = Math.sin(rad)
  magic = 1 - EE * magic * magic
  const sq = Math.sqrt(magic)
  dLat = (dLat * 180) / (((A * (1 - EE)) / (magic * sq)) * Math.PI)
  dLng = (dLng * 180) / ((A / sq) * Math.cos(rad) * Math.PI)
  return { lng: lng + dLng, lat: lat + dLat }
}

// 百度地图 iframe（无需 Key）
export const baiduMapUrl = (() => {
  const b = toBd09(store.lng, store.lat)
  return (
    'https://api.map.baidu.com/marker?location=' +
    b.lat +
    ',' +
    b.lng +
    '&title=' +
    encodeURIComponent(store.name) +
    '&content=' +
    encodeURIComponent(store.address) +
    '&output=html'
  )
})()

// 外部地图跳转链接
export const amapUrl =
  'https://uri.amap.com/marker?position=' +
  store.lng +
  ',' +
  store.lat +
  '&name=' +
  encodeURIComponent(store.name) +
  '&coordinate=gaode&src=myshop&callnative=0'

export const baiduUrl = baiduMapUrl
