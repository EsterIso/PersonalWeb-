let slideIndex = {};
let slideshowIntervals = {};

function initSlideshow(slideshowId) {
    slideIndex[slideshowId] = 0;
    showSlides(slideshowId);
    
    // Start auto-sliding
    startAutoSlide(slideshowId);
}

function showSlides(slideshowId) {
    let i;
    let slides = document.getElementById(slideshowId).getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex[slideshowId]++;
    if (slideIndex[slideshowId] > slides.length) {slideIndex[slideshowId] = 1}
    slides[slideIndex[slideshowId]-1].style.display = "block";
}

function startAutoSlide(slideshowId) {
    // Change slides every 5 seconds (5000 milliseconds)
    slideshowIntervals[slideshowId] = setInterval(() => {
        showSlides(slideshowId);
    }, 5000);
}

// Initialize slideshows when the page loads
window.onload = function() {
    initSlideshow("weather-slideshow");
    initSlideshow("todos-slideshow");
};