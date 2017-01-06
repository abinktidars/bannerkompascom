$(document).ready(function(){

	//Preloader
	if ($(window).load(function() {
          $("#preloader").fadeOut("slow", function() {
              $(this).remove()
                  })
              })
        )

	// Show Mega Menu Category
	$(".btn--category").click(function(){
		$(".megamenu-category").fadeToggle();
	})


	// Slide All
	$('.sliderImage').slick({
	    infinite: true,
	    autoplay: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 1000,
	    dots: true,
	    arrows: true,
		fade: true,
		cssEase: 'linear'
	});


})