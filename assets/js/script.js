$(function() {


	$(window).scroll(function() {
		window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
		if(!window.isMobile ) {
			if ($(this).scrollTop() > 90) {
				$('.header').addClass("header-small")
			} else {
				$('.header').removeClass("header-small")
			}
		}
	});




	$(".navigationList-item").hover(function(){
		$(this).addClass("navigationList-item--dropdown--show");
	}, function(){
		$(this).removeClass("navigationList-item--dropdown--show");
	});



	$(".smallMenu-icon").on("click touchstart", function(e){
		$(this).toggleClass('smallMenu-icon--active');
		$('.mobileNavigation-bg').toggleClass('active');
		$('body').toggleClass('no-scroll');

		// When touch event fires, this is needed to prevent the click
		// event from firing as well as @RyanWheale noted in the comments.
		e.preventDefault();
		e.stopPropagation();
	});
	$(".mobileNavigationList-item").on('click touch', function(e) {
		$(this).toggleClass("active");
	});
	$(".mobileNavigationList-item").on('click touch', function(e){
		$(this).children('div.mobileNavigation__wrapper').addClass("active");
		e.preventDefault();
	}, function(e){
		$(this).children('div.mobileNavigation__wrapper').removeClass("active");
	});



});

// ------------------------------------ animation on scroll start-------------------------------------------




$(function() {
	AOS.init();
});
// ------------------------------------ animation on scroll end-------------------------------------------

$(function () {
	setTimeout(function() {
		$('.loading-wrapper').addClass('hide');
	},100);
});


$("#owl-demo").owlCarousel({

	navigation : true, // Show next and prev buttons

	slideSpeed : 300,
	paginationSpeed : 400,

	items : 1,
	itemsDesktop : false,
	itemsDesktopSmall : false,
	itemsTablet: false,
	itemsMobile : false

});
