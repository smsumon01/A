$(function () {
	'use strict';

	$('.pond').click(function () {
		$('html').animate({
			scrollTop: 0,
		}, 2000);
	});

	$(window).scroll(function () {
		var scroller = $(this).scrollTop();

		if (scroller > 200) {
			$('.pond').slideDown();
		} else {
			$('.pond').slideUp();
		}
	});
	//banner part

	$('#banner_part').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
	});

	//About part
	$('.gymn_video').venobox({
		framewidth: '700px',
		frameheight: '450px',
		border: '5px',
		bgcolor: '#bd0930',
		spinner: 'three-bounce',
		spinColor: 'rgb(51, 189, 9)',
	});
	//Gallery part
	$('.ven_light').venobox({
		framewidth: '700px',
		border: '5px',
		bgcolor: '#bd0930',
		spinner: 'three-bounce',
		spinColor: 'rgb(51, 189, 9)',
		closeColor: '#f7e941',
		arrowsColor: '#09bd6a',
	});
	//Testimonial part
	$('.testi_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    },
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
  ]
	});
	//Branding part
	$('.logo_slop').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: false,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false,
				}
    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
				}
    },
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
	//Team part
	$('.device_slid').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		dots: false,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
					arrows: false,
				}
    			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    		},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,

				}
    }
  ]
	});
	//=============counter_part===========
	$('.counter').counterUp({
		delay: 20,
		time: 700
	});


	var containerEl = document.querySelector('.contain');

	var mixer = mixitup(containerEl);
});
