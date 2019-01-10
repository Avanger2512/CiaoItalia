import slick from 'slick-carousel';

let citySlider = $('.js-slider-city');

let teamSlider = $('.js-slider-team'),
    teamCount = teamSlider.find('.team__item').length;

let options = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000
}

let optionsTeam = {
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // variableWidth: true
      }
    }
  ]
}

citySlider.slick(options);

let teamNext = teamSlider.parent().find('.js-slider-arr-next')
let teamPrev = teamSlider.parent().find('.js-slider-arr-prev');

$(window).on('load resize orientationchange', function() {
  if (teamCount > 5) {
    if (!teamSlider.hasClass('slick-initialized')) {
      teamSlider.slick(optionsTeam);
      teamSlider.parent().addClass('is-slider-init');
    }
  } else {
    if ($(window).width() > 979) {
      if (teamSlider.hasClass('slick-initialized')) {
        teamSlider.slick('unslick');
        teamSlider.parent().removeClass('is-slider-init');
      }
    }
    else{
      if (!teamSlider.hasClass('slick-initialized')) {
        teamSlider.slick(optionsTeam);
        teamSlider.parent().addClass('is-slider-init');
      }
    }
  }
});

teamPrev.on('click', function(e){
  e.preventDefault();
  teamSlider.slick('slickPrev');
});

teamNext.on('click', function(e){
  e.preventDefault();
  teamSlider.slick('slickNext');
});
