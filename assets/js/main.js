"use strict";


jQuery(document).ready(function ($) {



    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    $('.cd-menu-trigger').on('click', function (event) {
        event.preventDefault();
        $('.home-main-content').addClass('move-out');
        $('#menu-list').addClass('is-visible');
        $('.cd-shadow-layer').addClass('is-visible');
    });
    //close menu
    $('.cd-close-menu').on('click', function (event) {
        event.preventDefault();
        $('.home-main-content').removeClass('move-out');
        $('#menu-list').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
    });


    set_clip_property();
    $(window).on('resize', function () {
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.cd-header').height(),
            $window_height = $(window).height(),
            $header_top = $window_height - $header_height,
            $window_width = $(window).width();
        $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
    }
    $('#menu-list a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('.home-main-content').removeClass('move-out');
        $('#menu-list').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
            { 'scrollTop': target.offset().top },
            900
        );
    });




    //fancybox
    // $(".youtube-media").on("click", function (e) {
    //     var jWindow = $(window).width();
    //     if (jWindow <= 410) {
    //         return;
    //     }
    //     $.fancybox({
    //         href: this.href,
    //         padding: 4,
    //         type: "iframe",
    //         'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
    //     });
    //     return false;
    // });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();




    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */


    $('.main_choose_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });



    // scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });



    //    $('#menu').slicknav();

    $('#mixcontent').mixItUp({
        animation: {
            animateResizeContainer: false,
            effects: 'fade rotateX(-45deg) translateY(-10%)'
        }
    });


    //    $('.dropdown-menu').click(function (e) {
    //        e.stopPropagation();
    //    });


    //End
});



$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

(function ($) {

    /*===========================================================*/
    /*	Preloader 
/*===========================================================*/

    $(window).load(function () { // makes sure the whole site is loaded
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    })

    // for portfoli filter jquary
    $(window).load(function () {
        var $container = $('body');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });


    });

}(jQuery));


var modalBtns = [...document.querySelectorAll("#button")];
modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
    }
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.closest('.modal');
        modal.style.display = "none";
    }
});

window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}