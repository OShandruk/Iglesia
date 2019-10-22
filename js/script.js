
// ++++++++++++SITE SLIDERS++++++++++++++++


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
  $('.top-slider-hompg2').slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
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
  autoplay:true,
  autoplaySpeed: 3000,
});

});



// ===============TIMER=============

function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;
 
  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();
 
  if ( isNaN(dateEnd) ) {
    return;
  }
 
  timer = setInterval(calculate, 1000);
 
  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
 
    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);
 
      document.getElementById("days").innerHTML    = parseInt(days, 10);
      document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
 
  function display(days, hours, minutes, seconds) {}
}
 
 
 
countdown('10/19/2019 03:14:07 AM');



// =======================END TIMER=====================


// ==========================TABS===========================



$(document).ready(function(){
  
$('#myTab2').jqTabs({

  mainWrapperClass:'events-wrap',

  tabClass:'news-item',

  tabContentClass:'news'

});


});
// $('#myTab').jqTabs({
//   tabClicked: $.noop,
//   tabContentLoaded: $.noop
// });
// // selectors
// $mainWrapper:".jq-tab-wrapper";
// $tab<a href="https://www.jqueryscript.net/menu/">Menu</a>:".jq-tab-menu";
// $tab:".jq-tab-title";
// $contentWrapper:".jq-tab-content-wrapper";
// $tabContent:".jq-tab-content";
 
// // properties
// $tabBorder: 1px solid #d1d1d1;
// $tabBgColor: #d7d7d7;
// $activeTabBorder: 1px solid #505050;
// $activeTabBgColor: #e4e4e4;
// $mainPadding: 1em;
// $tabTitlePadding: 1em 2em;
// $tabContentPadding: 1em 1.8em;





// =============================END TABS========================