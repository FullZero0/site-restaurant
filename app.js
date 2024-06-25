const burger = document.querySelector('#up-menu2');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});


$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.close2').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});


$('.open-popup2').click(function(e) {
    e.preventDefault();
    $('.popup-bg2').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup2').click(function() {
    $('.popup-bg2').fadeOut(800);
    $('html').removeClass('no-scroll');
});

var speed = 'slow';

$('html, body').hide();

$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
});