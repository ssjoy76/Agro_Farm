			// Header JQuery Start From Here
	// $(document).ready(function(){
		

	// });
			
	$(document).ready(function(){
		$(".navbar-brand").css({"color":"#034500"});
		$(document).load("index.html", function(){
			$("#Loading").css({"display":"none"});
		});
		$(window).scroll(function(){
			var x = $(document).scrollTop();
			var y = $("header").height();
			var z = $("nav").height();
			if((x>y)&& ($(window).width() > 764)){
				$("nav").addClass("fixed-top");
				$("header").css({"margin-bottom":+z+"px"});
			}else{
				$("nav").removeClass("fixed-top");
				$("header").css({"margin-bottom":"0"});
			}
			if(x>900){
				$(".top").css({"display":"block"})
			}else{
				$(".top").css({"display":"none"})
			}
		});
	});

			// Header JQuery End Here

			// Height Adjust

			$(document).ready(function height_adjust(){
				var x = $("#footer-group").height();
				if($(window).width() > 764){
					var y = $(".circle").width();
					$(".circle").css({
						"height": y+"px"
					})
				}
				$("#map").css({
					"height": +x+"px"
				});
				$(document).ready(function(){
					var wh = $(window).height();
					var nav =  $("nav").height();
					$(".sliderImg").css({
						"max-height":+wh-nav+"px",
						"min-height":"400px"
					});
				});
				setTimeout(height_adjust,500);
			});
			// Height Adjust End

			// Slider Section Query Start Here

			var der = 2;
			$(document).ready(function Slider(){
				$(".slider").css({
					"display":"none"
				});
				$(".slider:nth-child("+ der +")").css({
					"display":"block"
				});
				$(".left_nextpre").click(function(){
					$(".slider").css({
						"display":"none"
					});
					der = der-1;
					if(der<2){
						der=6;
					}
					$(".slider:nth-child("+ der +")").css({
						"display":"block"
					});
				});
				$(".right_nextpre").click(function(){
					$(".slider").css({
						"display":"none"
					});
					der++;
					if(der>6){
						der=2;
					}
					$(".slider:nth-child("+ der +")").css({
						"display":"block"
					});
				});
				der++;
				if(der>6){
					der=2;
				}
				setTimeout(Slider,6000);
			});

			// Slider Section Query End Here

			// Parallax

			$('.parallax').jarallax({
	            speed: 0.5,
	            imgWidth: 1366,
	            imgHeight: 768
	        })

			// Parallax

			// Partner Slider Query Start Here

			var owl = $('.owl-carousel2');
				owl.owlCarousel({
				    items:6,
				    loop:true,
				    margin:10,
				    autoplay:true,
				    autoplayTimeout:6000,
				    autoplayHoverPause:true,
				    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:6
			        }
			    }
				});
				$('.play').on('click',function(){
				    owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
				    owl.trigger('stop.owl.autoplay')
				})
			$('.owl-carousel1').owlCarousel({
				items:3,
			    loop:true,
			    margin:10,
			    autoplay:true,
				autoplayTimeout:6000,
			    nav:true,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:3
			        }
			    }
			})
			$(document).ready(function bbr(){
				$(".owl-stage>.active:odd>.card").addClass("new-active");
				$(".owl-stage>.active:even>.card").removeClass("new-active");
				setTimeout(bbr,1);
			})
			// Partner Slider Query End Here

			// Map JQuery Start From Here

	function myMap(){
	var mapOptions = {
	    center: new google.maps.LatLng(23.771402, 90.395212),
	    zoom: 10,
	    mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	}

			// Map JQuery End Here

	

	$(document).ready(function(){
		$(document).scroll(function(){
			var body = $(document).scrollTop();
			var cow = $("#cow").offset();
			var goat = $("#goat").offset();
			var chicken = $("#chicken").offset();
			var food = $("#Food").offset();
			var footer = $("footer").offset();
			if(body > cow.top ){
				$("nav").addClass("new_nav");
				$(".nav-link").addClass("new_nav-link");
				$(".navbar-brand").css({"color":"rgb(255,255,255)"})
			}else{
				$("nav").removeClass("new_nav");
				$(".nav-link").removeClass("new_nav-link");
				$(".navbar-brand").css({"color":"#034500"})
			}if(body > goat.top){
				$("nav").removeClass("new_nav");
				$(".nav-link").removeClass("new_nav-link");
				$(".navbar-brand").css({"color":"#034500"})
			}
			if(body > chicken.top){
					$("nav").addClass("new_nav");
					$(".nav-link").addClass("new_nav-link");
					$(".navbar-brand").css({"color":"rgb(255,255,255)"})
				}
				if(body > food.top){
				$("nav").removeClass("new_nav");
				$(".nav-link").removeClass("new_nav-link");
				$(".navbar-brand").css({"color":"#034500"})
				}
			if(body > footer.top){
				$("nav").removeClass("new_nav");
				$(".nav-link").removeClass("new_nav-link");
				$(".navbar-brand").css({"color":"#034500"})
			}
		})
	})

	// Created by Avaz Bokiev @samarkandiy
$(document).ready(function(){
  $("[class^='thumbnail-']").click(function(){
    $("[class^='thumbnail-']").slideToggle("fast");
    $(this).next("[class^='large-']").slideToggle();
  });
  
  $(".close").click(function(){
    $("[class^='large-']:visible").toggle();
    $("[class^='thumbnail-']").fadeToggle("fast");; 
  }); 
  
});




	$(document).ready(function(){
		$(".team-member").hover(function(){
			$(".social_link").addClass("animated fadeInUp");
		})
		$(".team-member").mouseleave(function(){
			$(".social_link").removeClass("animated fadeInUp");
		})
	})

	"use strict";
	netime();
	function netime(){
		var d = new Date();
		document.getElementById("re-time").innerHTML = d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();
		setTimeout(netime,500);
	}