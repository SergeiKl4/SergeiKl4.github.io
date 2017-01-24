$(document).ready(function() {
	$('.btn').click(function() {
		$('nav').slideToggle(300);
	});
	$(window).resize(function() {
		$('.row').height($('.row').width()/1.6); //при изменении ширины row автоматически изменяется и высота row
		if ($(window).widht() > 991)
		{
			$('nav a').removeAttr('style');
		}
	});
});
// $("nav[display='block']").$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest("nav, button").length) return;
    $("nav").hide("slow");
    event.stopPropagation();
  });
// });


$(function(){
	$('.row').height($('.row').width()/1.6);
});

//cashe selectors
var lastId, topMenu = $('.head-nav'),
menuItems = topMenu.find('a'),
scrollItems = menuItems.map(function(){
	var item = $($(this).attr('href'));
	if (item.length) {return item;}
});
// $(document).ready(function(){
// 	alert();
// });

// animated scroll to object
menuItems.click(function(e){
	var href = $(this).attr('href'),
		offsetTop = href === "#" ? 0 : $(href).offset().top;
	$('html, body').stop().animate({
		scrollTop:offsetTop
	}, 700);
	e.preventDefault();
});

// $(window).scroll(function(){
// 	var fromTop = $(this).scrollTop()+topMenuHeight;

// 	var cur = scrollItems.map(function(){
// 		if ($(this).offset().top < fromTop)
// 			return this;
// 	});
// 	cur = cur[cur.length-1];
// 	var id = cur && cur.length ? cur[0].id : "";
// 	if (lastId !== id) {
// 		last = id;
// 		menuItems
// 			.parent().removeClass('active')
// 			.end().filter("[href='#"+ id + "']").parent().addClass('active');
// 	}
// });

var menu_selector = '.head-nav-top'; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
function onScroll() {
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
			$(".head-nav-block1 a.active").removeClass("active");
			$(".head-nav-block2 a.active").removeClass("active");
			$(".head-nav-block3 a.active").removeClass("active");
			$(".head-nav-block4 a.active").removeClass("active");
			$("a[href='" + hash + "']").addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});

}

// $(document).ready(function(){
// 	alert(hash);
// });

$(document).ready(onScroll); // after load page execute function onScroll
$(document).ready(function () {
 
	$(document).on("scroll", onScroll); // at scroll execute func onScroll
 
	$("a[href^=#]").click(function(e){
		e.preventDefault();
 
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		// $("html, body").animate({
		// 	scrollTop: target.offset().top
		// }, 500, function(){
		// 	window.location.hash = hash;
		// 	$(document).on("scroll", onScroll);
		// });
 
	});

});

// google map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: -32.397, lng: 150.644},
	zoom: 10
  });
  var marker = new google.maps.Marker({
	position: {lat: -32.397, lng: 150.644},
	map: map,
	title: 'Hello World!'
  });
}