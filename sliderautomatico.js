var slider = document.querySelector('.slider');
var slidesContainer = document.querySelector('.slides');
var slides = document.querySelectorAll('.slides a');
var currentSlide = 0;
var slideWidth = slider.offsetWidth;
var totalSlides = slides.length;
var interval;

function startSlider() {
  interval = setInterval(nextSlide, 2000);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function stopSlider() {
  clearInterval(interval);
}

startSlider();