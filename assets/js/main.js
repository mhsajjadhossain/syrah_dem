$(function () {

  "use strict";

  //===== Sticky menu
  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-area").removeClass("sticky");
    } else {
      $(".header-area").addClass("sticky");
    }
  });


  //===== Mobile Menu toggler icon
  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });



  //===== Count-Down Clock
  $('.count').countdown({
    date: '1/15/2020 23:59:59',
    offset: -8,
    day: 'Day',
    days: 'Days'
  }, function () {
    alert('Done!');
  });


  //===== Updates Slides 
  $('.updates-slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: '.arrow-right',
    prevArrow: '.arrow-left',
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });

//==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});





});