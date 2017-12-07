$(document).ready(function(){
	// Dropdown
	$('.dropdown').on('mouseover', function(){
		$(this).children('.dropdown-menu').slideDown('fast');
	});
	$('.dropdown').on('mouseleave', function(){
		$(this).children('.dropdown-menu').slideUp('fast');
	});

});