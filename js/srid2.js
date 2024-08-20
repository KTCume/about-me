var swiper = new Swiper(".mySwiper", {
  cssMode: true, // CSSモードを有効にする
  loop: true, // ループを有効にする
  navigation: {
    nextEl: ".swiper-button-next", // 次へボタンのセレクタ
    prevEl: ".swiper-button-prev", // 前へボタンのセレクタ
  },
  pagination: {
    el: ".swiper-pagination", // ページネーションのセレクタ
  },
  mousewheel: true, // マウスホイールによるスクロールを有効にする
  keyboard: true, // キーボードによる操作を有効にする
  autoplay: { // 自動再生を有効にする
    delay: 3500, // スライドが切り替わるまでの待ち時間（ミリ秒）
    disableOnInteraction: false, // ユーザー操作後も自動再生を続ける
  },
});
