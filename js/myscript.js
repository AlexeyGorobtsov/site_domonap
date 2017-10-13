var Domonap = Domonap || {};



Domonap.menu = {
  
  init : function(){
    if (document.getElementById("nav")){
      $menu = $('#nav');
      $header = $('#header');
      $position = $menu.offset().top;

      this.change($menu, $header);

      $(window).scroll(function(){
        Domonap.menu.change($menu, $header);
		
      });
      
      $('ul.level1 li', $menu).hover(function(){
        $(this).addClass('hover').siblings().removeClass('hover');
      });
      
      function change_menu_bottom(){
        if ($('.parent', $menu).hasClass('active') || $('.parent', $menu).hasClass('crumb'))
        {
          $menu.addClass('has_active').css('margin-bottom', $('.active.parent .submenu').height());
        }
      }
      
      change_menu_bottom();
      
      $(window).resize(function(){
        change_menu_bottom();
      })
      

    }
  },
  
  change : function($menu, $header){
    if ( window.pageYOffset - 60 > $position)
    {
      if ($menu.hasClass('fix')) return;
      $menu.css({top: '-' + $menu.height() + 'px'}).addClass('fix').removeClass('normal').animate({ top: 0}, 200);
      $header.addClass('fix');
		$(".logo a").html('<img src="images/logo_s.png" srcset="logo_s@2x.png 2x"  />');
	}
    else
    {
      if (!$menu.hasClass('fix')) return;
      $menu.removeClass('fix').addClass('normal');
      $header.removeClass('fix');
	  $(".logo a").html('<img src="images/logo.png" srcset="images/logo@2x.png 2x"  />');
    }
  }
};

Domonap.init = function(){
  Domonap.menu.init();
};










