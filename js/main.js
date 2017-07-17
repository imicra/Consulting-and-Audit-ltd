$(document).ready(function() {

	var proxied = window.alert;
	window.alert = function() {
		$("#myModal .modal-body").text(arguments[0]);
		$("#myModal").modal('show');
	};//replace alert with bootstrap modal

	$("form, #clientform").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("form, #clientform").trigger("reset");
		});
		return false;
	});

});