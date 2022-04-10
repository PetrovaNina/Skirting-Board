
// Slick slider
$("#slider").slick({
//   autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  fade: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  cssEase: "linear",
  prevArrow: '<button class="slider__arrow-button slider__arrow-button--prev"></button>',
  nextArrow: '<button class="slider__arrow-button slider__arrow-button__next"></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
});
