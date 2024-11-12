// Carousel functionality for the hero section
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slideWidth = slides[0].clientWidth;
    const offset = -currentSlide * slideWidth;
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

// Auto-slide every 5 seconds
let carouselInterval = setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000); // Change slide every 5 seconds

// Manual navigation
document.querySelector('.next-button').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev-button').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Pause the carousel when hovering
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(carouselInterval); // Pause the interval
});

document.querySelector('.carousel').addEventListener('mouseleave', () => {
    carouselInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Restart the interval
});
