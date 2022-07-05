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

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm() {
    clearMessages()
    let errorFlag = false;
    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank.";
        nameInput.classList.add("error-border")
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address.";
        email.classList.add("error-border")
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "Please enter message.";
        message.classList.add("error-border")
        errorFlag = true;
    }
    if (!errorFlag) {
        success.innerText = "Thank you!";
    }
}

function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function scrollWin() {

    window.scrollBy({
        top: 2800,
        left: 0,
        behavior: 'smooth'
    });

}

function scrollWin2() {

    window.scrollBy({
        top: 5000,
        left: 0,
        behavior: 'smooth'
    });

}