(function($) {
$('*').hasClass('eael-protected-content') ?
	window.scrollTo({
    top: $('.eael-protected-content').last().offset().top,
    left: 0,
    behavior: 'smooth'
  })
: null;
})( jQuery );
