var intervalo = 3000;

function slide1(){
	document.getElementById("slide") .src = "js/slide/slide1.jpg";
	setTimeout(".slide2()",intervalo);
}

function slide2(){
	document.getElementById("slide") .src = "js/slide/slide2.jpg";
	setTimeout(".slide3()",intervalo);
}

function slide3(){
	document.getElementById("slide") .src = "js/slide/slide3.jpg";
	setTimeout(".slide1()",intervalo);
}