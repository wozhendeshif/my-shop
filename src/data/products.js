// 美的慧生活 —— 商品数据
// 商品图片使用本地 src/imgs 下的图片（空气能热水器暂无本地图，暂用美的官方 CDN）
import kettle from '../imgs/kettleImage.png'
import bottle from '../imgs/bottleImage.png'
import blender from '../imgs/blenderImage.png'
import cooker from '../imgs/cookerImage.png'
import pressure from '../imgs/pressureImage.png'
import induction from '../imgs/inductionImage.png'
import steam from '../imgs/steamImage.png'
import hotpot from '../imgs/hotpotImage.png'
import stew from '../imgs/stewImage.png'
import pan from '../imgs/panImage.png'
import cookware from '../imgs/cookwareImage.png'
import fan from '../imgs/fanImage.png'
import heater from '../imgs/heaterImage.png'
import dispenser from '../imgs/dispenserImage.png'
import pipeline from '../imgs/pipelineImage.png'
import ewh from '../imgs/ewhImage.png'
import gwh from '../imgs/gwhImage.png'
import purifier from '../imgs/purifierImage.png'

const IMG = 'https://img.midea.cn/'

const im = {
  kettle, // 电水壶
  bottle, // 电热水瓶
  blender, // 料理机（破壁/豆浆）
  cooker, // 电饭煲
  pressure, // 电压力锅
  induction, // 电磁炉
  steam, // 电蒸锅
  hotpot, // 电火锅
  pan, // 电饼铛
  cookware, // 炊具/炒锅
  heater, // 取暖器/油汀
  dispenser, // 饮水机
  pipeline, // 管线机/茶吧机
  ewh, // 电热水器
}

const service = ['正品行货', '全国联保', '送货上门', '七天无理由']

