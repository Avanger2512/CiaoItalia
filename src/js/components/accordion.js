$(document).ready(function(){
  let accordion = $(".js-accordion"),
      accordionBtn = accordion.find('.js-accordion-btn');

  accordionBtn.on("click", function() {
    $(this)
      .toggleClass("is-active")
      .next()
      .slideToggle();
  });
});
