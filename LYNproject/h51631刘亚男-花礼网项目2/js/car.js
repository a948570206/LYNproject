$(function(){
	if($.cookie("goods")){
		$(".car_banner").css("display",'block')
		$(".total").css("display",'block')
	}else{
		$(".car_banner").css("display",'none')
		$(".total").css("display",'none')
		$.cookie('goods',null);
	}
	var first = $.cookie("goods");
	if(first){
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
							html += '<li><div class="sc_goodsPic"><img src="'+res[sc_obj[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>'+res[sc_obj[i].id].str+'</p></div><div class="height_price"></div><div class="sc_price">'+ res[sc_obj[i].id].price +'</div><div class="sc_goodsNum" id="'+sc_obj[i].id+'"><span class="sub">-</span>'+sc_obj[i].num+'<span class="add">+</span></div><div class="sc_goodsBtn" id="'+sc_obj[i].id+'">移除</div><div></li>'
						}
						$('.car_content ul').html(html);
						$('.sc_goodsBtn').click(function(){
							remove($('.sc_goodsBtn').attr('id'));
							location.reload();
						})
						$(".money").html(function(){
							var str = $.cookie('goods');
							var arr = eval(str);
							var zong=0;
							var he=0;
							var arr2=Array();
							for(var i in arr){
								zong=res[arr[i].id].price.substring(1)*arr[i].num;
								 arr2[i]=zong;	
							}
							for(var j in arr2){
								 he+=arr2[j];
							}
							return "¥"+he;
						});
						$('.add').click(function(){
							id = $(this).parent().attr('id');
			
							console.log($(this).parent().attr('id'));
							add($(this).parent().attr('id'));
				
							//$(".money").html(total(id));
							location.reload();
						})
						
						$('.sub').click(function(){
							 id = $(this).parent().attr('id');
							sub($(this).parent().attr('id'));
							//$(".money").html(total(id));
							location.reload();
						})
						
						
					}
				}
			})
		
	}else{
		var str = '<img style="width:996px;" src="img/jie.png"/>'
		$('.car_content ul').html(str);
	}
	$('.car_banner span').eq(0).css('width',400)
	$('.car_banner span').eq(1).css('width',130)
	$('.car_banner span').eq(2).css('width',130)
	$('.car_banner span').eq(3).css('width',130)
	$('.car_banner span').eq(4).css('width',130)
	//$(document).on('click','.sc_goodsBtn',function(){
		//this.parentNode.remove();
		//$.cookie('goods',null);
		//location.reload();
	//})
	function remove(id){
		//var id = id;
		var str = $.cookie('goods');
		var arr = eval(str);
		console.log(arr);
		console.log(arr[0].id);
		console.log(id);
		var obj = '[';
		for(var i in arr){
			if(arr[i].id != id){
				obj += '{id:' + arr[i].id+',num:' + arr[i].num + '},'
			}
		}
		if(obj.length <= 2){
			obj=null;
		}else{
			obj = obj.substring(0,obj.lastIndexOf(','));
		obj +=']';
		}
		$.cookie('goods',obj,{expires:7})
		console.log($.cookie('goods'));
	}
	function add(id){
		var str = $.cookie('goods');
		var arr = eval(str);
		for(var i in arr){
				if(arr[i].id == id){
					arr[i].num = arr[i].num+1;
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods',cookieStr,{expires: 7});
				}
		}
	}
	function sub(id){
		var str = $.cookie('goods');
		var arr = eval(str);
		for(var i in arr){
				if(arr[i].id == id){
					if(arr[i].num == 0){
						arr[i].num =0;
					}else{
						arr[i].num = arr[i].num-1;
					}
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods',cookieStr,{expires: 7});	
				}
		}
	}
	
})
