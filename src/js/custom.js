$(document).ready(function () {
    $(".mobile_nav .ham_menu").click(function (e) {
        e.preventDefault();
        $(this).parents(".mobile_nav").toggleClass("mobile_nav_open");
        $(this).parents("header").toggleClass("bg_fill_white");
    });

    var position = $(window).scrollTop();

    // should start at 0

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            console.log('scrollDown');
            $("header").removeClass("header_open");
            // $("header").removeClass("header_bg");
        } else {
            console.log('scrollUp');
            $("header").addClass("header_open");
            // $("header").addClass("header_bg");
        }
        position = scroll;
    });



    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 50) {
            $("header").addClass("header_bg");
        } else {
            $("header").removeClass("header_bg");
        }
    });



    if ($(window).width() < 992) {
        $("header article ul li.has_subnav").click(function (e) {
            // e.preventDefault();
            $(this).toggleClass("subnav_open");
        });
    }

});