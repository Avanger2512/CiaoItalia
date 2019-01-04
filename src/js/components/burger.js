const burger = $('.js-burger');
const header = $('.js-header');


burger.on('click', function() {
  $(this).toggleClass('is-active');
  header.toggleClass('is-menu-open');
});
