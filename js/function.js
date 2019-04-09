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
	})
});


//slogan slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var index = 1;
currentSlide(index);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//end slogan slide

