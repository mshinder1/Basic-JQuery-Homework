Including the JQuery Library:
Copy this into the <head> tag:
<script src=http:"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js></script>"


Writing Anonymous Functions:
function(){
  alert("I am anonymous!");
 or
 var my_anon_func = function(){ alert("Har!"); }


 Callbacks:
 function someRunner(anyFunction){ console.log(2+2); anyFunction(); }
 or
 var someOtherFunction = function(){ alert('hello world'); }


 Using document.ready
 $(document).ready(
 	function(){
    alert('The document is ready, sah!');
  }
);


 Showing and Hiding
 $("body").hide();
$("body").show();


Fading in and out
$("#section-one").fadeOut();
$("#section-one").fadeIn();

Fade over time 
$("#section-one").fadeOut(1000);
//Fade out over 1 second
$("#section-one").fadeIn(4000);
//Fade in over 4 seconds


Hiding with Sliding
$("#section-one").slideUp(1000);
//Fade out over 1 second
$("#section-one").slideDown(4000);
//Fade in over 4 seconds

Animating CSS
$(".my-element").animate( {
  opacity: 0.25,
  width: "70%"
} , 2000 );

The Click element
$("ul li a").click(
  function(){
    alert('imclicked!');
  }
);


Using a callback for a sequence
var animateMenu = function(){
  $(".menu").animate( {opacity: .5} )
}
$(".menu").show(animateMenu)
