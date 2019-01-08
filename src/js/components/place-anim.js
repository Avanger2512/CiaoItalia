$(window).scroll(function(){
  $('.js-places').each(function(){
    if(isScrolledIntoView($(this))){
      $(this).addClass('is-visible');
      decreaseValue($(this));
    }
    // else{
    //   $(this).children('span').text('invisible');
    // }
  });
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function decreaseValue(el){
  let num = $(el).find('.js-places-num');
  let numEnd = num.data('end');
  let numText = num.text()-1;

  num.prop('Counter', +numText).animate({
    Counter: $(this).text()
  }, {
    duration: 2200,
    easing: 'swing',
    step: function (now) {
      if (now >= +numEnd-1) {
        $(this).text(Math.ceil(now));
        return false;
      }
    },
    complete: function() {
      $(this).text(numEnd);
    }
  });
}
