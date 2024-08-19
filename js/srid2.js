// Swiperのインスタンスを作成
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
});