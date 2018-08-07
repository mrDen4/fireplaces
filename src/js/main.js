$(document).ready(() => {
    $('.header__btn').on('click', function() {
        $('.header__contacts').toggleClass('header__contacts--active');
        $('.header__list').toggleClass('header__list--active');
    });

    $('.buy__btn').on('click', function() {
        $('.product__modal-bg').toggleClass('product__modal-bg--active');
        $('.product__modal').toggleClass('product__modal--active');
    });

    $('.product__modal-bg').on('click', function() {
        $('.product__modal-bg').toggleClass('product__modal-bg--active');
        $('.product__modal').toggleClass('product__modal--active');
    });

    $('.another__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.another__btn-left'),
        nextArrow: $('.another__btn-right')
    });
});