jQuery(document).ready(function($) {
Domonap.init();	
	$(".main_menu li a").click(function(){
	//elem.addClass("active");
	//var link = $(this).attr("href");
	//alert (link);
	$('.main_menu li a').removeClass('active');
  //  $(this).parent().addClass('active');
		var selected = $(this).attr('href');
		re = /\#(\w+)/;
		var yakor = selected.match(re)[1];
		$('body').scrollTo('#'+yakor,{duration:'slow', offsetTop : '0'});
		window.location.href = $(this).attr('href');
		//alert(yakor);
		return false;
	});
$(window).on("scroll", function() {
$("#welcome").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
$(".l3, .l6").css("background-position","50% " + ($(this).scrollTop() / 1.5) + "px");
$(".l4, .l5").css("background-position","50% " + ($(this).scrollTop() / 2.5) + "px");
$(".l7, .l8").css("background-position","50% " + ($(this).scrollTop() / 2.5) + "px");

//$(".domonap").animate({top: ($(this).scrollTop() + 400)}, 600);

/*
    $(".domonap").animate({top: ($(this).scrollTop() + 400)}, 600);
 var s0 = $("#welcome"); 
var offset0 = s0.offset();
if ($(window).scrollTop() <= offset0.top) {
$(".domonap").animate({top: ($(this).scrollTop() + 400)}, 600);	
}
	*/
var s1 = $("#about");
var s2 = $("#work");
var s3 = $("#packages");
var s4 = $("#services");
var s5 = $("#adaptation");
var s6 = $("#contacts");
var offset1 = s1.offset();
var offset2 = s2.offset();
var offset3 = s3.offset();
var offset4 = s4.offset();
var offset5 = s5.offset();
var offset6 = s6.offset();
	if ($(window).scrollTop() < offset1.top) {
	$('.main_menu li a').removeClass('active');
	}
	if ($(window).scrollTop() >= (offset1.top) && $(window).scrollTop() < offset2.top) {
	$('.main_menu li a').removeClass('active');
	$('.main_menu li a').eq(0).addClass('active');
	}
	else	if ($(window).scrollTop() >= offset2.top && $(window).scrollTop() < offset3.top) {
	$('.main_menu li a').removeClass('active');
	$('.main_menu li a').eq(1).addClass('active');
	}
	else 	if ($(window).scrollTop() >= offset3.top && $(window).scrollTop() < offset4.top) {
	$('.main_menu li a').removeClass('active');
	$('.main_menu li a').eq(2).addClass('active');
	}
	else 	if ($(window).scrollTop() >= offset4.top && $(window).scrollTop() < offset5.top) {
	$('.main_menu li a').removeClass('active');
	$('.main_menu li a').eq(3).addClass('active');
	}
	else 	if ($(window).scrollTop() >= offset5.top && $(window).scrollTop() < offset6.top) {
	$('.main_menu li a').removeClass('active');
	$('.main_menu li a').eq(4).addClass('active');
	}

	else 	if ($(window).scrollTop() >= offset6.top) {
	$('.main_menu li').removeClass('active');
	$('.main_menu li').eq(5).addClass('active');
	}	

	
/* var s0 = $("#welcome"); 
var offset0 = s0.offset();
if ($(window).scrollTop() >= offset0.top && $(window).scrollTop() <= (offset1.top)) {
$(".domonap").animate({top: ($(this).scrollTop() + 800)}, 300);	
}
else {
$(".domonap").animate({top: ($(this).scrollTop() - 800)}, 300);	
}*/	
	
	
});


	
	
	var ff1=0, ff2=0, ff3=0;
	var display1 = true;
	$(".package_full_button span.sp11").click(function(){
		$r = $(this).parent().parent().find(".package_body");
		var $sp11 = $(this);
		var $sp12 = $(this).parent().find(".sp12");
		
			if ( display1 === true ) {
				$r.animate({height: '100%'}, 400);
				$("#packages").animate({height: '1300px'}, 600);
				
				$sp11.html("Скрыть список");
				$sp12.html('<img src="images/u_arr.png" />');
				display1 = false;
				ff1 = 1;
			} 
			else if ( display1 === false ) {
			  	$r.css("height", "350px");
				
				$sp11.html("Показать весь список");
				$sp12.html('<img src="images/d_arr.png" />');
			display1 = true;
			ff1 = 0;
			if (ff1==0 && ff2==0 && ff3==0) {$("#packages").animate({height: '1000px'}, 600);}
			}		
	});
  

	var display2 = true;
	$(".package_full_button span.sp21").click(function(){
		$r = $(this).parent().parent().find(".package_body");
		var $sp21 = $(this);
		var $sp22 = $(this).parent().find(".sp22");
		
			if ( display2 === true ) {
				$r.animate({height: '100%'}, 400);
				$("#packages").animate({height: '1300px'}, 600);
				
				$sp21.html("Скрыть список");
				$sp22.html('<img src="images/u_arr.png" />');
				display2 = false;
				ff2 = 1;
			} 
			else if ( display2 === false ) {
			  	$r.css("height", "350px");
				
				$sp21.html("Показать весь список");
				$sp22.html('<img src="images/d_arr.png" />');
			display2 = true;
			ff2 = 0;
			if (ff1==0 && ff2==0 && ff3==0) {$("#packages").animate({height: '1000px'}, 600);}
			}		
	});
	
	var display3 = true;
	$(".package_full_button span.sp31").click(function(){
		$r = $(this).parent().parent().find(".package_body");
		var $sp31 = $(this);
		var $sp32 = $(this).parent().find(".sp32");
		
			if ( display3 === true ) {
				$r.animate({height: '100%'}, 400);
				$("#packages").animate({height: '1300px'}, 600);
				
				$sp31.html("Скрыть список");
				$sp32.html('<img src="images/u_arr.png" />');
				display3 = false;
				ff3 = 1;
			} 
			else if ( display3 === false ) {
			  	$r.css("height", "350px");
				
				$sp31.html("Показать весь список");
				$sp32.html('<img src="images/d_arr.png" />');
			display3 = true;
			ff3 = 0;
			if (ff1==0 && ff2==0 && ff3==0) {$("#packages").animate({height: '1000px'}, 600);}
			}		
	});

  
});