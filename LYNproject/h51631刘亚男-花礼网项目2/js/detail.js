$(function(){
		var nowi = 1;
		$(".big_img").css("background", function() {
			var str = "url(img/" + nowi + ".jpg) no-repeat ";
			return str;
		})
		$(".small_img div").eq(nowi-1).mouseover(function(){
			$(".big_img").css("background", function() {
			var str = "url(img/" +  nowi+ ".jpg) no-repeat ";
			return str;
		})
	})
		$(".small_img div").eq(nowi).mouseover(function(){
			$(".big_img").css("background", function() {
			var str = "url(img/" +  (parseInt(nowi)+1)+ ".jpg) no-repeat ";
			return str;
		})
	})
		$(".small_img div").eq(nowi+1).mouseover(function(){
			$(".big_img").css("background", function() {
			var str = "url(img/" +  (parseInt(nowi)+2)+ ".jpg) no-repeat ";
			return str;
		})
	})
		$(".small_img div").eq(nowi+2).mouseover(function(){
			$(".big_img").css("background", function() {
			var str = "url(img/" +  (parseInt(nowi)+3)+ ".jpg) no-repeat ";
			return str;
		})
	})
	$.ajax({
		url:'js/panel.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length ; i++ ){
				str += '<div class="panel_flower"><img src='+res[i].img+'/><a style="display:block;text-align: center;">'+ res[i].str + '</a><span>'+res[i].price +'</span></div>'
			};
			$('.panel_2').html(str);
		}	
		})
	var nowi2=0;
	$('.img_d').css('background',function(){
			var str = "url(img/server_0" + (nowi2+1) + ".jpg) no-repeat ";
		return str;})
	$('.img_dong').find('li').find('span').eq(nowi2).mouseover(function(){
		$('.img_d').stop().animate({opcity:0},200)
		$('.img_d').css('background',function(){
			var str = "url(img/server_0" + (nowi2+1) + ".jpg) no-repeat ";
		return str;
		})
		$('.img_d').stop().animate({opcity:1},200)
	})
	$('.img_dong').find('li').find('span').eq(nowi2+1).mouseover(function(){
		$('.img_d').stop().animate({opcity:0},200)
		$('.img_d').css('background',function(){
			var str = "url(img/server_0" + (nowi2+2) + ".jpg) no-repeat ";
		return str;
		})
			$('.img_d').stop().animate({opcity:1},200)
	})
	$('.img_dong').find('li').find('span').eq(nowi2+2).mouseover(function(){
		$('.img_d').stop().animate({opcity:0},200)
		$('.img_d').css('background',function(){
			var str = "url(img/server_0" + (nowi2+3) + ".jpg) no-repeat ";
		return str;
		})
			$('.img_d').stop().animate({opcity:1},200)
	})
	$('.img_dong').find('li').find('span').eq(nowi2+3).mouseover(function(){
		$('.img_d').stop().animate({opcity:0},200)
		$('.img_d').css('background',function(){
			var str = "url(img/server_0" + (nowi2+4) + ".jpg) no-repeat ";
		return str;
		})
		$('.img_d').stop().animate({opcity:1},200)
	})
	$('.img_dong').find('li').find('span').eq(nowi2+4).mouseover(function(){
		$('.img_d').stop().animate({opcity:0},200)
		$('.img_d').css('background',function(){
			var str = "url(img/server_0" + (nowi2+5) + ".jpg) no-repeat ";
		return str;
		})
			$('.img_d').stop().animate({opcity:1},200)
	})
	$('.img_dong').find('li').find('span').eq(nowi2+5).mouseover(function(){
		$('.img_d').stop().animate({opcity:0},200)
		$('.img_d').css('background',function(){
			var str = "url(img/server_0" + (nowi2+6) + ".jpg) no-repeat ";
		return str;
		})
			$('.img_d').stop().animate({opcity:1},200)
	})
	$(document).on('scroll',function(){
		console.log($('body').scrollTop());
		if($('body').scrollTop() >= 960){
			$('.details_banner1').css('display','block');
			$('.details_banner1').css('position','fixed');
			$('.details_banner1').css('top',0)
			$('.details_banner1').css('right',40)
			$('.details_banner1').css('background','white')
			$('.details_banner1').css('zIndex',5)
			console.log($('body').scrollTop());
		}else{
			$('.details_banner1').css('display','none');
		}
		if($('body').scrollTop() >= 960 && $('body').scrollTop() <=3972){
			$('.details_banner1').find('a').eq(0).css('background','#FF6A00')
		}else{
			$('.details_banner1').find('a').eq(0).css('background','white')
		}
		if($('body').scrollTop() >= 4000 && $('body').scrollTop() <=5180){
			$('.details_banner1').find('a').eq(1).css('background','#FF6A00')
		}else{
			$('.details_banner1').find('a').eq(1).css('background','white')
		}
		if($('body').scrollTop() >= 5187 && $('body').scrollTop() <=5697){
			$('.details_banner1').find('a').eq(2).css('background','#FF6A00')
		}else{
			$('.details_banner1').find('a').eq(2).css('background','white')
		}
		if($('body').scrollTop() >= 5758 && $('body').scrollTop() <=6389){
			$('.details_banner1').find('a').eq(3).css('background','#FF6A00')
		}else{
			$('.details_banner1').find('a').eq(3).css('background','white')
		}
		if($('body').scrollTop() >= 6400 && $('body').scrollTop() <=6587){
			$('.details_banner1').find('a').eq(4).css('background','#FF6A00')
		}else{
			$('.details_banner1').find('a').eq(4).css('background','white')
		}
	})
	
})
