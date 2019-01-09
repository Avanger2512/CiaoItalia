export const burger = $('.js-burger');
export const header = $('.js-header');
export const body = $('body');


burger.on('click', function() {
  if (!(header.hasClass('is-menu-open'))) {
    body.attr( 'data-pos', $(window).scrollTop());
    
    header.addClass('is-menu-open');
    $(this).addClass('is-active');
    body.addClass('is-hidden');

  } else {
    closeMenu();
  }

});


function closeMenu() {
  body.removeClass('is-hidden');
  burger.removeClass('is-active');
  header.removeClass('is-menu-open');
  $( window ).scrollTop( body.attr( 'data-pos' ));
}



export default closeMenu;
