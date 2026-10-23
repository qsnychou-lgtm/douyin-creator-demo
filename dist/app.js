const products = [
  ['#好物推荐 🔥 秋冬实用家居分享','轻奢保温杯｜办公室通勤大容量'],
  ['#好物推荐 🔥 这个清洁神器太省心','多效清洁慕斯｜官方正品'],
  ['#居家日常 🔥 换季收纳小技巧','免打孔收纳架｜厨房浴室通用'],
  ['#健康生活 #轻松通畅每一天','益生元果味饮｜独立小袋装'],
  ['#厨房好物 🔥 我愿称它为效率神器','多功能料理工具｜家用套装'],
  ['#精致生活 这个小东西真的很实用','便携随行咖啡杯｜防漏设计'],
  ['#宝妈分享 🔥 家里有娃建议备上','婴童柔纸巾｜亲肤加厚款'],
  ['#宿舍好物 学生党闭眼入','迷你折叠台灯｜三档调光'],
  ['#懒人必备 🔥 打扫卫生快一倍','静电除尘拖把｜替换装套组'],
  ['#通勤穿搭 秋冬氛围感拿捏了','加绒保暖围巾｜柔软亲肤'],
  ['#平价好物 分享近期爱用小物','氨基酸洁面慕斯｜温和清洁'],
  ['#早餐日记 三分钟搞定热乎早餐','低糖全麦欧包｜独立包装'],
  ['#收纳整理 看完家里立刻变整齐','抽屉分隔收纳盒｜自由组合'],
  ['#护肤分享 🔥 干皮秋冬救星','润肤身体乳｜长效保湿'],
  ['#厨房日常 这个锅真的不粘','麦饭石平底锅｜家用煎锅'],
  ['#打工人好物 久坐也要照顾自己','办公室腰靠｜记忆棉支撑'],
  ['#零食分享 一口下去太满足了','坚果燕麦脆｜低糖小包装'],
  ['#浴室好物 小户型也能装','壁挂折叠脏衣篮｜免打孔'],
  ['#数码好物 出门一根线就够了','三合一快充线｜加长耐弯折'],
  ['#养生日常 每天给自己泡一杯','桂圆红枣枸杞茶｜独立茶包'],
  ['#提升幸福感的小家电','恒温暖杯垫｜办公室静音款'],
  ['#清洁妙招 厨房油污轻松搞定','厨房去油清洁剂｜泡沫喷雾'],
  ['#秋冬必备 睡觉再也不冷脚','加厚珊瑚绒床笠｜柔软亲肤'],
  ['#旅行收纳 一个包搞定全部','多层旅行洗漱包｜防水大容量'],
  ['#租房改造 不打孔也能很好看','磁吸感应夜灯｜充电长续航'],
  ['#办公室零食 下午不再饿肚子','冻干酸奶块｜草莓果粒'],
  ['#精简护肤 最近一直在用它','修护精华液｜敏感肌可用'],
  ['#家常菜神器 切配时间省一半','多功能切菜器｜可换刀片'],
  ['#冬日保暖 出门手也暖乎乎','充电暖手宝｜双面发热'],
  ['#睡前仪式感 香香地进入梦乡','无火香薰礼盒｜卧室助眠香'],
  ['#口腔护理 每天两分钟认真刷牙','声波电动牙刷｜软毛清洁'],
  ['#厨房日常 热乎乎的一人食','日式陶瓷汤碗｜大容量带盖'],
  ['#家务小妙招 擦完厨房不留油','一次性厨房湿巾｜加厚大尺寸'],
  ['#夏日好物 桌面清凉小风扇','迷你桌面风扇｜静音三档'],
  ['#桌面收纳 化妆品终于不乱了','透明化妆品收纳盒｜防尘分层'],
  ['#居家幸福感 踩上去软乎乎','加厚棉拖鞋｜防滑保暖'],
  ['#干燥季必备 小房间也够用','便携加湿器｜细雾静音'],
  ['#养宠日常 掉毛季真的需要它','宠物去浮毛梳｜猫狗通用'],
  ['#自制饮品 冰块也要可可爱爱','硅胶制冰盒｜带盖易脱模'],
  ['#洗衣好物 一颗搞定一桶衣服','浓缩洗衣凝珠｜留香护色'],
  ['#防晒分享 出门前别忘了这一步','轻薄防晒乳｜清爽不黏腻'],
  ['#雨天通勤 包里常备不占地方','五折便携晴雨伞｜轻量防晒'],
  ['#厨房收纳 调料整齐做饭更快','玻璃调料罐套装｜防潮密封'],
  ['#数码桌搭 追剧办公都方便','折叠手机支架｜多角度调节'],
  ['#快速吹干 发量多也不怕','负离子吹风机｜大风量低噪'],
  ['#通勤包分享 简单又特别能装','拼色帆布托特包｜大容量'],
  ['#睡眠好物 午休也能睡得香','遮光睡眠眼罩｜柔软透气'],
  ['#带饭日常 保温又不会漏','便携保温饭袋｜加厚防水'],
  ['#冰箱收纳 一周备菜安排上','玻璃保鲜盒｜耐热可叠放'],
  ['#浴室好物 软弹防滑还速干','居家浴室拖鞋｜踩屎感'],
  ['#秋冬护手 随身带着很方便','植物香氛护手霜｜滋润不油'],
  ['#水果时间 削皮干净还不费手','旋转水果削皮器｜不锈钢刃'],
  ['#小白鞋救星 轻轻一刷就干净','鞋面清洁泡沫｜免水洗'],
  ['#出差必备 坐车睡觉舒服多了','记忆棉旅行颈枕｜可拆洗'],
  ['#洗脸巾分享 柔软厚实不掉絮','一次性棉柔巾｜干湿两用'],
  ['#桌面改造 零碎小物都有位置','桌面抽屉收纳盒｜多层组合'],
  ['#衣物护理 毛衣瞬间变新','充电式毛球修剪器｜强劲吸毛'],
  ['#基础款好穿 袜口不勒脚','纯棉短袜｜透气吸汗'],
  ['#上班带饭 不串味也不漏汤','不锈钢分格饭盒｜密封便携'],
  ['#鲜榨果汁 随时随地喝一杯','便携榨汁杯｜无线充电款']
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
videoList.innerHTML = videoData.map((item, index) => `
  <article class="video-item">
    <div class="video-main">
      <div class="video-thumb ${index >= 30 ? 'cover-sheet-2' : ''}" style="--cover-x:${(index % 5) * 25}%;--cover-y:${Math.floor((index % 30) / 5) * 20}%"><time>${item.date}</time></div>
      <div class="video-copy">
        <h2 class="video-title">${item.title}</h2>
        <div class="video-stats">▶ ${item.views}　♥ ${item.likes}　● ${item.comments}</div>
        <div class="product-line"><span class="privacy-mask">🛒 ${item.product}</span></div>
      </div>
    </div>
    <div class="money-row">
      <div><span class="privacy-mask">成交金额</span><strong>${item.gmv}</strong></div>
      <div><span class="privacy-mask">结算金额</span><strong>${item.settled}</strong></div>
      <div><span class="privacy-mask">预估佣金</span><strong>${item.commission}</strong></div>
    </div>
    <button class="item-action">设置橱窗信息</button>
  </article>
`).join('');

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
