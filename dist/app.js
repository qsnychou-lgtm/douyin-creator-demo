const products = [
  ['#秋冬家居分享 保温杯日常使用','保温杯｜通勤款'],
  ['#居家清洁记录 泡沫清洁剂使用','泡沫清洁剂｜家用装'],
  ['#换季收纳记录 厨房空间整理','壁挂收纳架｜厨房浴室款'],
  ['#下午茶记录 果味饮品冲泡','果味冲泡饮｜独立袋装'],
  ['#厨房工具分享 日常备餐使用','多功能料理工具｜家用套装'],
  ['#通勤杯具分享 随行杯日常使用','便携随行杯｜旋盖款'],
  ['#家庭用纸分享 柔纸巾日常使用','婴童柔纸巾｜加厚款'],
  ['#宿舍桌面记录 折叠台灯使用','迷你折叠台灯｜三档调光'],
  ['#居家清洁记录 地面除尘整理','静电除尘拖把｜替换装套组'],
  ['#秋冬穿搭记录 围巾搭配分享','加绒保暖围巾｜基础款'],
  ['#日常清洁分享 泡沫洗手液使用','泡沫洗手液｜便携装'],
  ['#早餐记录 全麦面包简单搭配','全麦欧包｜独立包装'],
  ['#收纳整理记录 抽屉分区摆放','抽屉分隔收纳盒｜组合装'],
  ['#衣物护理记录 外套日常打理','衣物护理喷雾｜便携装'],
  ['#厨房日常记录 平底锅使用分享','麦饭石平底锅｜家用款'],
  ['#办公用品分享 腰靠日常使用','办公室腰靠｜记忆棉款'],
  ['#零食分享 坚果燕麦脆试吃','坚果燕麦脆｜独立包装'],
  ['#浴室收纳记录 折叠脏衣篮使用','壁挂折叠脏衣篮｜免打孔款'],
  ['#数码配件分享 充电线日常使用','三合一充电线｜加长款'],
  ['#热饮记录 桂圆红枣茶冲泡','桂圆红枣枸杞茶｜独立茶包'],
  ['#桌面用品分享 暖杯垫日常使用','恒温暖杯垫｜桌面款'],
  ['#厨房清洁记录 台面油污整理','厨房清洁剂｜泡沫喷雾'],
  ['#秋冬床品分享 珊瑚绒床笠铺设','珊瑚绒床笠｜加厚款'],
  ['#旅行收纳记录 洗漱用品整理','多层旅行洗漱包｜分区款'],
  ['#租房布置记录 感应夜灯安装','磁吸感应夜灯｜充电款'],
  ['#办公室零食分享 冻干酸奶块试吃','冻干酸奶块｜草莓味'],
  ['#随身清洁分享 衣物去渍笔使用','便携衣物去渍笔｜按压款'],
  ['#家常菜记录 切菜工具使用','多功能切菜器｜可换刀片'],
  ['#冬日用品分享 暖手宝日常使用','充电暖手宝｜双面发热'],
  ['#居家香氛记录 无火香薰摆放','无火香薰礼盒｜淡香款'],
  ['#口腔清洁记录 电动牙刷使用','声波电动牙刷｜软毛款'],
  ['#一人食记录 陶瓷汤碗使用','日式陶瓷汤碗｜带盖款'],
  ['#厨房清洁记录 湿巾日常使用','厨房湿巾｜加厚大尺寸'],
  ['#桌面用品分享 迷你风扇使用','迷你桌面风扇｜三档调节'],
  ['#桌面收纳记录 化妆品分类摆放','透明收纳盒｜防尘分层'],
  ['#居家鞋品分享 棉拖鞋日常穿着','加厚棉拖鞋｜防滑款'],
  ['#房间用品分享 加湿器日常使用','便携加湿器｜细雾款'],
  ['#养宠记录 宠物梳毛日常','宠物去浮毛梳｜猫狗款'],
  ['#自制饮品记录 硅胶冰格使用','硅胶制冰盒｜带盖款'],
  ['#洗衣用品分享 凝珠分装记录','洗衣凝珠｜独立装'],
  ['#出门收纳记录 喷雾瓶分装','便携喷雾分装瓶｜细雾款'],
  ['#雨天通勤记录 折叠伞随身携带','五折便携晴雨伞｜轻量款'],
  ['#厨房收纳记录 调料罐分类摆放','玻璃调料罐套装｜密封款'],
  ['#数码桌搭记录 手机支架使用','折叠手机支架｜多角度款'],
  ['#吹发日常记录 吹风机档位使用','家用吹风机｜多档风速'],
  ['#通勤包分享 帆布包日常搭配','拼色帆布托特包｜通勤款'],
  ['#午休用品分享 遮光眼罩使用','遮光睡眠眼罩｜柔软款'],
  ['#带饭记录 保温饭袋收纳','便携保温饭袋｜加厚款'],
  ['#冰箱收纳记录 保鲜盒叠放','玻璃保鲜盒｜可叠放款'],
  ['#浴室用品分享 拖鞋日常使用','浴室拖鞋｜防滑款'],
  ['#旅行收纳记录 分装软管使用','便携分装软管｜旋盖款'],
  ['#水果处理记录 削皮器使用','旋转水果削皮器｜不锈钢刃'],
  ['#鞋面清洁记录 泡沫清洁剂使用','鞋面清洁泡沫｜家用装'],
  ['#出差用品分享 旅行颈枕使用','记忆棉旅行颈枕｜可拆洗'],
  ['#日常用纸分享 棉柔巾使用','一次性棉柔巾｜干湿两用'],
  ['#桌面收纳记录 抽屉盒组合','桌面抽屉收纳盒｜多层款'],
  ['#衣物护理记录 毛球修剪器使用','充电式毛球修剪器｜集屑盒款'],
  ['#基础穿搭分享 纯棉短袜搭配','纯棉短袜｜透气款'],
  ['#上班带饭记录 分格饭盒使用','不锈钢分格饭盒｜密封款'],
  ['#饮品制作记录 榨汁杯使用','便携榨汁杯｜无线充电款']
];

