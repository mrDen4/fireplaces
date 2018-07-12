$(document).ready(() => {
    $('.header__btn').on('click', function() {
        $('.header__contacts').toggleClass('header__contacts--active');
        $('.header__list').toggleClass('header__list--active');
        console.log('click');
    });

    $('.another__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.another__btn-left'),
        nextArrow: $('.another__btn-right')
    });
});