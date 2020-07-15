$(document).ready(function(){
    $('.slider-wrapper').slick({
        'setting-name': 'setting-value',
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        outline: 'none',
        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
    });

    let questionBox = $('#_faq-box').children('figure').children('.question-box');

    questionBox.on("click", function() {
        let plusIcon = $(this).children('.icon-box').children('i');

        $(this).siblings(".response-box").toggleClass('opened');
        $(this).siblings(".response-box").toggleClass('closed');
        plusIcon.toggleClass('rotate');
        console.log($(this));
    })
});
