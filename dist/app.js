const products = [
  ['#办公室零食记录 海苔脆片开袋分享','海苔脆片｜袋装'],
  ['#下午茶记录 黄油曲奇口感分享','黄油曲奇｜盒装'],
  ['#追剧零食记录 巧克力夹心饼干试吃','巧克力夹心饼干｜袋装'],
  ['#周末宅家记录 玉米脆条开袋试吃','玉米脆条｜分享装'],
  ['#酸甜零食记录 山楂条日常分享','山楂条｜独立包装'],
  ['#桌边零食记录 芝士小圆饼试吃','芝士小圆饼｜袋装'],
  ['#追剧零食分享 焦糖爆米花开袋记录','焦糖爆米花｜桶装'],
  ['#下午茶记录 冻干草莓口感分享','冻干草莓｜罐装'],
  ['#小零食记录 紫薯脆片开袋分享','紫薯脆片｜袋装'],
  ['#办公室零食 咸蛋黄锅巴试吃记录','咸蛋黄锅巴｜袋装'],
  ['#咸香零食记录 蚕豆开袋分享','香酥蚕豆｜袋装'],
  ['#追剧零食记录 芥末青豆口感分享','芥末青豆｜罐装'],
  ['#下午茶零食 混合果干日常分享','混合果干｜袋装'],
  ['#办公桌零食 酸奶块开袋记录','酸奶块｜袋装'],
  ['#茶点记录 芝麻薄脆口感分享','芝麻薄脆｜盒装'],
  ['#周末零食记录 椒盐小麻花试吃','椒盐小麻花｜袋装'],
  ['#追剧零食 糯米锅巴开袋分享','糯米锅巴｜袋装'],
  ['#下午茶记录 椰蓉小方日常分享','椰蓉小方｜盒装'],
  ['#办公室茶点 牛乳小饼试吃记录','牛乳小饼｜袋装'],
  ['#甜点记录 肉松小贝下午茶分享','肉松小贝｜盒装'],
  ['#追剧零食记录 夹心威化开袋试吃','夹心威化｜袋装'],
  ['#桌边零食 海盐苏打饼干口感分享','海盐苏打饼干｜袋装'],
  ['#下午茶记录 蔓越莓曲奇日常分享','蔓越莓曲奇｜盒装'],
  ['#甜点时间 蜂蜜小蛋糕试吃记录','蜂蜜小蛋糕｜袋装'],
  ['#周末茶点 红豆铜锣烧切开分享','红豆铜锣烧｜盒装'],
  ['#下午茶记录 蛋黄酥口感分享','蛋黄酥｜盒装'],
  ['#茶点记录 抹茶雪花酥开袋分享','抹茶雪花酥｜袋装'],
  ['#糖果试吃 芒果软糖日常分享','芒果软糖｜袋装'],
  ['#下午茶甜品 桃子果冻试吃记录','桃子果冻｜杯装'],
  ['#办公室零食 奶香米饼开袋分享','奶香米饼｜袋装'],
  ['#咸辣零食记录 香辣豆干试吃','香辣豆干｜袋装'],
  ['#追剧零食 卤味鹌鹑蛋开袋分享','卤味鹌鹑蛋｜袋装'],
  ['#小零食记录 泡椒笋尖口感分享','泡椒笋尖｜袋装'],
  ['#办公室零食 手撕素肉试吃记录','手撕素肉｜袋装'],
  ['#咸香零食 烤鱼片开袋分享','烤鱼片｜袋装'],
  ['#追剧零食 鱿鱼丝口感记录','鱿鱼丝｜袋装'],
  ['#桌边零食 猪肉脯试吃分享','猪肉脯｜袋装'],
  ['#加班零食 烤鸡肉条开袋记录','烤鸡肉条｜袋装'],
  ['#周末零食 烤肠切块分享','烤肠｜袋装'],
  ['#追剧零食 午餐肉小方试吃','午餐肉小方｜罐装'],
  ['#下午加餐 即食玉米开袋记录','即食玉米｜袋装'],
  ['#秋日零食 板栗仁口感分享','板栗仁｜袋装'],
  ['#下班零食 盐焗花生开袋分享','盐焗花生｜袋装'],
  ['#追剧零食 五香瓜子日常记录','五香瓜子｜袋装'],
  ['#下午茶坚果 琥珀核桃试吃分享','琥珀核桃｜罐装'],
  ['#办公室坚果 巴旦木开袋记录','巴旦木｜袋装'],
  ['#桌边零食 腰果口感分享','腰果｜罐装'],
  ['#下午茶坚果 开口松子日常分享','开口松子｜袋装'],
  ['#追剧零食 开心果开袋记录','开心果｜袋装'],
  ['#小零食记录 山药脆片试吃分享','山药脆片｜袋装'],
  ['#下午茶记录 红薯干口感分享','红薯干｜袋装'],
  ['#果干零食 无花果干切开记录','无花果干｜袋装'],
  ['#办公室零食 葡萄干日常分享','葡萄干｜罐装'],
  ['#酸甜零食 话梅开袋试吃','话梅｜袋装'],
  ['#追剧零食 陈皮梅口感分享','陈皮梅｜袋装'],
  ['#下午茶果脯 柠檬片试吃记录','柠檬片｜罐装'],
  ['#酸甜零食 青梅果脯开袋分享','青梅果脯｜袋装'],
  ['#办公室零食 红枣夹核桃日常记录','红枣夹核桃｜袋装'],
  ['#传统茶点 桂花糕下午茶分享','桂花糕｜盒装'],
  ['#周末甜点 驴打滚切开试吃','驴打滚｜盒装']
];

