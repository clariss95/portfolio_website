const tl = gsap.timeline({ defaults: { duration: 2, ease: "power1.out" } })

tl.fromTo('.person', { x: -400, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 })
tl.fromTo('#Coding', { scale: 0 }, { scale: 1, ease: "elastic.out(1.12)" })
tl.fromTo('#Decoration', { opacity: 0 }, { opacity: 1, duration: 3.5 }, '<')



let slideIndex = 1;
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
    let i;
    let slides = document.getElementsByClassName("projects");
    let dots = document.getElementsByClassName("circle");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}