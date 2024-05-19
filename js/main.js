$(document).ready(function () {
  $(".top__slider ").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
        },
      },
    ],
  });
});

$(function () {
  $(".reviews__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".menu-btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--activ");
  });
});
