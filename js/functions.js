 $(document).ready(function () {

    //Tabgroup
    //Credit to Hamilton from WNM 617
    $(".tabgroup .tab").on("click",function(e){

    var id = $(this).index();

    $(this).addClass("active")
      .siblings().removeClass("active")

    $(this).closest(".tabgroup")
        .find(".content").eq(id)
        .addClass("active")
        .siblings().removeClass("active")
  });

    //nav logo change
    //scroll up
    $(window).scroll(function () {

        if ($(window).scrollTop() > 70) {
            $("header").css("background-color", "rgba(252,252,252,1)");
            $(".nav-color").css("color", "var(--color-black)");
            $(".logo-color").attr('src', '../img/logo.jpg');
            $(".line-color").css("background-color", "var(--color-black)");
            $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.03), 0 6px 20px 0 rgba(0, 0, 0, 0.03)");
        }
        else {
            $("header").css("background-color", "rgba(252,252,252,0)");
            $(".nav-color").css("color", "var(--color-white)");
            $(".logo-color").attr('src', '../img/logo-white.jpg');
            $(".line-color").css("background-color", "var(--color-white)");
            $("header").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)");
            
        }

        if ($(window).scrollTop() > 200) {
            $(".scroll-top").css("display", "block");
        }
        else {
            $(".scroll-top").fadeOut(500,function(){
                $(".scroll-top").css("display", "none");
            });
        }

    });

    $("#hamburger").on("click", function() {
        $(".line-color").css("background-color", "var(--color-white)");
    });

    $(".scroll-top").on("click", function() {
        
        $("html,body").animate({scrollTop:$(".top").offset().top},1000,);

    });

    //hamburger menu
    $(".burger-menu").click(function(){
    $(this).toggleClass("active")
    $(".mobile-nav").toggleClass("pv-toggle");
    });



});
