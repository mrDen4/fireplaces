$(document).ready(() => {
    $('.header__btn').on('click', function() {
        $('.header__contacts').toggleClass('header__contacts--active');
        $('.header__list').toggleClass('header__list--active');
        console.log('click');
    });
});