jQuery(function(){	
	$('#burger').on('click', function (e) {
		e.preventDefault();
		$('li.menu').toggleClass('show');
	});

	

	$(window).scroll(function () {
		var btn = $('.scroll_top');
		if ($(window).scrollTop() > 300) {
			btn.addClass('active');
		}
				else {
				btn.removeClass('active');
		}
		$('.scroll_top').click(function (e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: 0}, 1000);
			});
	
		});
});