const compactMoney = (value) => value >= 10000 ? `¥${(value / 10000).toFixed(2).replace(/0$/,'')}万` : `¥${value.toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const gmvPattern = [268, 438, 596, 782, 980, 1286, 1568, 1980, 2386, 2860, 3480, 4260, 5180, 6380, 7860, 9680, 12680, 15860, 21800];
const videoData = products.map(([title, product], index) => {
  const base = gmvPattern[(index * 7) % gmvPattern.length];
  const gmv = Math.round((base + ((index * 137) % 310)) * 100) / 100;
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

Object.assign(videoData[0], {gmv:'¥4.94万', settled:'¥3.42万', commission:'¥2.16万'});
Object.assign(videoData[1], {gmv:'¥1.57万', settled:'¥1.26万', commission:'¥2,829.58'});
Object.assign(videoData[2], {gmv:'¥5,304.81', settled:'¥3,245.93', commission:'¥2,514.21'});

const videoList = document.querySelector('#videoList');
const coverInput = document.querySelector('#coverInput');
const uploadPreviews = document.querySelector('#uploadPreviews');
const uploadCount = document.querySelector('#uploadCount');
const customTitles = document.querySelector('#customTitles');
const titleCount = document.querySelector('#titleCount');
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
  imageFiles.forEach(file => uploadedCovers.push({name:file.name, url:URL.createObjectURL(file)}));
  coverInput.value = '';
  formError.textContent = '';
  renderCoverPreviews();
});

function updateTitleCount() {
  const count = customTitles.value.split('\n').map(title => title.trim()).filter(Boolean).length;
  titleCount.textContent = `已填写 ${count} 条`;
}

customTitles.addEventListener('input', updateTitleCount);

const neutralTitles = [
  '#居家整理记录 厨房空间收纳', '#日常用品分享 随行杯使用', '#通勤好物记录 帆布包搭配',
  '#家庭清洁记录 桌面日常整理', '#厨房用品分享 备餐工具使用', '#周末生活记录 房间简单布置',
  '#办公室日常 桌面用品整理', '#旅行收纳记录 随身物品分类', '#家常饮品记录 杯具日常使用',
  '#换季整理记录 衣物分类收纳', '#居家用品记录 浴室空间整理', '#日常穿搭记录 基础单品搭配'
];

function randomBetween(min, max, power = 1) {
  return min + (max - min) * Math.pow(Math.random(), power);
}

function makeCustomData(count, minCommission, maxCommission, titles) {
  return Array.from({length:count}, (_, index) => {
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
      title:titles[index] || neutralTitles[index % neutralTitles.length],
      product:`自定义商品 ${String(index + 1).padStart(2,'0')}`,
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
  const count = Number(document.querySelector('#itemCount').value);
  const minCommission = Number(document.querySelector('#commissionMin').value);
  const maxCommission = Number(document.querySelector('#commissionMax').value);
  const titles = customTitles.value.split('\n').map(title => title.trim()).filter(Boolean);

  if (!Number.isInteger(count) || count < 1 || count > 100) {
    formError.textContent = '生成条数请填写 1—100 之间的整数。';
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

  renderVideoList(makeCustomData(count, minCommission, maxCommission, titles));
  setScreen('videos');
});

document.querySelector('#restoreDemo').addEventListener('click', () => {
  renderVideoList(videoData);
  clearUploadedCovers();
  customForm.reset();
  updateTitleCount();
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
