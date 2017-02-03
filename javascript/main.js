//jQuery Smooth Scroll

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//Slick.JS

$(document).ready(function() {
    $('#carousel').slick({
        accessibility: true,
        dots: true,
        prevArrow: $('.prev'),
    });
});

//Mobile Navigation

$(function() {
    $('.menu-toggle').on('click', function() {
        $('.mobile-menu').toggleClass('open');
    });
});
