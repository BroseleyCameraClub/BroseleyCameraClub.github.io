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
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
	});
});