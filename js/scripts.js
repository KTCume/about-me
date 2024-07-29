// script.js

// ハンバーガーメニューとサイトナビゲーションの要素を取得
const hamburgerMenu = document.querySelector('.hamburger-menu');
const siteNav = document.querySelector('.site-nav');

// ハンバーガーメニューがクリックされたときのイベントリスナーを追加
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('change'); // ハンバーガーメニューのアニメーションを切り替え
  siteNav.classList.toggle('show'); // ナビゲーションメニューの表示・非表示を切り替え
});


(function() {
  // スライドとコントロールの要素を取得
  var $slides = document.querySelectorAll('.slide');
  var $controls = document.querySelectorAll('.slider__control');
  var numOfSlides = $slides.length;
  var slidingAT = 1300; // アニメーション時間 (scssの変数と同期させる)
  var slidingBlocked = false; // スライド中はクリックをブロック

  // 各スライドにクラスとデータ属性を追加
  [].slice.call($slides).forEach(function($el, index) {
    var i = index + 1;
    $el.classList.add('slide-' + i);
    $el.dataset.slide = i;
  });

  // 各コントロールにクリックイベントを追加
  [].slice.call($controls).forEach(function($el) {
    $el.addEventListener('click', controlClickHandler);
  });

  // コントロールのクリックイベントハンドラー
  function controlClickHandler() {
    if (slidingBlocked) return; // スライド中なら処理を終了
    slidingBlocked = true; // スライドをブロック

    var $control = this;
    var isRight = $control.classList.contains('m--right'); // 右方向のコントロールかどうか
    var $curActive = document.querySelector('.slide.s--active'); // 現在のアクティブなスライド
    var index = +$curActive.dataset.slide; // 現在のスライドのインデックス
    (isRight) ? index++ : index--; // 方向によってインデックスを増減
    if (index < 1) index = numOfSlides; // インデックスが範囲外の場合の処理
    if (index > numOfSlides) index = 1; // インデックスが範囲外の場合の処理
    var $newActive = document.querySelector('.slide-' + index); // 新しいアクティブなスライド

    $control.classList.add('a--rotation'); // コントロールの回転アニメーション
    $curActive.classList.remove('s--active', 's--active-prev'); // 現在のアクティブスライドのクラスを削除
    document.querySelector('.slide.s--prev').classList.remove('s--prev'); // 前のスライドのクラスを削除
    
    $newActive.classList.add('s--active'); // 新しいアクティブスライドにクラスを追加
    if (!isRight) $newActive.classList.add('s--active-prev'); // 方向が左の場合、前のスライドとしてクラスを追加

    // 前のスライドのインデックスを計算
    var prevIndex = index - 1;
    if (prevIndex < 1) prevIndex = numOfSlides;

    document.querySelector('.slide-' + prevIndex).classList.add('s--prev'); // 前のスライドにクラスを追加

    // アニメーション終了後に回転アニメーションクラスを削除し、スライドを解除
    setTimeout(function() {
      $control.classList.remove('a--rotation');
      slidingBlocked = false;
    }, slidingAT * 0.75);
  };
}());