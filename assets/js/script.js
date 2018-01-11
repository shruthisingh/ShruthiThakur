$(document).ready(function () {
	var trigger = $('.hamburger'),
		overlay = $('.overlay'),
	   isClosed = false;
  
	  trigger.click(function () {
		hamburger_cross();      
	  });
  
	  function hamburger_cross() {
  
		if (isClosed == true) {          
		  overlay.hide();
		  trigger.removeClass('is-open');
		  trigger.addClass('is-closed');
		  isClosed = false;
		} else {   
		  overlay.show();
		  trigger.removeClass('is-closed');
		  trigger.addClass('is-open');
		  isClosed = true;
		}
	}
	
	$('[data-toggle="offcanvas"]').click(function () {
		  $('#wrapper').toggleClass('toggled');
	});  
  });
  
 	// Slider

 	$('#workstation-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})
	$('#expert-slider').owlCarousel({
		loop:true,
	    items: 1
	})
	$('#experts-slider').owlCarousel({
		loop:false,
		items:3
	})

 	// height

 	var h = $('.expert').height();
 	$('.expert .col-sm-6 div').height(function (index, height) {
	    return (h);
	});

  $(document).ready(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},9000);
	});

});