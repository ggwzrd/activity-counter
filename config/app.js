
var main = function (){
	$('.icon-menu').click(function(){
		$('.upline').toggleClass('rotate')
		$('.downline').toggleClass('rev-rotate')
		$('.navbar').toggleClass('nav-open')
	});
};

$(document).ready(main);