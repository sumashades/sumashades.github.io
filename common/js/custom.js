// custom
function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#s1').offset().top;
  if (window_top >= div_top)
	$('#scrollspy').addClass('stick')
  else
	$('#scrollspy').removeClass('stick');
}
// fixed

// document ready start
$(document).ready(function(){
	
	// detect touch
	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) 
		|| navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/)
		|| navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/ZuneWP7/i)) {
		$('body').addClass('touch-screen');
	}
	
	//initializaions	
	document.createElement( "picture" );
	document.createElement( "main" );
	
	// window resize
	
	
	// functions	
	$(".work-car").owlCarousel({
		items:1,loop:true,nav:true,autoplay: true,autoplaySpeed: 1000,slideSpeed : 100,autoplayTimeout: 6000,
		autoWidth:true
	  });
	  
	  $(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
		});
	});
	
	$('#validate-contact').submit(function(){
		$('#append-ajax').html('');
		$.ajax({
			type: "POST",
			url: "contactform.php",
			data: { Name: $("#name-element").val(), Email: $("#email-element").val() , Phone: $("#contact-element").val(), Message: $("#msg-element").val() }
		}).done(function( data ) {
			var HTMLData = '';
			if(data.status){
				HTMLData = '<div class="success">'+data.data+'</div>';
				$('#append-ajax').html(HTMLData);
			}else{
				HTMLData = '<div class="error">'+data.data+'</div>';
				$('#append-ajax').html(HTMLData);
			}
		});
		return false;
	});
	

	$(function() {
	  $(window).scroll(sticky_relocate);
	  sticky_relocate();
	});
	
});
// document ready end
