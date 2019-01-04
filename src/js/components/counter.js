const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

const counter = $('.js-counter'),
      counterDays = counter.find('.js-counter-days'),
      counterHours = counter.find('.js-counter-hours'),
      counterMinutes = counter.find('.js-counter-minutes');

let countdown = counter.data('counter');


let countDown = new Date(countdown).getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      counterDays.text(Math.floor(distance / (day))),
      counterHours.text(Math.floor((distance % (day)) / (hour))),
      counterMinutes.text(Math.floor((distance % (hour)) / (minute)));
    }, second);
