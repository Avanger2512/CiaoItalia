import './burger'
import './counter'
import './slider'
import './accordion'
import './popup'
import './goto'




// $(document).ready(function() {
//     var n = $('.count').html() - 1;
//     setInterval(function() {
//         if (n >= 0) { $('.count').html(n--); }
//     }, 1000);
// });


// var countdownNumberEl = document.getElementById('countdown-number');
// var countdown = 10;
//
// countdownNumberEl.textContent = countdown;
//
// setInterval(function() {
//   countdown = --countdown <= 0 ? 10 : countdown;
//
//   countdownNumberEl.textContent = countdown;
// }, 1000);



// form validation
	// (function() {
	// 	var popup  = $('.js-popup'),
	// 		thanks = $('.js-popup-thanks'),
	// 		body   = $('body');
	// 	// welcome
	// 	$.validate({
	// 		form: '#callback',
	// 		onSuccess: function() {
	// 			post_data = {
	// 				'name': $('#callback input[name=name]').val(),
	// 				'tel': $('#callback input[name=tel]').val()
	// 			};
	// 			window.piper('http://javago.in.ua/pipeform/forest_callback.php', $("#callback").serialize());
	// 			// Ajax post data to server
	// 			$.post('send.php', post_data, function(response) {
	// 				if (response.type == 'error') {
	// 					console.log('error');
	// 				}
	// 				else {
	// 					// reset values in all input fields
	// 					popup.fadeOut();
	// 					thanks.fadeIn('fast');
	// 					$('#callback').get(0).reset();
	// 					setTimeout(function() {
	// 						thanks.fadeOut('fast');
	// 						body.css('overflow', 'auto');
	// 					}, 2500);
	// 					dataLayer.push({'event': '01'});
	// 				}
	// 			}, 'json');
	// 			return false;
	// 		}
	// 	});
	// 	// footer
	// 	$.validate({
	// 		form : '#form',
	// 		onSuccess: function() {
	// 			post_data = {
	// 				'name': $('#form input[name=name]').val(),
	// 				'email': $('#form input[name=email]').val(),
	// 				'tel': $('#form input[name=tel]').val(),
	// 				'comment': $('#form textarea[name=comment]').val()
	// 			};
	// 			window.piper('http://javago.in.ua/pipeform/forest_questions.php', $("#form").serialize());
	// 			$.post('send.php', post_data, function(response) {
	// 				if (response.type == 'error') {}
	// 				else {
	// 					thanks.fadeIn('fast');
  //
	// 					$('#form').get(0).reset();
	// 					setTimeout(function() {
	// 						thanks.fadeOut('fast');
	// 						body.css('overflow', 'auto');
	// 					}, 2500);
	// 					dataLayer.push({'event': '02'});
	// 				}
	// 			}, 'json');
	// 			return false;
	// 		}
	// 	});
	// 	$.validate({
	// 		form : '#transfer',
	// 		onSuccess: function() {
	// 			post_data = {
	// 				'name': $('#transfer input[name=name]').val(),
	// 				'email': $('#transfer input[name=email]').val(),
	// 				'tel': $('#transfer input[name=tel]').val(),
	// 				'comment': $('#transfer textarea[name=comment]').val()
	// 			};
	// 			window.piper('http://javago.in.ua/pipeform/forest_transfer.php', $("#transfer").serialize());
	// 			$.post('send.php', post_data, function(response) {
	// 				if (response.type == 'error') {}
	// 				else {
	// 					popup.fadeOut();
	// 					thanks.fadeIn('fast');
	// 					$('#transfer').get(0).reset();
	// 					setTimeout(function() {
	// 						thanks.fadeOut('fast');
	// 						body.css('overflow', 'auto');
	// 					}, 2500);
	// 					dataLayer.push({'event': '03'});
	// 				}
	// 			}, 'json');
	// 			return false;
	// 		}
	// 	});
	// }());
