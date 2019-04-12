//header btn-white
$(document).ready(function(){ 
	$(".btn-white").hover(function(){
		$(this).css("background-color","white");
		$(this).css("border-color","white");
		$(this).css("color","black");
	}, function(){
		$(this).css("background-color", "rgba(0, 0, 0, 0.0)");
		$(this).css("border-color","white");
		$(this).css("color","white");
	});
})

//btn video left
$(document).ready(function(){
	$(".btn-video").hover(function(){
		$(this).css("background-color","#3498db");
		$(this).css("border-color","#3498db");
		$(this).css("color","white");
	}, function(){
		$(this).css("background-color","white");
		$(this).css("border-color","#3498db");
		$(this).css("color","#3498db");
	})
});

//btn video left
$(document).ready(function(){
	$(".btn-text-only").mouseenter(function(){
		$(this).css("background-color","white");
		$(this).css("color","#3498db");
		$(this).css("border-color","white");
	});
	
	var index = 1;
	currentSlide(index);
});


//slogan slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
			var classes = slides[i].className.split(" ");
			delete classes[classes.indexOf('show')]
			slides[i].className = classes.join(' ');
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
	// slides[slideIndex-1].style.display = "block";
	slides[slideIndex-1].className += " show";  
  dots[slideIndex-1].className += " active";
}
//end slogan slide

//navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
	document.getElementByClassName("header").style.marginRight = "350px";
	document.getElementByClassName("intro").style.marginRight = "350px";
	document.getElementByClassName("showcase").style.marginRight = "350px";
	document.getElementByClassName("slogan").style.marginRight = "350px";
	document.getElementByClassName("about-team").style.marginRight = "350px";
	document.getElementByClassName("video").style.marginRight = "350px";
	document.getElementByClassName("some-projects").style.marginRight = "350px";
	document.getElementByClassName("work-with").style.marginRight = "350px";
	document.getElementByClassName("review").style.marginRight = "350px";
	document.getElementByClassName("instagram").style.marginRight = "350px";
	document.getElementByClassName("twitter").style.marginRight = "350px";
	document.getElementByClassName("social").style.marginRight = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementByClassName("header").style.marginRight = "0";
	document.getElementByClassName("intro").style.marginRight = "0";
	document.getElementByClassName("showcase").style.marginRight = "0";
	document.getElementByClassName("slogan").style.marginRight = "0";
	document.getElementByClassName("about-team").style.marginRight = "0";
	document.getElementByClassName("video").style.marginRight = "0";
	document.getElementByClassName("some-projects").style.marginRight = "0";
	document.getElementByClassName("work-with").style.marginRight = "0";
	document.getElementByClassName("review").style.marginRight = "0";
	document.getElementByClassName("instagram").style.marginRight = "0";
	document.getElementByClassName("twitter").style.marginRight = "0";
	document.getElementByClassName("social").style.marginRight = "0";
}

//end navigation
