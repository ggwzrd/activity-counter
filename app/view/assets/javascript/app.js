
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    } // Function to check if the use is using a Mobile browser(phone or tablet)
};



var main = function (){

	// icon menu animation

	$('.icon-menu').click(function(){
		$('.upline').toggleClass('rotate');
		$('.downline').toggleClass('rev-rotate');
		$('.navbar').toggleClass('nav-open');
    $('.icon-menu').toggleClass('no-border-shadow');
	});

  $('.nav-list').click(function(e){
    var destination = $('#' + $(e.target).attr('name'));
    $('html, body').animate({
        scrollTop: $(destination).offset().top
    }, 1000);
  });
	// flip coin animation

	$('.running').mouseenter(function(){
		$(this).addClass('running-hover');
	});

	$('.running').mouseout(function(){
		if(!$('.selected')[0]) {
			$(this).removeClass('running-hover');
		}
	});

	$('.gym').mouseenter(function(){
		$(this).addClass('gym-hover');
	});

	$('.gym').mouseout(function(){
		if(!$('.selected')[0]) {
			$(this).removeClass('gym-hover');
		}
	});

	// Running icon animation on click

	$('.running').click(function(){
		createActivity('running');
		$('.gym').fadeOut(100);

		setTimeout(function() {           // Activity div appear
			$(this).addClass('selected running-hover');
			$('.activities').fadeIn(200);
		}.bind(this), 100);
		// selecting the activity

	});

	// Gym icon animation on click

	$('.gym').click(function(){
		$('.running').fadeOut(100);
		createActivity('gym');
		setTimeout(function() {                     // Activity div appear
			$(this).addClass('gym-hover selected'); // selecting the activity
			$('.activities').fadeIn(200);
		}.bind(this), 100);

	});

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>=150){
      if((!isMobile.any())&&(($('.navbar-top')[0] === undefined))){
        $('.navbar').fadeOut(10);
        $('.navbar').addClass('navbar-top nav-open');
        $('.icon-menu').fadeOut(100);
        setTimeout(function () {
          $('.col-nav').addClass('col-nav-top');
          $('.nav-list').addClass('nav-list-top');
          $('.nav-list').find('li').addClass('list-element-top');
        }, 200);
        $('.navbar').fadeIn(10);
      }
    }else if(($('.navbar-top')[0] !== undefined)){
      $('.navbar').fadeOut(10);
      $('.nav-list').fadeOut(10);
      $('.icon-menu').removeClass('no-border-shadow').fadeIn(100);
      $('.upline').removeClass('rotate');
  		$('.downline').removeClass('rev-rotate');
      setTimeout(function () {
        $('.navbar').removeClass('navbar-top nav-open');
        $('.col-nav').removeClass('col-nav-top');
        $('.nav-list').removeClass('nav-list-top');
        $('.nav-list').find('li').removeClass('list-element-top');
        $('.navbar').fadeIn(10);
        $('.nav-list').fadeIn(10);
      }, 200);

    }
  });

  var waypoint = new Waypoint({
  element: $('.statistics'),
  handler: function(){
  		var chart = new CanvasJS.Chart("chartContainer",
  		{
  			title: {
  				text: ""
  			},
                          animationEnabled: true,
  			axisX:{
  				valueFormatString: "DD-MMM" ,
  				interval: 10,
  				intervalType: "day",
  				labelAngle: -50,
  				labelFontColor: "#7A0000",
  				minimum: new Date(2012,06,10)
  			},
  			axisY: {
  				title: "Distance",
  				interlacedColor: "#7A0000",
  				tickColor: "#CCC",
  				titleFontColor: "#7A0000",
  				valueFormatString: "#km,,.",
  				interval: 10
  			},
  			data: [
  			{
  				indexLabelFontColor: "black",
  				name: 'views',
  				type: "area",
  				color: "rgba(0,0,0,0.7)",
  				markerSize:8,
  				dataPoints: [
  				{ x: new Date(2012, 06, 15), y: 0,  indexLabel: "Registration date", indexLabelOrientation: "vertical", indexLabelFontColor: "orangered", markerColor: "orangered"},
  				{ x: new Date(2012, 06, 18), y: 0.5 },
  				{ x: new Date(2012, 06, 23), y: 1, indexLabel:"1km" },
  				{ x: new Date(2012, 07, 1), y: 1.5},
  				{ x: new Date(2012, 07, 11), y: 2 },
  				{ x: new Date(2012, 07, 23), y: 3, indexLabel:"3km"},
  				{ x: new Date(2012, 07, 31), y: 3.5  },
  				{ x: new Date(2012, 08, 04), y: 3},
  				{ x: new Date(2012, 08, 10), y: 3 },
  				{ x: new Date(2012, 08, 13), y: 3},
  				{ x: new Date(2012, 08, 16), y: 3},
  				{ x: new Date(2012, 08, 18), y: 4, indexLabel:"4km"},
  				{ x: new Date(2012, 08, 21), y: 4.5},
  				{ x: new Date(2012, 08, 24), y: 5, indexLabel:"5km"},
  				{ x: new Date(2012, 08, 26), y: 5.5},
  				{ x: new Date(2012, 08, 28), y: 6, indexLabel:"6km"}
  				]
  			}

  			]
  		});
      chart.render();
    }
});

};