const compactMoney = (value) => value >= 10000 ? `¥${(value / 10000).toFixed(2).replace(/0$/,'')}万` : `¥${value.toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const gmvPattern = [38, 56, 89, 126, 168, 235, 318, 426, 568, 726, 892, 1080, 1268, 1456, 1688, 1868];
const videoData = products.map(([title, product], index) => {
  const base = gmvPattern[(index * 7) % gmvPattern.length];
  const gmv = Math.round((base + ((index * 37) % 93) + (index % 9) * .17) * 100) / 100;
  const settled = Math.round(gmv * (.58 + (index % 6) * .045) * 100) / 100;
  const commission = Math.round(gmv * (.12 + (index % 7) * .035) * 100) / 100;
  const viewCount = 860 + ((index * 7919) % 194000);
  const viewText = viewCount >= 10000 ? `${(viewCount / 10000).toFixed(2)}万` : viewCount.toLocaleString('zh-CN');
  const likeCount = Math.max(19, Math.round(viewCount * (.009 + (index % 6) * .003)));
  const month = index < 23 ? '10' : index < 52 ? '09' : '08';
  const day = ((22 - index - 1) % 28 + 28) % 28 + 1;
  return {
    date:`${month}-${String(day).padStart(2,'0')}`,
    title, product,
    views:index < 3 ? ['48.26万','20.7万','8.2万'][index] : viewText,
    likes:(index < 3 ? [2051,883,497][index] : likeCount).toLocaleString('zh-CN'),
    comments:String(index < 3 ? [278,99,44][index] : Math.max(7, Math.round(likeCount * (.055 + (index % 4) * .014)))),
    gmv:compactMoney(gmv), settled:compactMoney(settled), commission:compactMoney(commission)
  };
});

Object.assign(videoData[0], {gmv:'¥1,864.30', settled:'¥1,328.45', commission:'¥486.20'});
Object.assign(videoData[1], {gmv:'¥1,438.66', settled:'¥982.36', commission:'¥327.18'});
Object.assign(videoData[2], {gmv:'¥612.40', settled:'¥408.25', commission:'¥126.80'});

const videoList = document.querySelector('#videoList');
const coverInput = document.querySelector('#coverInput');
const uploadPreviews = document.querySelector('#uploadPreviews');
const uploadCount = document.querySelector('#uploadCount');
const itemCount = document.querySelector('#itemCount');
const productNames = document.querySelector('#productNames');
const productNameCount = document.querySelector('#productNameCount');
const customForm = document.querySelector('#customForm');
const formError = document.querySelector('#formError');
let uploadedCovers = [];

function renderVideoList(items) {
  videoList.replaceChildren();
  const fragment = document.createDocumentFragment();

  items.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'video-item';

    const main = document.createElement('div');
    main.className = 'video-main';
    const thumb = document.createElement('div');
    thumb.className = `video-thumb${!item.coverUrl && index >= 30 ? ' cover-sheet-2' : ''}`;
    if (item.coverUrl) {
      thumb.classList.add('custom-cover');
      thumb.style.backgroundImage = `url("${item.coverUrl}")`;
    } else {
      thumb.style.setProperty('--cover-x', `${(index % 5) * 25}%`);
      thumb.style.setProperty('--cover-y', `${Math.floor((index % 30) / 5) * 20}%`);
    }
    const time = document.createElement('time');
    time.className = 'privacy-mask date-mask';
    time.textContent = item.date;
    thumb.append(time);

    const copy = document.createElement('div');
    copy.className = 'video-copy';
    const title = document.createElement('h2');
    title.className = 'video-title';
    title.textContent = item.title;
    const stats = document.createElement('div');
    stats.className = 'video-stats';
    stats.textContent = `▶ ${item.views}　♥ ${item.likes}　● ${item.comments}`;
    const productLine = document.createElement('div');
    productLine.className = 'product-line';
    const product = document.createElement('span');
    product.className = 'privacy-mask';
    product.textContent = `🛒 ${item.product}`;
    productLine.append(product);
    copy.append(title, stats, productLine);
    main.append(thumb, copy);

    const moneyRow = document.createElement('div');
    moneyRow.className = 'money-row';
    [['成交金额', item.gmv], ['结算金额', item.settled], ['预估佣金', item.commission]].forEach(([label, value]) => {
      const cell = document.createElement('div');
      const labelNode = document.createElement('span');
      labelNode.className = 'privacy-mask';
      labelNode.textContent = label;
      const valueNode = document.createElement('strong');
      valueNode.textContent = value;
      cell.append(labelNode, valueNode);
      moneyRow.append(cell);
    });

    const action = document.createElement('button');
    action.className = 'item-action';
    action.type = 'button';
    action.textContent = '设置橱窗信息';
    article.append(main, moneyRow, action);
    fragment.append(article);
  });

  videoList.append(fragment);
}

renderVideoList(videoData);

function clearUploadedCovers() {
  uploadedCovers.forEach(item => URL.revokeObjectURL(item.url));
  uploadedCovers = [];
  coverInput.value = '';
  renderCoverPreviews();
}

function renderCoverPreviews() {
  uploadPreviews.replaceChildren();
  uploadCount.textContent = `${uploadedCovers.length} 张`;
  syncGeneratedCount();
  uploadedCovers.forEach((item, index) => {
    const preview = document.createElement('div');
    preview.className = 'upload-preview';
    const image = document.createElement('img');
    image.src = item.url;
    image.alt = `已上传封面 ${index + 1}`;
    const order = document.createElement('span');
    order.className = 'preview-index';
    order.textContent = index + 1;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.setAttribute('aria-label', `移除第 ${index + 1} 张封面`);
    remove.textContent = '×';
    remove.addEventListener('click', () => {
      URL.revokeObjectURL(uploadedCovers[index].url);
      uploadedCovers.splice(index, 1);
      renderCoverPreviews();
    });
    preview.append(image, order, remove);
    uploadPreviews.append(preview);
  });
}

coverInput.addEventListener('change', () => {
  const imageFiles = [...coverInput.files].filter(file => file.type.startsWith('image/'));
  const availableSlots = Math.max(0, 100 - uploadedCovers.length);
  imageFiles.slice(0, availableSlots).forEach(file => uploadedCovers.push({name:file.name, url:URL.createObjectURL(file)}));
  coverInput.value = '';
  formError.textContent = imageFiles.length > availableSlots ? '一次最多生成 100 条，超出的图片没有加入。' : '';
  renderCoverPreviews();
});

function getProductNameLines() {
  return productNames.value.split('\n').map(name => name.trim());
}

function updateProductNameCount() {
  const enteredCount = getProductNameLines().filter(Boolean).length;
  productNameCount.textContent = `已填写 ${enteredCount} / ${uploadedCovers.length} 个`;
}

function syncGeneratedCount() {
  itemCount.value = String(uploadedCovers.length);
  itemCount.textContent = `${uploadedCovers.length} 条`;
  updateProductNameCount();
}

productNames.addEventListener('input', updateProductNameCount);

const removedTitleWords = new RegExp([
  '必' + '备', '神' + '器', '救' + '星', '闭眼' + '入', '搞' + '定', '爆' + '品', '爆' + '款',
  '正' + '品', '最' + '新', '绝' + '对', '唯' + '一', '首' + '选', '顶' + '级', '保' + '证',
  '完' + '美', '瞬' + '间', '美' + '白', '祛' + '痘', '速' + '热', '见' + '效'
].join('|'), 'g');

function normalizeProductName(name) {
  const cleaned = String(name || '').replace(removedTitleWords, '').replace(/[#｜|，,。！!？?]/g, '').replace(/\s+/g, '').trim();
  return cleaned.slice(0, 18) || '日常用品';
}

function makeNeutralTitle(productName) {
  const name = normalizeProductName(productName);
  if (/T恤|衬衫|卫衣|毛衣|外套|裤|裙|袜|鞋|帽|围巾|内衣|背心/.test(name)) return `#日常穿搭记录 ${name}搭配分享`;
  if (/包|皮带|腰带|眼镜|手表|首饰|项链|耳环/.test(name)) return `#通勤搭配记录 ${name}日常搭配`;
  if (/锅|碗|杯|筷|勺|刀|砧板|保鲜盒|饭盒|餐具|料理|榨汁/.test(name)) return `#厨房用品记录 ${name}日常使用`;
  if (/收纳|置物|衣架|挂钩|储物|整理/.test(name)) return `#居家整理记录 ${name}收纳分享`;
  if (/清洁|拖把|抹布|湿巾|洗衣|刷子|除尘/.test(name)) return `#居家清洁记录 ${name}日常使用`;
  if (/手机|耳机|键盘|鼠标|充电|支架|台灯|风扇|音箱/.test(name)) return `#数码用品记录 ${name}使用分享`;
  if (/零食|饼干|面包|坚果|糖|茶|咖啡|饮料|果汁|燕麦/.test(name)) return `#日常饮食记录 ${name}分享`;
  if (/枕|床|被|毛毯|拖鞋|香薰|加湿器|夜灯/.test(name)) return `#居家生活记录 ${name}使用分享`;
  return `#日常用品记录 ${name}使用分享`;
}

