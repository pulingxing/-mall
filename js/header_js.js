$(document).ready(function() {
	$("#my_taobao").hover(function() {
		$("#my_taobao_ul").show();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "-1");

	});
	$("#my_taobao").mouseleave(function() {
		$("#my_taobao_ul").hide();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "auto");
	});
	$("#user_favorite").hover(function() {
		$("#user_favorite_ul").show();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "-1");

	});
	$("#user_favorite").mouseleave(function() {
		$("#user_favorite_ul").hide();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "auto");

	});
	$("#user_support").hover(function() {
		$("#user_support_img").show();

	});
	$("#user_support").mouseleave(function() {
		$("#user_support_img").hide();

	});
	$("#user_nav").hover(function() {
		$("#user_nav_img").show();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "-1");
		$(".goods_fenlei").hide();

	});
	$("#user_nav").mouseleave(function() {
		$("#user_nav_img").hide();
		$("#search_bar,#search_btn,.search_menu").css("z-index", "auto");
		$(".goods_fenlei").show();

	});
	$("#user_phone").hover(function() {
		$("#user_phone_imge").show(200);
		$("#search_bar,#search_btn,.search_menu").css("z-index", "-1");
	});
	$("#user_phone").mouseleave(function() {
		$("#user_phone_imge").hide(200);
		$("#search_bar,#search_btn,.search_menu").css("z-index", "auto");
	});
	$("#guanbi").click(function() {
		$(".adver").slideUp(1000);
		$("#guanbi").hide(1000);
		$(".right_bar").css("margin-top", "-240px");
		$(".banner_btn .num").css("top", "645px");
		$(".lunbo_up_img").css("margin-top", "211px");
	});
	$(".right_bar_ul li:nth-child(11)").hover(function() {
		$(".erweima_div").show();
	});
	$(".right_bar_ul li:nth-child(12),.right_bar_ul li:nth-child(10),.right_bar_ul li:nth-child(9),.right_bar_ul li:nth-child(8)").hover(function() {
		$(".erweima_div").hide();
	});
	//  $("#search_bar").mouseover(function(){
	//  	this.select();
	//  })
    	//兼容IE的输入事件
	document.getElementById("search_bar").oninput =document.getElementById("search_bar").onpropertychange = function() {
		if(this.value == "") {
			$("#search_bar_label").show();
		} else {
			$("#search_bar_label").hide();
		}
	};
	document.getElementById("top_search_bar_search").oninput = document.getElementById("top_search_bar_search").onpropertychange = function() {
		if(this.value == "") {
			$("#top_search_bar_search_label").show();
		} else {
			$("#top_search_bar_search_label").hide();
		}
	};
})