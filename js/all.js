$(function () {
  // goTop
  // 顯示
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50 && $(window).width() < 767) {
      $(".gogo-top").fadeIn(300);
    } else {
      $(".gogo-top").fadeOut(300);
    }
  });
  // 向上捲動
  $(".gogo-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // hover效果
  // 獎勵圖
  $(".card").on("mouseover", function(){
    // $( this ).find( ".card-bg" ).attr("src", "..//images/pp_sm_hover.png");
    $( this ).find( ".box" ).css("color", "red");
  });

  $(".card").on("mouseout", function(){
    // $( this ).find( ".card-bg" ).attr("src", "..//images/pp_sm.png");
    $( this ).find( ".box" ).css("color", "black");
  });

  $(".card2").on("mouseover", function(){
    // $( this ).find( ".card-bg" ).attr("src", "..//images/pp_lg_hover.png");
    $( this ).find( ".box" ).css("color", "red");
  });

  $(".card2").on("mouseout", function(){
    // $( this ).find( ".card-bg" ).attr("src", "..//images/pp_lg.png");
    $( this ).find( ".box" ).css("color", "black");
  });

  // 下載icon hover 的時候出現
  $(".show-hover").on("click", function(){
    $( this ).parent().parent().siblings(".mouseover").css("display", "block");
  });

  $(".show-hover").on("mouseout", function(){
    $( this ).parent().parent().siblings(".mouseover").delay(3000);
    $( this ).parent().parent().siblings(".mouseover").slideUp(500);
  });


  // fade in
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50) {
      $(".fadeIn").fadeIn(300);
    } else {
      $(".fadeIn").fadeOut(300);
    }
  });


  // fixed-anchor
  // 顯示
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50 && $(window).width() < 767) {
      $(".nav-fixed").fadeIn(300);
    } else {
      $(".nav-fixed").fadeOut(300);
    }
  });
  
});
