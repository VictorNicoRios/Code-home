let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  //Top Image controller
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let descripion = document.getElementsByClassName("textbodybox");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    descripion[i].style.display = "none"; // Description desactivator
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  descripion[slideIndex-1].style.display = "block"; // Description activator
  dots[slideIndex-1].className += " active";

    }
  // Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  //Download
  function download(url) {

  }
