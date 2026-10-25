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

// 高德地图（URI API，免 Key，基础标注 / 跳转均可）
export const amapMapUrl =
  'https://uri.amap.com/marker?position=' +
  store.lng +
  ',' +
  store.lat +
  '&name=' +
  encodeURIComponent(store.name) +
  '&coordinate=gaode&src=myshop&callnative=0'

// 外部地图跳转链接（高德 App / 网页版）
export const amapUrl = amapMapUrl
