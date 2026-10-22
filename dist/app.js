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
  ['#睡前仪式感 香香地进入梦乡','无火香薰礼盒｜卧室助眠香']
];

const compactMoney = (value) => value >= 10000 ? `¥${(value / 10000).toFixed(2).replace(/0$/,'')}万` : `¥${value.toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const videoData = products.map(([title, product], index) => {
  const gmv = Math.round(49400 / (1 + index * .115) + (index % 4) * 1360);
  const settled = Math.round(gmv * (.63 + (index % 5) * .025));
  const commission = Math.round(gmv * (.31 + (index % 4) * .017) * 100) / 100;
  const day = 22 - (index % 22);
  return {
    date:`${index < 22 ? '10' : '09'}-${String(day > 0 ? day : day + 22).padStart(2,'0')}`,
    title, product,
    views:index < 3 ? ['48.26万','20.7万','8.2万'][index] : `${(6.8 + ((index * 37) % 124) / 10).toFixed(2)}万`,
    likes:(2051 - index * 47 + (index % 3) * 89).toLocaleString('zh-CN'),
    comments:String(Math.max(18,278 - index * 8 + (index % 4) * 11)),
    gmv:compactMoney(gmv), settled:compactMoney(settled), commission:compactMoney(commission),
    theme:`theme-${(index % 8) + 1}`
  };
});

Object.assign(videoData[0], {gmv:'¥4.94万', settled:'¥3.42万', commission:'¥2.16万'});
Object.assign(videoData[1], {gmv:'¥1.57万', settled:'¥1.26万', commission:'¥2,829.58'});
Object.assign(videoData[2], {gmv:'¥5,304.81', settled:'¥3,245.93', commission:'¥2,514.21'});

const videoList = document.querySelector('#videoList');
videoList.innerHTML = videoData.map((item, index) => `
  <article class="video-item">
    <div class="video-main">
      <div class="video-thumb" style="--cover-x:${(index % 5) * 25}%;--cover-y:${Math.floor(index / 5) * 20}%"><time>${item.date}</time></div>
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
