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

