export function initTestimonialSlider() {
  // Use jQuery's length check to avoid errors on pages without a slider
  const $slider = window.jQuery('.testimonial-slider');

  if ($slider.length) {
    $slider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      responsive: [{
          breakpoint: 1024,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  }
};
