$(document).ready(function(){
  $('.slider, .slider-mobile').slick({
    dots: true,
    arrows: false,
    fade: true,
    // variableWidth: true,
    // centerMode: true,
  });

  $('.menu-icon').on('click', function () {
    $('ul').slideToggle('slow');
  })
});