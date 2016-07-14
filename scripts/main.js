alert("hello");


$(document).ready(function(){
	alert('This is ready');
	$('button').click(function(){
		$('p').css({color:"blue"})
		$('p').slideUp(500);
		$('p').slideDown(500);

		$('ol').css({color:"purple"})
		$('ol').slideUp(500);
		$('ol').slideDown(500);

	});
});