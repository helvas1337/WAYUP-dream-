var btn = document.getElementById('btn');
btn.onclick = function() {
    var text = document.querySelector('.offer');
    text.classList.add('part-one');
    var color = document.querySelector('.header');
    color.classList.add('part-two');
    var color = document.querySelector('.btn');
    color.classList.add('part-three');
}
var mailbtn = document.getElementById('mailbtn');
mailbtn.onclick = function() {
    var color = document.querySelector('.mail');
    color.classList.add('part-two');
    var color = document.querySelector('.mailbtn');
    color.classList.add('part-three');
    var color = document.querySelector('.input-one');
    color.classList.add('part-four');
     var color = document.querySelector('.input-two');
    color.classList.add('part-four');
     var color = document.querySelector('.input-three');
    color.classList.add('part-four');
     var color = document.querySelector('.input-four');
    color.classList.add('part-four');
     var text = document.querySelector('.mail-title');
    text.classList.add('part-one');
}
$(function() {
    $(window).scroll(function() {
        $('#lean .section-title').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");
            }
        });
    });
    $(window).scroll(function() {
        $('.item-one').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.item-two').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
    $(window).scroll(function() {
        $('.item-three').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.mail-title').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");
            }
        });
    });
    $(window).scroll(function() {
        $('.input-one').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.input-two').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.input-three').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.input-four').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.mailbtn').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
    $(window).scroll(function() {
        $('.last').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
})