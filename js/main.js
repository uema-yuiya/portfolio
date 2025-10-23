$(function(){
  // ハンバーガーメニュークリック
  $('.hamburger-menu').click(function(){
      $(this).toggleClass('open');       // 親にopenを付与
      $('.nav-sp').toggleClass('open');  // ナビ開閉
  });

  // SPナビリンククリックで閉じる
  $('.nav-sp a').click(function(){
      $('.hamburger-menu').removeClass('open');
      $('.nav-sp').removeClass('open');
  });
});


  // TOPへ戻るボタン
  var top = $('#page_top');
  top.click(function(){
    $('html, body').animate({ scrollTop: 0 }, 1000);
    return false;
  });
  
// $(function(){
//   var top = $('#pagetop');

//   top.click(function(){
//     $('body,html').animate({
//       scrollTop: 0}, 1000);
//       return false;
//   });
// });