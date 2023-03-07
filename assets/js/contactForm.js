$(function () {
	//contact us form -- contact page
	$('#contact-form').on('submit', function (event) {
		event.preventDefault(); // prevent reload
		let service_id = "";
		let template_id = "";
		let user_id = ""
		let formData = new FormData();
		let fullName = $('#name').val();
		let email = $('#email').val();
		let phone = $('#phone').val();
		let description = $('#description').val();
		$('#submit').prop('disabled', true);
		$("#submit").text("Sending...");
		$('.loading').addClass('show');
		formData.append('service_id', service_id);
		formData.append('template_id', template_id);
		formData.append('user_id', user_id);
		formData.append('fullName', fullName);
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('description', description);
		$.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
			type: 'POST',
			data: formData,
			contentType: false, // auto-detection
			processData: false // no need to parse formData to string
		}).done(function () {
			bootbox.alert({
				message: "Thank you for contacting us. We will get back to you shortly.",
				backdrop: true,
				className: 'rubberBand animated'
			});
			$("input").val("");
			$("textarea").val("");
			$("p").html("");
			$("#submit").text("Send");
			$('.loading').removeClass('show');
			$('#submit').prop('disabled', false);
		}).fail(function (error) {
			$("#submit").text("Send");
			$('.loading').removeClass('show');
			$('#submit').prop('disabled', false);
			bootbox.alert({
				message:"Sorry for the inconvenience. Email feature is under development.",
				backdrop: true,
				className: 'rubberBand animated'
			});
		});
	});
});
