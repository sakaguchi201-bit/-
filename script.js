// フッターの年を自動更新
document.getElementById('year').textContent = new Date().getFullYear();

// スマホ用メニューの開閉
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// お問い合わせフォーム：メールソフトを開いて送信
const CONTACT_EMAIL = 'your-email@example.com';

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = `お問い合わせ: ${data.get('name')}様より`;
  const body = `お名前: ${data.get('name')}\nメール: ${data.get('email')}\n\n${data.get('message')}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
