$(document).ready(function(){
  let accordion = $(".js-accordion"),
      accordionBtn = accordion.find('.js-accordion-btn');

  accordionBtn.on("click", function() {
    // $('.js-accordion-btn').removeClass("is-active");
    // $(".js-accordion-content").slideUp(300);

    $(this)
      .toggleClass("is-active")
      .next()
      .slideToggle();


  });
});
