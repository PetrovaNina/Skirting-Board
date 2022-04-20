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
const isTablet = $(document).width() < 992 && $(document).width() > 768;

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
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        vertical: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      },
    },
  ],
});

// NAVIGATION BAR CONDITIONS

const burger = $(".hamburger");
const navbar = $(".header-navbar");
const navbarToggler = $(".navbar-toggler");

function toggleBurgerMenu() {
  burger.toggleClass("active");
  navbar.toggleClass("active");
}

// Manipulate navbar on mobile
burger.on("click", toggleBurgerMenu);

// Hide navbar and close burger when clicked outside the navbar
$(document).on("click", (event) => {
  if (
    navbar.hasClass("active") &&
    $(event.target).closest(navbar).length == 0 &&
    $(event.target).closest(burger).length == 0
  ) {
    toggleBurgerMenu();
  }
});

// Uncheck other togglers when one of them is clicked
navbarToggler.on("change", function () {
  navbarToggler.not(this).prop("checked", false);
});
