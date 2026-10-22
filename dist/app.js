const videoData = [
  {date:'10-22', title:'#好物推荐 🔥 秋冬实用家居分享', views:'48.26万', likes:'2,051', comments:'278', product:'轻奢保温杯｜办公室通勤大容量', gmv:'¥4.94万', settled:'¥3.42万', commission:'¥2.16万', theme:''},
  {date:'10-18', title:'#好物推荐 🔥 这个清洁神器太省心', views:'20.7万', likes:'883', comments:'99', product:'多效清洁慕斯｜官方正品', gmv:'¥1.57万', settled:'¥1.26万', commission:'¥2,829.58', theme:'theme-2'},
  {date:'10-13', title:'#居家日常 🔥 换季收纳小技巧', views:'8.2万', likes:'497', comments:'44', product:'免打孔收纳架｜厨房浴室通用', gmv:'¥5,304.81', settled:'¥3,245.93', commission:'¥2,514.21', theme:'theme-3'},
  {date:'10-09', title:'#健康生活 #轻松通畅每一天', views:'8.91万', likes:'460', comments:'128', product:'益生元果味饮｜独立小袋装', gmv:'¥4,886.20', settled:'¥3,109.70', commission:'¥1,864.52', theme:'theme-4'},
  {date:'10-03', title:'#厨房好物 🔥 我愿称它为效率神器', views:'5.68万', likes:'322', comments:'51', product:'多功能料理工具｜家用套装', gmv:'¥3,965.00', settled:'¥2,976.80', commission:'¥1,578.60', theme:'theme-2'}
];

const videoList = document.querySelector('#videoList');
videoList.innerHTML = videoData.map((item) => `
  <article class="video-item">
    <div class="video-main">
      <div class="video-thumb private-content ${item.theme}"><time>${item.date}</time></div>
      <div class="video-copy">
        <h2 class="video-title private-content">${item.title}</h2>
        <div class="video-stats">▶ ${item.views}　♥ ${item.likes}　● ${item.comments}</div>
        <div class="product-line private-content">🛒 ${item.product}</div>
      </div>
    </div>
    <div class="money-row private-money">
      <div><span>成交金额</span><strong>${item.gmv}</strong></div>
      <div><span>结算金额</span><strong>${item.settled}</strong></div>
      <div><span>预估佣金</span><strong>${item.commission}</strong></div>
    </div>
    <button class="item-action">设置橱窗信息</button>
  </article>
`).join('');

const body = document.body;
const sheet = document.querySelector('.privacy-sheet');
const privacyInputs = [...document.querySelectorAll('[data-privacy]')];
const blurRange = document.querySelector('#blurRange');
const blurValue = document.querySelector('#blurValue');

function setScreen(name) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.toggle('is-active', screen.dataset.screen === name));
  window.scrollTo({top:0, behavior:'instant'});
}

function syncPrivacy() {
  privacyInputs.forEach(input => body.classList.toggle(`blur-${input.dataset.privacy}`, input.checked));
}

function openSettings() {
  body.classList.add('settings-open');
  sheet.setAttribute('aria-hidden','false');
}

function closeSettings() {
  body.classList.remove('settings-open');
  sheet.setAttribute('aria-hidden','true');
}

document.addEventListener('click', (event) => {
  const go = event.target.closest('[data-go]');
  if (go) setScreen(go.dataset.go);
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'settings') openSettings();
  if (action === 'close-settings') closeSettings();
});

privacyInputs.forEach(input => input.addEventListener('change', syncPrivacy));
blurRange.addEventListener('input', () => {
  document.documentElement.style.setProperty('--blur', `${blurRange.value}px`);
  blurValue.textContent = `${blurRange.value}px`;
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
syncPrivacy();
