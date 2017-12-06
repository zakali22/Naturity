$(document).ready(function(){
// external js: masonry.pkgd.js
	$('.dropdown').on('mouseover', function(){
		$(this).children('.dropdown-menu').slideDown('fast');
	});
	$('.dropdown').on('mouseleave', function(){
		$(this).children('.dropdown-menu').slideUp('fast');
	});
});