$(function(){
	$.ajax({
		url:'js/shop.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length ; i++ ){
				str += '<div class="goods_flower"><div class="flow_img"><a href="#"><img src = ' + res[i].img + '/></a> </div><div class="img_down"><div class="price"><span>¥</span><span> ' + res[i].price + '</span></div><div class="img_title"><a>' + res[i].str + '</a></div><div class="shop_car"><a><span class="xin_logo"></span>关注</a><a><span class="car_logo"></span>购物车</a></div></div></div>';
			};
			$('#shop_goods').html(str);
		}
	});
	$.ajax({
		url:'js/recent.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length ; i++ ){
				str += '<div class="person"><div class="img_box"><img src = '+res[i].img +'/></div><div class="person_box"><h5>'+res[i].id+'</h5><p>'+res[i].str+'</p></div></div>';
			};
			$('#recent').html(str);
		}
	});
})
