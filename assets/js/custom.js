jQuery(function($) {
  $(document).on('click', '.lightboxgallery-gallery-item', function(event) {
    event.preventDefault();
    $(this).lightboxgallery({
      showCounter: true,
      showTitle: true,
      showDescription: true
    });
  });
});

$(document).ready(function(){
  $('.custom1').owlCarousel({
    // animateOut: 'flipOutDown',
    // animateIn: 'flipInX',
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    items:1,
    // nav:true, 
    margin:30,
    smartSpeed:450,
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
	});
});