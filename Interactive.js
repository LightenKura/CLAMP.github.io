<img class="mySlides" src="CLAMP_Fes_2011.jpg">
<img class="mySlides" src="AllChar2.jpg">
<img class="mySlides" src="AllChar3.jpg">
<img class="mySlides" src="AllChar4.jpg">

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1000); // Change image every 2 seconds
}