export const categories = [
  {
    id: 'kettle',
    name: '电热水壶',
    en: 'Kettle',
    icon: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@3ec9cf480505d77ede0a447bb659a163ab68d310/images/kettle/MK-SH15Colour102.png',
    desc: '双层防烫 · 速热恒温',
    models: [
      {
        id: 'mk-hj1512',
        name: '美的电热水壶 MK-HJ1512',
        model: 'MK-HJ1512',
        price: 79,
        originPrice: 99,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@3ec9cf480505d77ede0a447bb659a163ab68d310/images/kettle/MK-SH15Colour102.png',
        tags: ['双层防烫', '1.7L大容量', '304不锈钢'],
        sales: '月售 320+',
        hot: true,
        desc: '1800W 大功率速热，约 5 分钟烧开一壶水；双层隔热壶身，外壁不烫手，全程守护饮水安全。',
        features: ['1800W 大功率，5 分钟快速沸腾', '双层防烫结构，外壁低温不烫手', '食品接触级 304 不锈钢内胆', '蒸汽感温自动断电，干烧自动保护', '一键开盖，注水清洁更方便'],
        specs: [['容量', '1.7L'], ['额定功率', '1800W'], ['内胆材质', '304 不锈钢'], ['恒温功能', '不支持'], ['产品尺寸', '220×170×250mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'mk-hj1705',
        name: '美的恒温电热水壶 MK-HJ1705',
        model: 'MK-HJ1705',
        price: 139,
        originPrice: 179,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@3ec9cf480505d77ede0a447bb659a163ab68d310/images/kettle/MK-SH15Colour102.png',
        tags: ['多段恒温', '数显屏', '婴儿冲奶'],
        sales: '月售 210+',
        desc: '45℃/55℃/85℃ 三段恒温自由切换，宝宝冲奶、泡茶、冲咖啡随时取用，温度看得见。',
        features: ['三段恒温，12 小时长效保温', 'LED 数显实时水温', '食品级 316L 不锈钢内胆', '壶盖分离设计，清洁无死角', '双重防干烧保护'],
        specs: [['容量', '1.5L'], ['额定功率', '1500W'], ['内胆材质', '316L 不锈钢'], ['恒温功能', '45/55/85℃ 三段'], ['产品尺寸', '235×180×260mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'mk-sp50e802',
        name: '美的电热水瓶 MK-SP50E802',
        model: 'MK-SP50E802',
        price: 269,
        originPrice: 329,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@3ec9cf480505d77ede0a447bb659a163ab68d310/images/kettle/MK-SH15Colour102.png',
        tags: ['5L大容量', '电动出水', '除氯再沸腾'],
        sales: '月售 120+',
        desc: '5L 超大容量，一键电动出水，全家一天的饮用热水轻松搞定，除氯再沸腾口感更甘甜。',
        features: ['5L 大容量，满足全天饮用', '电动/碰杯双出水模式', '除氯再沸腾，水质更甘甜', '六段保温温度可选', '童锁保护，防误触烫伤'],
        specs: [['容量', '5L'], ['额定功率', '700W'], ['出水方式', '电动/碰杯'], ['保温温度', '6 段可调'], ['产品尺寸', '250×280×380mm'], ['保修', '整机 1 年']],
      },
    ],
  },
  {
    id: 'waterheater',
    name: '热水器',
    en: 'Water Heater',
    icon: im.ewh,
    desc: '速热恒温 · 一级能效',
    models: [
      {
        id: 'F05-15A1(S)',
        name: '美的厨宝 F05-15A1(S)',
        model: 'F05-15A1(S)',
        price: 1599,
        originPrice: 1999,
        img: im.ewh,
        images: ['https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/ewh/F05-15A1(S).png',
           ],
        tags: ['小厨宝', '5升容量', '速热', '厨下隐藏安装'],
        sales: '月售 300+（示例数据，可按实际替换）',
        desc: '5升黄金容量，专为厨房洗涤设计，告别冬天洗碗洗菜冻手；1500W大功率速热，热水源源不断；搭载防电墙技术与水电分离设计，多重安全防护；加厚保温层长效锁温；小巧机身，完美隐藏于水槽下方橱柜，不占空间。',
        features: ['1500W大功率速热', '5L小巧不占空间', '防电墙安全防护', '搪瓷内胆耐腐蚀', '厨下/厨上灵活安装'],
        specs: [
          ['额定功率', '1500W'],
          ['产品容量', '5L'],
          ['内胆材质', '搪瓷内胆（或不锈钢内胆，视实际配置）'],
          ['安全技术', '防电墙技术 / 防干烧 / 超温保护'],
          ['安装方式', '厨下/厨上（支持上出水/下出水）'],
          ['保修', '整机 3 年 / 内胆 5 年（视品牌政策）']
        ]
      },
    ],
  },
  {
    id: 'ricecooker',
    name: '电饭煲',
    en: 'Rice Cooker',
    icon: im.cooker,
    desc: 'IH 电磁加热 · 0涂层',
    models: [
      {
        id: '4052R',
        name: '美的 IH 电饭煲 4052R',
        model: '4052R',
        price: 399,
        originPrice: 499,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/cooker/4052R.jpg',
        tags: ['IH电磁加热', '4L', '0涂层'],
        sales: '月售 260+',
        desc: 'IH 电磁加热环绕包裹米粒，沸腾更充分，米饭粒粒饱满；纯钛 0 涂层内胆，健康更安心。',
        features: ['IH 电磁立体加热', '纯钛 0 涂层内胆', '24 小时智能预约', '多种煮米口感可选', '上盖可拆洗'],
        specs: [['容量', '4L'], ['加热方式', 'IH 电磁'], ['内胆', '纯钛 0 涂层'], ['预约时长', '24h'], ['产品尺寸', '270×270×230mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'mb-fb50easy501',
        name: '美的电饭煲 MB-FB50EASY501',
        model: 'MB-FB50EASY501',
        price: 229,
        originPrice: 299,
        img: im.cooker,
        tags: ['5L大容量', '底盘加热', '一锅多能'],
        sales: '月售 410+',
        desc: '5L 大容量一次满足 6-8 人用餐，煮饭、煮粥、蒸蛋糕一机多用，国民口碑之选。',
        features: ['5L 大容量，全家聚餐无忧', '蜂窝聚能内胆，受热均匀', '8 大功能菜单一键直达', '防溢保湿阀，焖饭更香', '可拆内盖，清洗方便'],
        specs: [['容量', '5L'], ['加热方式', '底盘加热'], ['内胆', '蜂窝聚能'], ['功能', '8 大菜单'], ['产品尺寸', '290×290×250mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'my-yl50easy203',
        name: '美的电压力锅 MY-YL50Easy203',
        model: 'MY-YL50Easy203',
        price: 349,
        originPrice: 429,
        img: im.pressure,
        tags: ['5L', '一锅双胆', '开盖收汁'],
        sales: '月售 190+',
        desc: '煮饭炖肉双胆分工，一键泄压安全无忧；开盖收汁功能，浓香入味堪比慢炖。',
        features: ['不锈钢+不粘双内胆', '开盖收汁，浓香入味', '智能控压，10 重保护', '多种口感可选（软糯/适中/有嚼劲）', '一锅多用，煮饭炖汤样样行'],
        specs: [['容量', '5L'], ['额定功率', '1000W'], ['压力', '70kPa'], ['内胆', '双内胆配置'], ['安全保护', '10 重'], ['保修', '整机 1 年']],
      },
    ],
  },
  {
    id: 'induction',
    name: '电磁炉',
    en: 'Induction Cooker',
    icon: im.induction,
    desc: '大火猛炒 · 均匀控温',
    models: [
      {
        id: 'c21-wt2118',
        name: '美的电磁炉 C21-WT2118',
        model: 'C21-WT2118',
        price: 199,
        originPrice: 259,
        img: im.induction,
        tags: ['2100W', '防滑面板', '送汤锅'],
        sales: '月售 350+',
        desc: '2100W 大火力，爆炒够劲；汉森高强度面板，耐磨易洁，标配汤锅炒锅到手即用。',
        features: ['2100W 大火力速热', '汉森高强度黑晶面板', '8 大烹饪功能', '定时预约，免看管', '赠汤锅+炒锅'],
        specs: [['额定功率', '2100W'], ['面板材质', '汉森黑晶'], ['功能', '8 大烹饪模式'], ['定时', '最长 3 小时'], ['产品尺寸', '360×280×60mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'c21-rt2166',
        name: '美的电磁炉 C21-RT2166',
        model: 'C21-RT2166',
        price: 259,
        originPrice: 329,
        img: im.induction,
        tags: ['恒匀火', '滑控调温', '低频续煮'],
        sales: '月售 160+',
        desc: '恒匀火技术让锅内温度稳定不忽高忽低，小火慢炖也能细腻控制，汤更浓味更醇。',
        features: ['恒匀火持续加热', '触控滑条精准调温', '低频续煮技术', '9 档火力调节', '过热/防干烧保护'],
        specs: [['额定功率', '2100W'], ['面板材质', '微晶面板'], ['控温', '9 档火力'], ['定时', '最长 4 小时'], ['产品尺寸', '365×285×62mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'c21-ih2105',
        name: '美的电磁炉 C21-IH2105',
        model: 'C21-IH2105',
        price: 329,
        originPrice: 399,
        img: im.induction,
        tags: ['IH变频', '静音', '智能识别锅具'],
        sales: '月售 90+',
        desc: 'IH 变频技术加热更快更均匀，运行低噪安静；智能识别锅具材质，不合适自动提醒。',
        features: ['IH 变频高速加热', '低噪音风道设计', '智能锅具识别', '宽电压适应 176-264V', '儿童锁保护'],
        specs: [['额定功率', '2100W'], ['技术', 'IH 变频'], ['面板材质', '汉森黑晶'], ['电压适应', '176-264V'], ['产品尺寸', '355×280×58mm'], ['保修', '整机 1 年']],
      },
    ],
  },
  {
    id: 'blender',
    name: '破壁机',
    en: 'High-speed Blender',
    icon: im.blender,
    desc: '高速破壁 · 静音降噪',
    models: [
      {
        id: '2501B',
        name: '美的搅拌机 2501B',
        model: '2501B',
        price: 499,
        originPrice: 599,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/blender/2501B.jpg',
        tags: ['破壁机', '静音降噪', '一键清洗'],
        sales: '月售 450+',
        desc: '大功率高速电机搭配4叶精钢刀头，瞬间击碎食材细胞壁，饮品口感细腻无渣；加厚高硼硅玻璃杯体，耐冷耐热；支持一键自清洁与多重降噪设计。',
        features: ['高速破壁细腻无渣',  '加厚高硼硅玻璃杯', '一键自清洁'],
        specs: [
          ['额定功率', '加热800W + 搅拌1000W'],
          ['产品容量', '1.2L'],
          ['电机转速', '约 40000转/分'],
          ['刀头配置', '4叶精钢钝刀'],
          ['杯体材质', '高硼硅玻璃'],
          ['保修', '整机 1 年']
        ]
      },
      {
        id: 'mj-pb12x3-101',
        name: '美的破壁机 MJ-PB12X3-101',
        model: 'MJ-PB12X3-101',
        price: 399,
        originPrice: 499,
        img: im.blender,
        tags: ['入门推荐', '冷饮', '钢化玻璃'],
        sales: '月售 175+',
        desc: '冷饮破壁利器，果蔬汁、奶昔、沙冰口感细腻无渣，高硼硅玻璃杯体坚固耐用。',
        features: ['高硼硅加厚玻璃杯', '4 叶不锈钢刀组', '沙冰/果蔬/玉米汁多模式', '点动功能随心调控', '杯体分离记忆定位'],
        specs: [['容量', '1.2L'], ['额定功率', '900W'], ['转速', '26000rpm'], ['杯体', '高硼硅玻璃'], ['产品尺寸', '200×200×400mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'mj-pb40e3',
        name: '美的静音破壁机 MJ-PB40E3',
        model: 'MJ-PB40E3',
        price: 699,
        originPrice: 899,
        img: im.blender,
        tags: ['一体降噪', '真空保鲜', '免手洗'],
        sales: '月售 60+',
        desc: '一体式降噪腔体，低至 49 分贝轻声破壁；真空搅打防止氧化，果汁放置半天不褪色。',
        features: ['一体降噪腔体 ≤49dB', '真空破壁，防止氧化', '自动清洗烘干免手洗', '研磨/绞肉多用途', '24 小时预约'],
        specs: [['容量', '1.5L'], ['额定功率', '1300W'], ['噪音', '≤49dB'], ['功能', '研磨/绞肉/热饮'], ['产品尺寸', '230×230×450mm'], ['保修', '整机 1 年']],
      },
    ],
  },
  {
    id: 'panmaker',
    name: '电饼铛',
    en: 'Electric Baking Pan',
    icon: im.pan,
    desc: '双面加热 · 悬浮烙烤',
    models: [
      {
        id: 'jk30easy201',
        name: '美的电饼铛 JK30Easy201',
        model: 'JK30Easy201',
        price: 149,
        originPrice: 189,
        img: im.pan,
        tags: ['双面加热', '加深烤盘', '不粘易洁'],
        sales: '月售 240+',
        desc: '上下双面同时加热，烙饼不翻面也能两面金黄；加深烤盘厚饼、馅饼轻松驾驭。',
        features: ['上下盘独立控温', '加深烤盘容量提升', '不粘涂层一擦即净', '悬浮式烤盘自适应厚度', '过热自动断电'],
        specs: [['烤盘直径', '30cm'], ['额定功率', '1200W'], ['加热', '双面加热'], ['涂层', '不粘涂层'], ['产品尺寸', '350×350×120mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'jk2617',
        name: '美的电饼铛 JK2617',
        model: 'JK2617',
        price: 129,
        originPrice: 159,
        img: im.pan,
        tags: ['小巧', '家用入门', '快热'],
        sales: '月售 300+',
        desc: '26cm 紧凑机身不占台面，速热烤盘 3 分钟预热完成，早餐煎蛋烙饼说做就做。',
        features: ['26cm 小巧不占地', '速热烤盘 3 分钟预热', '烙/烤/煎一机多用', '指示灯提示工作状态', '防滑底座稳固放置'],
        specs: [['烤盘直径', '26cm'], ['额定功率', '1000W'], ['加热', '双面加热'], ['外观', '朗纹烤漆'], ['产品尺寸', '320×320×110mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'jk30d2',
        name: '美的电饼铛 JK30D2',
        model: 'JK30D2',
        price: 199,
        originPrice: 249,
        img: im.pan,
        tags: ['可拆洗', '旋钮控温', '煎烤烙'],
        sales: '月售 110+',
        desc: '烤盘可拆卸水洗，清洁不再费力；旋钮精准控温，煎烤烙随心切换。',
        features: ['烤盘可拆直接水洗', '旋钮式精准控温', '180° 展平变煎烤炉', '防烫手柄', '油盘收集多余油脂'],
        specs: [['烤盘直径', '30cm'], ['额定功率', '1500W'], ['加热', '双面/展平两用'], ['清洁', '烤盘可拆洗'], ['产品尺寸', '360×360×130mm'], ['保修', '整机 1 年']],
      },
    ],
  },
  {
    id: 'heater',
    name: '电暖器',
    en: 'Electric Heater',
    icon: im.heater,
    desc: '当季热卖 · 全屋速暖',
    models: [
      {
        // 已改信息未改图片
        id: 'HYX22N',
        name: '美的13片油汀 HYX22N',
        model: 'HYX22N',
        price: 399,
        originPrice: 499,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/heater/HYX22N.png',
        tags: ['油汀', '整屋循环暖', '防水IPX4'],
        sales: '月售 280+',
        hot: true,
        desc: '镂空散热片，快速升温；双尾片安全防烫；中石化导热油；倾倒自动断电；双重过热保护',
        features: ['镂空散热设计', '自然对流整屋循环', '过热自动断电', '智能恒温省电', '小巧机身 方便放置'],
        specs: [['额定功率', '2200W'], ['加热方式', '鱼骨油路技术'], ['防摔摔倒', '摔倒自动断电'], ['环保油漆材料', '无毒无害'], ['产品尺寸', '280×435×640mm'], ['保修', '整机 1 年']],
      },
      {
        id: '033-410MM',
        name: '小太阳 033-410MM',
        model: '033-410MM',
        price: 249,
        originPrice: 299,
        img: ['https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/heater/yangzi033-410MM-1.jpg',
          'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/heater/yangzi033-410MM-2.jpg',
        'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/heater/yangzi033-410MM-3.jpg',
      
        ],
        tags: ['小太阳', '局部定向取暖', '即开即热'],
        sales: '月售 120+',
        hot: true,
        desc: '反射罩定向聚热，开机几秒即热；适合书桌旁、沙发边单人局部取暖；倾倒自动断电、过热保护，小巧便携；仅适合1-2㎡定点取暖，使用时远离可燃物。',
        features: ['定向反射聚热', '即开即热', '防倾倒自动断电', '过热保护', '小巧便携'],
        specs: [
        ['额定功率', '800W/1000W（按型号）'],
        ['加热方式', '红外辐射反射式'],
        ['防摔倒', '倾倒自动断电'],
        ['外壳材料', '阻燃材料'],
        ['产品尺寸', '约 300×250×450mm'],
        ['保修', '整机 1 年']  ]
      },
      {
        id: 'T-019',
        name: '小太阳 T-019',
        model: 'T-019',
        price: 459,
        originPrice: 559,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/heater/yangziT-019.jpg',
        tags: ['小太阳', '局部定向取暖', '即开即热'],
        sales: '月售 120+（示例数据，可按实际替换）',
        hot: true,
        desc: '反射罩定向聚热，开机几秒即热；适合书桌旁、沙发边单人局部取暖；倾倒自动断电、过热保护，小巧便携；仅适合1-2㎡定点取暖，使用时远离可燃物。',
        features: ['定向反射聚热', '即开即热', '防倾倒自动断电', '过热保护', '小巧便携'],
        specs: [
        ['额定功率', '800W/1000W（按型号）'],
        ['加热方式', '红外辐射反射式'],
        ['防摔倒', '倾倒自动断电'],
        ['外壳材料', '阻燃材料'],
        ['产品尺寸', '约 300×250×450mm'],
        ['保修', '整机 1 年']  ]  
      },
      {
        id: 'T-025',
        name: '小太阳 T-025',
        model: 'T-025',
        price: 459,
        originPrice: 559,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/heater/yangziT-025.jpg',
        tags: ['小太阳', '局部定向取暖', '即开即热'],
        sales: '月售 120+',
        hot: true,
        desc: '反射罩定向聚热，开机几秒即热；适合书桌旁、沙发边单人局部取暖；倾倒自动断电、过热保护，小巧便携；仅适合1-2㎡定点取暖，使用时远离可燃物。',
        features: ['定向反射聚热', '即开即热', '防倾倒自动断电', '过热保护', '小巧便携'],
        specs: [
        ['额定功率', '800W/1000W（按型号）'],
        ['加热方式', '红外辐射反射式'],
        ['防摔倒', '倾倒自动断电'],
        ['外壳材料', '阻燃材料'],
        ['产品尺寸', '约 300×250×450mm'],
        ['保修', '整机 1 年']  ]  
      },
      {
        id: 'shuinuan',
        name: '水暖一体机',
        model: 'T-shuinuan',
        price: 459,
        originPrice: 559,
        img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/heater/shuinuan.jpg',
        tags: ['水暖一体机', '整屋循环暖', '不干燥'],
        sales: '月售 150+（示例数据，可按实际替换）',
        desc: '水暖加热不干燥，金属面板防烫易清洁；内置水电分离加热管，水循环自然对流整屋升温；提供14/16/18柱多规格可选；底部万向轮设计移动便捷。',
        features: ['水电分离安全加热', '水循环整屋对流', '不干燥不闷热', '金属防烫面板', '万向轮移动方便'],
        specs: [
          ['额定功率', '视柱数而定（如1800W-2500W）'],
          ['加热方式', '内置加热管水循环'],
          ['防摔倒', '防干烧/倾倒自动断电（视具体配置）'],
          ['外壳材料', '金属面板'],
          ['产品尺寸', '视柱数而定（14/16/18柱可选）'],
          ['保修', '整机 1 年']
        ]
      },
      {
      id: 'HD2201',
      name: '欧式空气对流电暖炉 HD2201',
      model: 'HD2201',
      price: 299, // 示例价格，可根据实际情况修改
      originPrice: 399, // 示例价格，可根据实际情况修改
      img: 'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@505a68db75ef484398088bdc130ab445714fbbd8/images/HD2201.png',
      tags: ['欧式对流', '石墨烯发热', '低噪无光', '整屋升温'],
      sales: '月售 320+',
      desc: '碳金云母片发热，开机5秒即热，大面积快速供热；欧式空气对流设计，静音无光无氧耗，不扰眠更舒适；附带创新一体式合金烘衣架；1100W/2200W两档功率调节，适用10-25㎡空间。',
      features: ['碳金云母快速发热', '静音无光不扰眠', '两档功率调节', '一体式合金烘衣架', '自然对流整屋循环'],
      specs: [
        ['额定功率', '2200W（1100W/2200W两档可调）'],
        ['加热方式', '碳金云母片发热（空气对流）'],
        ['适用面积', '10㎡-25㎡（实验室条件下）'],
        ['运行噪音', '静音运行'],
        ['特殊功能', '一体式合金烘衣架'],
        ['保修', '整机 1 年']
      ]
    }
    ],
  },
  {
    id: 'dispenser',
    name: '饮水机',
    en: 'Water Dispenser',
    icon: im.dispenser,
    desc: '即热直饮 · 净饮一体',
    models: [
      {
        id: 'yd1321s-w',
        name: '美的立式饮水机 YD1321S-W',
        model: 'YD1321S-W',
        price: 399,
        originPrice: 499,
        img: im.dispenser,
        tags: ['立式', '温热双出水', '下置水桶'],
        sales: '月售 130+',
        desc: '下置水桶设计换水不费力，温热双出水随取随用；食品级内胆，家人饮水更安心。',
        features: ['下置式水桶换水轻松', '温/热双出水口', '食品级不锈钢内胆', '童锁防烫出水', '缺水干烧保护'],
        specs: [['类型', '立式温热'], ['制热水温', '85-95℃'], ['水桶', '下置式'], ['功率', '500W'], ['产品尺寸', '310×310×960mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'jr1455t-01',
        name: '美的台式即热饮水机 JR1455T-01',
        model: 'JR1455T-01',
        price: 299,
        originPrice: 379,
        img: im.pipeline,
        tags: ['即热', '3秒出水', '台式'],
        sales: '月售 200+',
        desc: '厚膜即热 3 秒出热水，喝多少烧多少不千滚；六段温度一键直达，泡茶冲奶都合适。',
        features: ['厚膜即热 3 秒速热', '六段温度可选', '无内胆不反复加热', '台式小巧免安装', '缺水自动提醒'],
        specs: [['类型', '台式即热'], ['温度档位', '6 段'], ['出水速度', '即热即出'], ['功率', '1600W'], ['产品尺寸', '300×200×300mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'mro1891-100g',
        name: '美的净水机 MRO1891-100G',
        model: 'MRO1891-100G',
        price: 1299,
        originPrice: 1599,
        img: im.dispenser,
        tags: ['RO反渗透', '100G大通量', '厨下式'],
        sales: '月售 90+',
        desc: 'RO 反渗透深度过滤，直饮级水质；100G 大通量接水不排队，一体化水路防漏更安心。',
        features: ['RO 反渗透 4 级精滤', '100G 大通量出水快', '智能滤芯寿命提醒', '一体式水路防漏水', '低废水比更省水'],
        specs: [['通量', '100G'], ['过滤', 'RO 反渗透'], ['废水比', '1.5:1'], ['安装', '厨下式'], ['产品尺寸', '430×170×420mm'], ['保修', '整机 1 年']],
      },
    ],
  },
  {
    id: 'teabar',
    name: '茶吧机',
    en: 'Tea Bar Machine',
    icon: im.pipeline,
    desc: '多段控温 · 下置水桶',
    models: [
      {
        id: 'K602',
        name: '奥克斯茶吧机 K602',
        model: 'K602',
        price: 599,
        originPrice: 729,
        img: ['https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/pipeline/K602.jpg',
              'https://cdn.jsdelivr.net/gh/wozhendeshif/my-shop@417893689bb687a6fd1c450642c40ee90082bafa/images/pipeline/K602-2.jpg' ],
        tags: ['茶吧机', '三合一操控', '长效保温', '防干烧'],
        sales: '月售 180+',
        desc: '奥克斯K602新款茶吧机，枪灰/燕麦灰双色可选。触控彩屏、遥控、按键三合一操控，一键启动更便捷。304不锈钢水壶支持多档调温（2-24小时保温），搭配经典直筒保温壶（1-24小时保温）。具备无水禁启、防溢水防干烧多重安全防护，满足全家健康饮水需求。',
        features: ['彩屏/遥控/按键三合一', '304不锈钢水壶', '多档精准调温', '双壶长效保温', '防溢水防干烧'],
        specs: [
          ['产品型号', 'K602'],
          ['颜色分类', '枪灰 / 燕麦灰'],
          ['操控方式', '触控彩屏 + 遥控 + 按键'],
          ['水壶材质', '304不锈钢'],
          ['保温时长', '烧水壶2-24小时 / 保温壶1-24小时'],
          ['裸机尺寸', '370×325×860mm（加靠背总高1220mm）'],
          ['包装尺寸', '410×375×925mm'],
          ['保修', '整机 1 年']
        ],
      },
      {
        id: 'mk-he3001',
        name: '美的茶吧机 MK-HE3001',
        model: 'MK-HE3001',
        price: 699,
        originPrice: 899,
        img: im.pipeline,
        tags: ['即热式', '恒温壶', '触摸屏'],
        sales: '月售 65+',
        desc: '即热模块+恒温壶双系统，煮茶泡茶分区操作；高清触控大屏，温度水量一目了然。',
        features: ['即热+恒温壶双系统', 'LED 触控大屏', '恒温 12 小时保温', '自动除垢提醒', '底座旋转取水'],
        specs: [['类型', '立式即热茶吧机'], ['温度档位', '8 段'], ['保温', '12 小时'], ['功率', '1800W'], ['产品尺寸', '330×330×1150mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'jr2182t',
        name: '美的茶吧机 JR2182T',
        model: 'JR2182T',
        price: 499,
        originPrice: 599,
        img: im.pipeline,
        tags: ['入门推荐', '双出水', '简约'],
        sales: '月售 95+',
        desc: '冷热双出水口设计，取水互不干扰；简约黑白配色百搭各类家装风格。',
        features: ['冷/热双出水口', '四段温度调节', '防干烧自动断电', '钢化玻璃面板', '底部万向轮'],
        specs: [['类型', '立式冷热'], ['温度档位', '4 段'], ['面板', '钢化玻璃'], ['功率', '550W'], ['产品尺寸', '310×310×1000mm'], ['保修', '整机 1 年']],
      },
    ],
  },
  {
    id: 'multipot',
    name: '多功能锅',
    en: 'Multi Cooker',
    icon: im.hotpot,
    desc: '煎烤蒸煮炖 · 一锅全能',
    models: [
      {
        id: 'mc-dy26easy201',
        name: '美的多功能电火锅 MC-DY26Easy201',
        model: 'MC-DY26Easy201',
        price: 249,
        originPrice: 319,
        img: im.hotpot,
        tags: ['5L', '鸳鸯分格', '聚能底盘'],
        sales: '月售 230+',
        hot: true,
        desc: '5L 鸳鸯分格一锅两味，涮煮炖炸一锅搞定家庭聚会；聚能底盘加热均匀，汤底沸腾更快。',
        features: ['鸳鸯分格一锅两味', '5L 大容量 6-8 人聚餐', '聚能蜂窝底盘速热', '四档火力旋钮调节', '防烫双耳+可视锅盖'],
        specs: [['容量', '5L'], ['额定功率', '1500W'], ['分格', '鸳鸯双格'], ['火力', '4 档'], ['产品尺寸', '370×370×180mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'zg28easy501',
        name: '美的电蒸锅 ZG28Easy501',
        model: 'ZG28Easy501',
        price: 299,
        originPrice: 379,
        img: im.steam,
        tags: ['三层大容量', '免看管', '12L'],
        sales: '月售 140+',
        hot: true,
        desc: '三层蒸格 12L 大容量，上蒸下煮同时进行；免看管定时断电，蒸包子蒸鱼一锅出。',
        features: ['三层蒸格 12L 大容量', '定时免看管自动断电', '快速出蒸汽锁鲜', '可叠加收纳省空间', '防干烧保护'],
        specs: [['容量', '12L'], ['额定功率', '1300W'], ['蒸格', '三层'], ['定时', '最长 60 分钟'], ['产品尺寸', '360×360×400mm'], ['保修', '整机 1 年']],
      },
      {
        id: 'md-wb40special701',
        name: '美的电炖锅 MD-WB40SPECIAL701',
        model: 'MD-WB40SPECIAL701',
        price: 329,
        originPrice: 399,
        img: im.stew,
        tags: ['4L', '隔水炖', '陶瓷内胆'],
        sales: '月售 100+',
        hot: true,
        desc: '隔水慢炖营养不流失，白瓷内胆炖汤更清甜；睡前预约，早晨就能喝到一盅热汤。',
        features: ['隔水炖营养零流失', '白瓷陶瓷内胆易洁', '24 小时预约', '炖汤/煮粥/燕窝多模式', '防溢防干烧'],
        specs: [['容量', '4L'], ['额定功率', '500W'], ['内胆', '白瓷'], ['预约', '24h'], ['产品尺寸', '320×320×300mm'], ['保修', '整机 1 年']],
      },
    ],
  },
  {
    id: 'wok',
    name: '炒锅',
    en: 'Wok',
    icon: im.cookware,
    desc: '不粘耐磨 · 电磁炉通用',
    models: [
      {
        id: 'ct32a1',
        name: '美的麦饭石不粘炒锅 CT32A1',
        model: 'CT32A1',
        price: 199,
        originPrice: 259,
        img: im.cookware,
        tags: ['32cm', '麦饭石涂层', '少油不粘'],
        sales: '月售 280+',
        desc: '麦饭石不粘涂层，少油少烟更健康；加厚锅身蓄热均匀，爆炒也能锁住镬气。',
        features: ['麦饭石不粘涂层', '加厚复合锅底导热均匀', '电磁炉/燃气灶通用', '防烫胶木手柄', '少油烟易清洗'],
        specs: [['口径', '32cm'], ['材质', '铝合金+麦饭石涂层'], ['适用', '电磁炉/燃气'], ['锅深', '9cm'], ['重量', '约 1.6kg'], ['保修', '涂层 6 个月']],
      },
      {
        id: 'ct34a2',
        name: '美的精铁无涂层炒锅 CT34A2',
        model: 'CT34A2',
        price: 259,
        originPrice: 329,
        img: im.cookware,
        tags: ['34cm', '无涂层', '物理不粘'],
        sales: '月售 160+',
        desc: '精铁一体锻造无化学涂层，高温物理氮化处理越用越不粘，锅气十足炒菜更香。',
        features: ['精铁锻造无涂层', '物理氮化防锈处理', '聚能圆底爆炒锅气足', '人体工学防烫手柄', '适用电磁炉与明火'],
        specs: [['口径', '34cm'], ['材质', '精铁'], ['处理工艺', '氮化防锈'], ['适用', '电磁炉/燃气'], ['重量', '约 1.9kg'], ['保修', '锅体 1 年']],
      },
      {
        id: 'ct36a3',
        name: '美的钛钻不粘炒锅 CT36A3',
        model: 'CT36A3',
        price: 319,
        originPrice: 399,
        img: im.cookware,
        tags: ['36cm', '钛钻耐磨', '可进烤箱'],
        sales: '月售 75+',
        desc: '钛钻晶体涂层耐磨等级提升 5 倍，钢铲也能用；大口径一锅炒全家，连锅把都能进烤箱。',
        features: ['钛钻晶体耐磨涂层', '36cm 大口径家庭聚餐', '可拆卸手柄可进烤箱', '复合厚底蓄热均匀', '锅盖可立沥水'],
        specs: [['口径', '36cm'], ['材质', '铝合金+钛钻涂层'], ['适用', '电磁炉/燃气/烤箱'], ['锅深', '10cm'], ['重量', '约 2.1kg'], ['保修', '涂层 6 个月']],
      },
    ],
  },
]

// 多图支持：把每个商品的 img（字符串或数组）与 images（数组）归一化，
// 保证始终同时存在 images（详情弹窗缩略图用）和 img（卡片/轮播单图用）。
// 这样无论数据里只写 img、把 img 写成数组、还是只写 images，都能正确展示。
categories.forEach((c) => {
  c.models.forEach((m) => {
    const list = []
    if (Array.isArray(m.images)) list.push(...m.images)
    if (Array.isArray(m.img)) list.push(...m.img)
    else if (m.img) list.push(m.img)
    const dedup = [...new Set(list)]
    if (dedup.length) {
      m.images = dedup
      m.img = dedup[0]
    }
  })
})

// 当季热卖（轮播展示）
export const seasonalIds = ['HYX22N','033-410MM','T-019','shuinuan','HD2201']

export const allModels = categories.flatMap((c) =>
  c.models.map((m) => ({ ...m, categoryId: c.id, categoryName: c.name }))
)

export const serviceTags = service