function randomBetween(min, max, power = 1) {
  return min + (max - min) * Math.pow(Math.random(), power);
}

function makeCustomData(count, minCommission, maxCommission, names) {
  return Array.from({length:count}, (_, index) => {
    const productName = normalizeProductName(names[index]);
    const commission = Math.round(randomBetween(minCommission, maxCommission, 1.75) * 100) / 100;
    const commissionRate = randomBetween(.09, .28);
    const gmv = Math.max(commission, Math.round((commission / commissionRate) * 100) / 100);
    const settled = Math.round(gmv * randomBetween(.58, .82) * 100) / 100;
    const viewCount = Math.round(randomBetween(680, 238000, 1.65));
    const likeCount = Math.max(8, Math.round(viewCount * randomBetween(.008, .029)));
    const commentCount = Math.max(2, Math.round(likeCount * randomBetween(.045, .12)));
    const date = new Date();
    date.setDate(date.getDate() - index - 1);
    return {
      date:`${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`,
      title:makeNeutralTitle(productName),
      product:`${productName}｜日常款`,
      views:viewCount >= 10000 ? `${(viewCount / 10000).toFixed(2).replace(/0$/,'')}万` : viewCount.toLocaleString('zh-CN'),
      likes:likeCount.toLocaleString('zh-CN'),
      comments:commentCount.toLocaleString('zh-CN'),
      gmv:compactMoney(gmv),
      settled:compactMoney(settled),
      commission:compactMoney(commission),
      coverUrl:uploadedCovers.length ? uploadedCovers[index % uploadedCovers.length].url : ''
    };
  });
}

