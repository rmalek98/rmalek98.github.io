var slides = document.querySelectorAll('#slideshow-container img');
var currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

function prevSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.opacity = 1;
}