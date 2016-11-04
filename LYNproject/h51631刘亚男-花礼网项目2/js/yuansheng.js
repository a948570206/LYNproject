window.onload = function(){
	var cm = document.getElementById("cm");
	var cmp = document.getElementById("cmp");
	var yz = document.getElementById("yz")
	cm.onclick = function(){
		yz.src = "img/y" + parseInt(Math.random()*4+1) +".jpg";
	}
}
