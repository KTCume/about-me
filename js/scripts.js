// script.js

// ハンバーガーメニューとサイトナビゲーションの要素を取得
const hamburgerMenu = document.querySelector('.hamburger-menu');
const siteNav = document.querySelector('.site-nav');

// ハンバーガーメニューがクリックされたときのイベントリスナーを追加
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('change'); // ハンバーガーメニューのアニメーションを切り替え
  siteNav.classList.toggle('show'); // ナビゲーションメニューの表示・非表示を切り替え
});




