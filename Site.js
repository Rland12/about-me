$(document).ready(function(){
	$('#message').focus();

	$("#post-btn").click(function(){

		var text = $("#message").val();
		
		 $("#wall").prepend("<div>" +"<img src='http://www.scass.ae/en/About1/PublishingImages/Pages/staff/nophoto.jpg'>" + text );
	 
		  $("img").width(90);
		   $("img").css("margin-right", 20);
		 $("img").css("margin-top", 43);
	});
});