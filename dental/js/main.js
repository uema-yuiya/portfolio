$(function(){
  $('.slider').slick({
      autoplay:true, // 自動再生を設定
      autoplaySpeed:5000, // スライド切り替えの時間を設定
      dots:false, // インジケーターを非表示
      arrows:false, //矢印消す
    });
  // ハンバーガーメニュー開閉
  $(".toggle").click(function() {
    $(".header_nav").toggleClass("active");
  });

  // メニュー内リンクをクリックしたら閉じる
  $(".header_nav a").click(function(e) {
    const target = $(this).attr("href");

    // #で始まるIDリンクの場合
    if (target.startsWith("#")) {
      e.preventDefault(); // デフォルトのジャンプを止める
      const position = $(target).offset().top - $("#header").outerHeight();
      $("html, body").animate({ scrollTop: position }, 500); // スムーズスクロール
    }

    // メニューを閉じる
    $(".header_nav").removeClass("active");
  });
});

// $(function() {
//   const height=$("#header").height();
//   $(".mv").css("padding-top", height);
// });