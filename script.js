// Carousel functionality for the hero section
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

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

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000); // Change slide every 5 seconds

// Show product details
document.querySelectorAll('.product-card a').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetDetails = document.getElementById(targetId);

        if (targetDetails) {
            targetDetails.style.display = 'block'; // Show product details
        }
    });
});
