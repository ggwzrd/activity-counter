
var main = function (){
	$('.icon-menu').click(function(){
		$('.upline').toggleClass('rotate')
		$('.downline').toggleClass('rev-rotate')
		$('.navbar').toggleClass('nav-open')
		$('.content-container').toggleClass('nav-open')
	});

	$('.running').mouseenter(function(){
		$(this).addClass('running-hover')
	});

	$('.running').mouseout(function(){
		if(!$('.selected')[0]) {
			$(this).removeClass('running-hover')
		}
	});

	$('.running').click(function(){
		$(this).animate({left: '200px'})
		$(this).addClass('running-hover')
		$(this).addClass('selected')
		$('.gym').animate({
			opacity :0
		}, 500);
		$('.activities').animate({
			opacity :50
		}, 2000);

	});

	$('.gym').mouseenter(function(){
		$(this).addClass('gym-hover')
	});

	$('.gym').mouseout(function(){
		if(!$('.selected')[0]) {
			$(this).removeClass('gym-hover')
		}
	});

	$('.gym').click(function(){
		$(this).animate({right: '200px'})
		$(this).addClass('gym-hover')
		$(this).addClass('selected')
		$('.running').animate({
			opacity :0
		}, 500)

	});

	$('.close').click(function(){
		$('.activities').animate({
			opacity :0
		}, 500)
		$('.running').removeClass('selected')
		$('.running').removeClass('running-hover')
		$('.running').animate({left: '0px'})
		$('.gym').animate({
			opacity: 100
		})
	});
};

$(document).ready(main);