$(document).ready(function(){


  $(".order").hover(function(){
    $(".order-hover").fadeToggle();
  });



  $(".button-order").click(function(){
    $(".order-form").fadeIn();
    $('#overlay').addClass('new-overlay').fadeIn();

  });




  $('.slider').jdSlider();


});



$(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".order-form"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide();
			$('#overlay').removeClass(); // скрываем его
		}
	});
});
  


// ********************toTOP************************

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});


// ********************toTOP************************

//*****************MENU NAVIGATION***********************
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-100}, 1500);
    });
});
//***************** END MENU NAVIGATION***********************