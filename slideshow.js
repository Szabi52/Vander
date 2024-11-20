// JavaScript for Slideshow effect
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("banner-slide");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  

    // Change image every 5 seconds
    setTimeout(showSlides, 5000); 
}

showSlides(); // Initialize the slideshow