$(document).ready(main);

var closeActivity = function(type){
		$('.activities').fadeOut(200);	// unselecting the activity
		setTimeout(function() {
			$('.' + type).removeClass(type+'-hover selected');
			$('.activities').text('');
			(type == 'running') ? $('.gym').fadeIn(500) : $(".running").fadeIn(500);
		}, 550);
};

var saveActivity = function(type){
    $('html, body').animate({
        scrollTop: $("#statistics").offset().top
    }, 1000);
};

var createOptions = function(n){
	var options = [];
	for(i=0;i<=n;i++){
		options[i] = $('<option>').text(i);
	}
	return options;
};

var checkValidityOf = function(object){
	var validity = true;
	$.map(object.children, function(o){
		if(validity !== false){
			switch (o.type){
				case ("text"): (o.value === "") ? validity = false : validity = true;
        break;
				case ("select-one"): (o.value === "") ? validity = false : validity = true;
          if(validity){
            (o.value === "0") ? validity = false : validity = true;
          }
				break;
			}
		}else{
			return validity;
		}
	});
	return validity;
};

var addExecise = function(){
	var approved = true;
	$('.content').children().each(function(){
		if(approved !== false){
			checkValidityOf(this) ? approved = true : approved = false;
		}else{
			approved = false;
		}
	});

	if(approved){
		$('<li>').text($('.exercise').find('input[type=text]').val() +': '+ $('.series').find('select').val() +' x ' + $('.reps').find('select').val()).appendTo($('.schedule').find("ul"));
	}else{
		$('.error').fadeIn(1000);
		$('.error').text('Fill in all the information');
		$('.error').fadeOut(1000);
	}

};


var createActivity = function (type){
  if($('.'+type).hasClass('selected')===false){
  	$('<div onClick = "javascript: closeActivity(\''+type+'\')">').text('CANCEL').addClass('close').appendTo($('.activities'));
  	$('<span>').appendTo($('.activities'));
  	$('<div>').addClass('error').appendTo('.activities');
  	$('<div>').addClass('content').appendTo('.activities');

		if(type == 'running'){
			$('<div>').addClass('container distance').appendTo('.activities').find($('.content'));
			$('<h1>').text('Distance').appendTo('.distance');

			var select = $('<select size = "19">').append(createOptions(20));
			select.appendTo($('.distance'));
			$('<p>').text('.').appendTo($('.distance'));
			select = $('<select size = "8">').append(createOptions(10));
			select.appendTo($('.distance'));
			$('<p>').text('km').appendTo($('.distance'));

			$('<div>').addClass('container duration').appendTo('.activities').find($('.content'));
			$('<h1>').text('Duration').appendTo($('.duration'));
			select = $('<select size = "239">').append(createOptions(240));
			select.appendTo($('.duration'));
			$('<p>').text('m').appendTo($('.duration'));
			$('<p>').text(':').appendTo($('.duration'));
			select = $('<select size = "59">').append(createOptions(60));
			select.appendTo($('.duration'));
			$('<p>').text('s').appendTo($('.duration'));

			$('<span>').appendTo('.activities').find($('.content'));
		}else if(type == 'gym'){

			$('<div>').addClass('container exercise col-12').appendTo('.activities').find($('.content'));
			$('<h1>').text('Excercise').appendTo('.exercise');
			$('<input type ="text" placeholder = "Push ups">').appendTo('.exercise');
			$('<input type ="submit" value="+" onClick = "javascript: addExecise()">').addClass('round-button').appendTo('.exercise');

			$('<div>').addClass('container series').appendTo('.activities').find('.content');
			$('<h1>').text('Series').appendTo('.series');
			$('<select size = "9">').append(createOptions(10)).appendTo($(".series"));

			$('<div>').addClass('container reps').appendTo('.activities').find('.content');
			$('<h1>').text('Reps').appendTo('.reps');
			$('<select size = "19">').append(createOptions(50)).appendTo($(".reps"));
			$('<div>').addClass('col-12 container schedule').appendTo('.activities').append($('<ul>').addClass('col-12'));
		}else{
			console.error("Unexpected parameter on createActivity method");
		}
		$('<input type = "submit" onClick = "javascript: saveActivity(\''+type+'\')" name = "add" value = "SAVE">').appendTo($('.activities'));
	}
};
