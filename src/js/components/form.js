import popup from './popup'

$(document).ready(function(){
  $(".js-form").submit(function(event) {
    let form_data = $(this).serialize();

		event.preventDefault();

    $.ajax({
	    type: "POST",
	    url: "send.php",
	    data: form_data,
	    success: function() {
				popup.open('thanks-message');
				$(".js-form").get(0).reset();
      	console.log("Ваше сообщение отпрвлено!");
			}
	  });
  });
});
