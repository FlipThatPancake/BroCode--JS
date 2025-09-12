

// initiate const for these html buttons

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.slide-container img');

let slideIndex = 0;
let interval = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

next.addEventListener("click", () => {
    nextSlide();
});

prev.addEventListener("click", () => {
    prevSlide();
});

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    interval = setInterval(nextSlide, 2000);
    }
}

function showSlide(index) {
    
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 2000);
}

function prevSlide() {
    resetInterval(interval);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
