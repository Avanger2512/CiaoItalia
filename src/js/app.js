import Inputmask from "inputmask";

// components
import './components/index';



let selector = document.querySelectorAll(".js-mask-tel");

let im = new Inputmask({"mask": "+3 8(999)999 99 99"});
im.mask(selector);



$(window).on('scroll', function() {
  let scrollTop = $(this).scrollTop();
  checkScrollPosition(scrollTop);
});

function checkScrollPosition(scroll) {
  if (scroll >= 40) {
    $('.js-header').addClass('is-scroll');
  } else {
    $('.js-header').removeClass('is-scroll');
  }
}

$(document).ready(function(){
  checkScrollPosition($(window).scrollTop());
});
