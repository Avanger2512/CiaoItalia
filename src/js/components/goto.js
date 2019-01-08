import {header, burger, body} from './burger'
import closeMenu from './burger'

const SCROLL_TO_BTN = $('.js-go-to');
const HTMLBODY = $('html, body');

SCROLL_TO_BTN.on("click", function() {
  let id = $(this).data("go");
  let target = $('.js-section[data-id="' + id + '"]');

  if (header.hasClass('is-menu-open')) {
    closeMenu();
  }

  if (target.length !== 0) {
    HTMLBODY.animate({
      scrollTop: target.offset().top
    },1000);
  }
  return false;
});
