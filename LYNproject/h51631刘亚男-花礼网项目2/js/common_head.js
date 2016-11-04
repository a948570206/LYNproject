$(function() {
	var nowi = 1;
	$("#changeimg").css("background", function() {
		var str = "url(img/img" + nowi + ".jpg) no-repeat -322px";
		return str;
	})
	var timer = null;
	timer = setInterval(function() {
		nowi++;
		$("#circle").find("li").eq(nowi - 1 - 1).css("background", "#737373")
		if(nowi >= 5) {
			nowi = 1;
		}
		$("#changeimg").fadeOut(500, function() {

			$("#changeimg").css("background", function() {
				var str = "url(img/img" + nowi + ".jpg) no-repeat -322px";
				return str;
			})
			$("#changeimg").fadeIn(800);
		})
		$("#circle").find("li").eq(nowi - 1).css("background", "#FF6A00")
	}, 3000)
	$("#circle").find("li").hover(function() {
		if(nowi > 4){
			nowi = 4;
		}
		clearInterval(timer);
		for(var i = 0; i < 4; i++) {
			$("#circle").find("li").eq(i).css("background", "#737373")
		}
		$(this).css("background", "#FF6A00");
		nowi = $(this).index();
		$("#changeimg").fadeOut(500, function() {
			$("#changeimg").css("background", function() {
				if(nowi > 3){
			nowi = 3;
		}
				var str = "url(img/img" + (nowi +1) + ".jpg) no-repeat -322px";
				return str;
			})
			$("#changeimg").fadeIn(800);
		})
	}, function() {
		nowi = $(this).index() + 1;
		timer = setInterval(function() {
			nowi++;
			$("#circle").find("li").eq(nowi - 1 - 1).css("background", "#737373")
				if(nowi >= 5) {
				nowi = 1;
			}
			$("#changeimg").fadeOut(500, function() {
				$("#changeimg").css("background", function() {
					var str = "url(img/img" + nowi + ".jpg) no-repeat -322px";
					return str;
				})
				$("#changeimg").fadeIn(800);
			})
			$("#circle").find("li").eq(nowi - 1).css("background", "#FF6A00")
		}, 3000)
	})
	//left
	$("#left").click(function(){
		clearInterval(timer);
		for(var i = 0;i < 4; i++){
			$("#circle").find("li").eq(i).css("background","#737373");
		}
		$("#circle").find("li").eq(nowi-2).css("background","#FF6A00");
		$("#changeimg").fadeOut(500, function() {
				$("#changeimg").css("background", function() {
					if(nowi < 1){
						nowi = 4;
					}
					var str = "url(img/img" + (nowi) + ".jpg) no-repeat -322px";
					return str;
				})
				$("#changeimg").fadeIn(800);
			})
		nowi--;
		timer = setInterval(function() {
		nowi++;
		$("#circle").find("li").eq(nowi - 1 - 1).css("background", "#737373")
		if(nowi >= 5) {
			nowi = 1;
		}
		$("#changeimg").fadeOut(500, function() {

			$("#changeimg").css("background", function() {
				var str = "url(img/img" + nowi + ".jpg) no-repeat -322px";
				return str;
			})
			$("#changeimg").fadeIn(800);
		})
		$("#circle").find("li").eq(nowi - 1).css("background", "#FF6A00")
	}, 3000)
	})
	//right
	$("#right").click(function(){
		clearInterval(timer);
		for(var i = 0;i < 4; i++){
			$("#circle").find("li").eq(i).css("background","#737373");
		}
		if(nowi>3){
			nowi = 0;
		}
		$("#circle").find("li").eq(nowi).css("background","#FF6A00");
		$("#changeimg").fadeOut(500, function() {
				$("#changeimg").css("background", function() {

					var str = "url(img/img" + (nowi) + ".jpg) no-repeat -322px";
					return str;
				})
				$("#changeimg").fadeIn(800);
			})
		nowi++;
		timer = setInterval(function() {
		nowi++;
		$("#circle").find("li").eq(nowi - 1 - 1).css("background", "#737373")
		if(nowi >= 5) {
			nowi = 1;
		}
		$("#changeimg").fadeOut(500, function() {

			$("#changeimg").css("background", function() {
				var str = "url(img/img" + nowi + ".jpg) no-repeat -322px";
				return str;
			})
			$("#changeimg").fadeIn(800);
		})
		$("#circle").find("li").eq(nowi - 1).css("background", "#FF6A00")
	}, 3000)
	});
	$.ajax({
		url:'js/forever.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length ; i++ ){
				str += '<div><img src='+res[i].img+'/><p><a class="ca" href="#">'+res[i].str+'</a></p></div>';
			};
			$('#count').html(str);
		}
	});
	$.ajax({
		url:'js/cake.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length-1 ; i++ ){
				str += '<div><img src='+res[i].img+'/><p><a class="ca" href="#">'+res[i].str+'</a></p></div>';
			};
			str += '<div><div class="last_img" style="float:none;"><img src='+res[res.length-1].img+'/></div><p><a class="ca" href="#">'+res[res.length-1].str+'</a></p></div>'
			str += "<div><p><a class ='whole'>全国蛋糕</a></p></div>";
			$('#cake_img').html(str);
		}
	});

	$.ajax({
		url:'js/gift.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length ; i++ ){
				str += '<div><img src='+res[i].img+'/><p><a class="ca" href="#">'+res[i].str+'</a></p></div>';
			};
			$('#gift_img').html(str);
		}
	});
	$("#rightOne").hover(function(){
		$(this).animate({right:42});
	},function(){
		$(this).animate({right:32});
	})
	$("#rightTwo").hover(function(){
		$(this).animate({right:42});
	},function(){
		$(this).animate({right:32});
	})
	$("#rightThree").hover(function(){
		$(this).animate({right:42});
	},function(){
		$(this).animate({right:32});
	})
	$("#time_img").find("img").hover(function(){
		$(this).animate({width:270,height:216,marginTop:-10,marginLeft:-8})
	},function(){
		$(this).animate({width:250,height:200,magin:0})
	})
	$.ajax({
		url:'js/loveflower.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length/2 ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#love_li').html(str);
		}
	});
	$.ajax({
		url:'js/loveflower.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = res.length/2 ; i < res.length ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#love_li2').html(str);
		}
	});
	$.ajax({
		url:'js/parentflower.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length/2 ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#parent_li').html(str);
		}
	});
	$.ajax({
		url:'js/parentflower.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = res.length/2 ; i < res.length ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#parent_li2').html(str);
		}
	});
	$.ajax({
		url:'js/forlongflower.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length/2 ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#forlong_li').html(str);
		}
	});
	$.ajax({
		url:'js/forlongflower.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = res.length/2 ; i < res.length ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#forlong_li2').html(str);
		}
	});
	$.ajax({
		url:'js/food_cake.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length/2 ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#food_li').html(str);
		}
	});
	$.ajax({
		url:'js/food_cake.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = res.length/2 ; i < res.length ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#food_li2').html(str);
		}
	});
	$.ajax({
		url:'js/gift_area.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = 0 ; i < res.length/2 ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#gift_li').html(str);
		}
	});
	$.ajax({
		url:'js/gift_area.json',
		type:'GET',
		success : function(res){
			var str = '';
			for( var i = res.length/2 ; i < res.length ; i++ ){
				str += '<li><img src='+res[i].img+'/><p><a class="la" href="#">'+res[i].str+'</a></p><p><a class="cp" href="#">'+res[i].price+'</a></p></li>';
			};
			$('#gift_li2').html(str);
		}
	});
	$("#heart").hover(function(){
		$("#heart_div").css("display","block").animate({right:70},function(){
			$(this).animate({right:36})
		})
	},function(){
		$("#heart_div").css("display","none").animate({right:70})
	})
	$("#lasttime").hover(function(){
		$("#lasttime_div").css("display","block").animate({right:70},function(){
			$(this).animate({right:36})
		})
	},function(){
		$("#lasttime_div").css("display","none").animate({right:70})
	})
	$("#tel").hover(function(){
		$("#tel_div").css("display","block").animate({right:70},function(){
			$(this).animate({right:36})
		})
	},function(){
		$("#tel_div").css("display","none").animate({right:70})
	})
	$("#ontel").hover(function(){
		$("#ontel_div").css("display","block").animate({right:70},function(){
			$(this).animate({right:36})
		})
	},function(){
		$("#ontel_div").css("display","none").animate({right:70})
	})
	$("#returntop").hover(function(){
		$("#returntop_div").css("display","block").animate({right:70},function(){
			$(this).animate({right:36})
		})
	},function(){
		$("#returntop_div").css("display","none").animate({right:70})
	})
	$(document).on("scroll",function(){
		if($(document).scrollTop() >= 800){
		$("#returntop").css("visibility","visible")
	}else{
		$("#returntop").css("visibility","hidden")
	}
	})
	$("#returntop").click(function(){
		$("body,html").animate({scrollTop : 0},800)
	})
})