$('.testimonial .buttons span').on('click', function(){
	$('.testimonial .buttons span').removeClass('active');
	$(this).addClass('active');
	shift = $(this).index();
	shift *= 100;
	$('.testimonial .inner').css('margin-left','-'+shift+"%");
});