$(function(){
	$.ajax({
		url:'js/shop.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length ; i++ ){
				str += '<div class="goods_flower"><div class="flow_img"><a href="details.html" ><img src = ' + res[i].img + '/></a> </div><div class="img_down"><div class="price"><span>¥</span><span> ' + res[i].price + '</span></div><div class="img_title"><a>' + res[i].str + '</a></div><div class="shop_car"><a href="details.html" class="buy_car" id='+res[i].id+'><span class="xin_logo"></span>关注</a><a  class="buy_car" id='+res[i].id+'><span class="car_logo"></span>购物车</a></div></div></div>';
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
	$(".right_car").mouseenter(function(){
		$(".car_content").css("dispaly","block")
		$(".car_content").stop().animate({right:"34px"})
		sc_msg();
	})
	$(".right_car").mouseleave(function(){
		$(".car_content").stop().animate({right:"-289px"},function(){
			$(".car_content").css("dispaly","none")
		})
	})
	sc_car();
	$(document).on('click','.buy_car',function(){
		var id = this.id;
		var first = $.cookie("goods")==null?true:false;
		var same = false;
		if(first){
			$.cookie("goods","[{id:"+ id+",num:1}]",{expires: 7})
			$.cookie('first','false');
		}else{
			var str = $.cookie('goods');
			var arr = eval(str);
			for(var i in arr){
				if(arr[i].id == id){
					arr[i].num = arr[i].num+1;
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods',cookieStr,{expires: 7});
					same = true;
				}
			}
			if(!same){
				var obj = {id:id,num:1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
					$.cookie('goods',cookieStr,{expires: 7});
			}
		}
		sc_car();
	})
	function sc_car(){
			var sc_str = $.cookie('goods');
			var sc_num = 0 ; 
			if(sc_str){//如果购物车cookie不为空。
				var sc_obj = eval(sc_str);
				for(var i in sc_obj){
					sc_num = Number(sc_obj[i].num) + sc_num;
				}
				$('.right_car_span').html(sc_num);
			}
			$('.right_car_span').html(sc_num);
			
			$('.num').html(sc_num);
		}
	function sc_msg(){
		
			$.ajax({
				url:'js/shop.json',
				type:'GET',
				success:function(res){
					var sc_str = $.cookie('goods');
					if(sc_str){
						var sc_obj = eval(sc_str);
						var sc_num = 0 ;
						var html = ''; 
						for(var i in sc_obj){					
							html += '<li><div class="sc_goodsPic"><img src="'+res[sc_obj[i].id].img+'" alt=""></div><div class="miao"><div class="sc_goodsTitle"><p>'+res[sc_obj[i].id].str+'</p></div><div class="sc_goodsNum">商品数量:'+sc_obj[i].num+'</div><div class="sc_price">商品价格:'+sc_obj[i].num+"x"+res[sc_obj[i].id].price +'</div><a href="car.html" class="sc_goodsBtn" id="'+sc_obj[i].id+'">购买</a><div></li>'
						}
						$('.car_content ul').html(html);
					}
				}
			})
		}
})
