$(document).ready(function(){
	$(".menu__button").on("click" ,function(e){
		if ($(this).hasClass("active__menu")) {
			$("body,html").css("overflow-y" ,"auto");
			$(".right__header>ul").css("top" ,"-100vh");
			$(this).removeClass("active__menu");
			if ($(window).width() < 640) {
				$(".header__buttons").css("top" , "-100vh");
			}
		} else {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			$(".right__header>ul").css("top" ,"0px");
			$(this).addClass("active__menu");
			$("body,html").css("overflow-y" ,"hidden");
			if ($(window).width() < 640) {
				$(".header__buttons").css("top" , "0");
			}
		}
	});
});