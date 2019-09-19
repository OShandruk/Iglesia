$(document).ready(function(){
  $('.our-people-slider').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  touchMove: true,
  appendArrows: $('.our-people-slide-btn'),
  prevArrow: '<div class="arrow-left"><span></span></div>',
  nextArrow: '<div class="arrow-right"> <span></span></div>'


});

});

$(document).ready(function(){
  $('.top-slider').slick({
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  touchMove: true,
  appendArrows: $('.slide-btn'),
  prevArrow: '<a href="#" class="slide-left"></a>',
  nextArrow: '<a href="" class="slide-right"></a>',
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1500,

});

});

$(document).ready(function(){
  $('.our-blog-slider').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  touchMove: true,
  appendArrows: $('.our-blog-slide-btn'),
  prevArrow: '<div class="arrow-left"><span></span></div>',
  nextArrow: '<div class="arrow-right"> <span></span></div>'


});

});

$(document).ready(function(){
  $('.bottom-slider-wrap').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  touchMove: true,
  appendArrows: $('.bottom-slider-btn'),
  prevArrow: '',
  nextArrow: '<p class="slider-arrow"></p>',
  autoplay: true,
  autoplaySpeed: 3000,
});

});