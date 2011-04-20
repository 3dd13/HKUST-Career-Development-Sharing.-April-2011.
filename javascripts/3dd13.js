$(document).ready(function() {
	$('.footer-menus').hover(
		function() {
			$(this).animate({
        opacity: 1,				
				marginBottom: '50px',
			}, 500);
		},
		function() {
			$(this).animate({
        opacity: 0.45,
				marginBottom: '0px',
			}, 2000);
	  }
	);
})