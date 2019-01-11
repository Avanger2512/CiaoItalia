import Inputmask from "inputmask";
import objectFitImages from 'object-fit-images'
import LazyLoad from "vanilla-lazyload";

// components
import './components/index';

let selector = document.querySelectorAll(".js-mask-tel");
let header = $('.js-header');

let im = new Inputmask({"mask": "+3 8(999)999 99 99"});
im.mask(selector);

$(window).on('scroll', function() {
  let scrollTop = $(this).scrollTop();
  checkScrollPosition(scrollTop);
});

function checkScrollPosition(scroll) {
  if (scroll >= 100) {
    header.addClass('is-scroll');
  } else {
    header.removeClass('is-scroll');
  }
}

$(function () {
  checkScrollPosition($(window).scrollTop());
  objectFitImages();
});

let myLazyLoad = new LazyLoad({
  elements_selector: ".lazy"
});
