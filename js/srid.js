
(function($) { "use strict";

    // ページカーソルの処理

      // カーソル要素の取得
      var t = document.getElementById("cursor"),
          e = document.getElementById("cursor2"),
          i = document.getElementById("cursor3");

      // 要素にマウスが乗った時にhoverクラスを追加する関数
      function n(t) {
          e.classList.add("hover"), i.classList.add("hover")
      }
      
      // 要素からマウスが離れた時にhoverクラスを削除する関数
      function s(t) {
          e.classList.remove("hover"), i.classList.remove("hover")
      }

      s();
      
      // すべてのhover-targetクラスを持つ要素に対してイベントを設定
      for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
          o(r[a])
      }

      // 各要素にマウスオーバーとマウスアウトのイベントを設定
      function o(t) {
          t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
      }
  
    // ライト/ダークモードの切り替え
    
    $(".switch").on('click', function () {
      if ($("body").hasClass("light")) {
        // ライトモードが有効な場合は、解除してダークモードにする
        $("body").removeClass("light");
        $(".switch").removeClass("switched");
      }
      else {
        // ダークモードが有効な場合は、ライトモードに切り替える
        $("body").addClass("light");
        $(".switch").addClass("switched");
      }
    });
    
    $(document).ready(function() {  
      
      /* ヒーローセクションの画像切り替え */      
      
      // 1番目のボタンにマウスが乗った時に画像を1番目に切り替える
      $('.slide-buttons li:nth-child(1)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(1)').addClass("show");
        $('.slide-buttons li:nth-child(1)').addClass('active');
      })
      
      // 2番目のボタンにマウスが乗った時に画像を2番目に切り替える
      $('.slide-buttons li:nth-child(2)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(2)').addClass("show");
        $('.slide-buttons li:nth-child(2)').addClass('active');
      })

      // 3番目のボタンにマウスが乗った時に画像を3番目に切り替える
      $('.slide-buttons li:nth-child(3)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(3)').addClass("show");
        $('.slide-buttons li:nth-child(3)').addClass('active');
      })

      // 4番目のボタンにマウスが乗った時に画像を4番目に切り替える
      $('.slide-buttons li:nth-child(4)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(4)').addClass("show");
        $('.slide-buttons li:nth-child(4)').addClass('active');
      })

      // 5番目のボタンにマウスが乗った時に画像を5番目に切り替える
      $('.slide-buttons li:nth-child(5)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(5)').addClass("show");
        $('.slide-buttons li:nth-child(5)').addClass('active');
      })

      // 6番目のボタンにマウスが乗った時に画像を6番目に切り替える
      $('.slide-buttons li:nth-child(6)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(6)').addClass("show");
        $('.slide-buttons li:nth-child(6)').addClass('active');
      })

      // 最初に1番目の画像を表示する
      $('.slide-buttons li:nth-child(1)').trigger('mouseenter')   
      
    });
    
})(jQuery);
