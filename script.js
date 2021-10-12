// SLIDESHOW CODE 

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


//slide show for products
var slideIndexp = 1;
showSlidesproducts(slideIndexp);


// Next/previous controls
function plusSlidesproducts(n) {
  showSlidesproducts(slideIndexp += n);
}

function showSlidesproducts(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesP");
  console.log(slides.length);
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndexp = 1
  }
  if (n < 1) {
    slideIndexp = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndexp-1].style.display = "block";
  slides[slideIndexp].style.display = "block";
  
}


