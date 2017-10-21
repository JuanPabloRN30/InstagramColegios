var form = '#main-form';
$('.fm-container form.fm-form').hide();
$(form).show();
$('.fm-container').hide().fadeIn(1000);
$('.fm-container_body').hide().delay(1500).slideDown(1000);

$('.fm-form_link').on('click', function() {
	$(form)[0].reset();
	$(form).slideUp();
	form = $(this).attr('href');
	$(form).slideDown();
});