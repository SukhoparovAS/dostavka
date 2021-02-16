$(document).ready(function(){
	$('.burger').click(function(event) {
		$('.burger , .menu').toggleClass('active');
	});
	$('.slider').slick({
		arrows:true,
		dots: false,
		adaptiveHeight:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		easing:'linear',
		infinite:true,
		initialSlide:1,
		autoplay:true,
		autoplaySpeed:5000,
		pausOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true,
		swipe:true,
		touchThreshold:7,
		touchMove:true,
		waitForAnimate:false,
		centerMode:false,
		variableWidth:false,
		rows:1,
		fade:false,
	});
	console.log('dsa');
});
