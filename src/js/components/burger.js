export const burger = $('.js-burger');
export const header = $('.js-header');
export const body = $('body');


burger.on('click', function() {
  $(this).toggleClass('is-active');
  header.toggleClass('is-menu-open');
  body.toggleClass('is-hidden');
});


function closeMenu() {
  burger.removeClass('is-active');
  header.removeClass('is-menu-open');
  body.removeClass('is-hidden');
}

export default closeMenu;