customForm.addEventListener('submit', event => {
  event.preventDefault();
  formError.textContent = '';
  const count = uploadedCovers.length;
  const minCommission = Number(document.querySelector('#commissionMin').value);
  const maxCommission = Number(document.querySelector('#commissionMax').value);
  const names = getProductNameLines();

  if (count < 1) {
    formError.textContent = '请先上传至少 1 张视频封面。';
    return;
  }
  if (!Number.isFinite(minCommission) || !Number.isFinite(maxCommission) || minCommission <= 0 || maxCommission <= 0) {
    formError.textContent = '请填写有效的佣金范围。';
    return;
  }
  if (minCommission > maxCommission) {
    formError.textContent = '最低佣金不能高于最高佣金。';
    return;
  }

  renderVideoList(makeCustomData(count, minCommission, maxCommission, names));
  setScreen('videos');
});

document.querySelector('#restoreDemo').addEventListener('click', () => {
  renderVideoList(videoData);
  clearUploadedCovers();
  customForm.reset();
  syncGeneratedCount();
  formError.textContent = '';
  setScreen('videos');
});

function setScreen(name) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.toggle('is-active', screen.dataset.screen === name));
  window.scrollTo({top:0, behavior:'instant'});
}

document.addEventListener('click', (event) => {
  const go = event.target.closest('[data-go]');
  if (go) setScreen(go.dataset.go);
});

document.querySelectorAll('.video-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.video-tabs button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
}));

document.querySelectorAll('.sort-row button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.sort-row button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
}));

const now = new Date();
document.querySelectorAll('.js-clock').forEach(el => el.textContent = now.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false}));

window.addEventListener('beforeunload', () => uploadedCovers.forEach(item => URL.revokeObjectURL(item.url)));
