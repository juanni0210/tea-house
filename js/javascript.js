/* header jQueyr sliding */
	$(document).ready(function(){
	    $("#phone-icon").click(function(){
	        $("#number-panel").slideToggle("slow");
	    });
	});


	$(document).ready(function(){
	    $("#search-icon").click(function(){
	        $("#search-box").slideToggle("slow");
	    });
	});
/* header jQueyr sliding ends */

/*new responsive menu */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*new responsive menu ends*/


/*  image gallery slide show */
	var slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
	showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
	showSlides(slideIndex = n);
	}

	function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (slides.length < 1) {
		return
	}
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
	}
/*  image gallery slide show ends */


/* contacts jQuery sliding */
if($(window).width() < 768) {
var coll = document.getElementsByClassName("collapse-panel");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
}
/* contacts jQuery sliding ends*/
