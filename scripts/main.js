// Slick slider
// Single-slide slider
$("#slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  fade: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  cssEase: "linear",
  prevArrow:
    '<button class="slider__arrow-button slider__arrow-button--prev"></button>',
  nextArrow:
    '<button class="slider__arrow-button slider__arrow-button__next"></button>',
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

// Galery view slider
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".slider-for",
  centerMode: false,
  focusOnSelect: true,
});
