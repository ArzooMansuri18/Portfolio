// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Typing Animation
const texts = ["Welcome to my website!", "Frontend Developer", "BCA Student at Manipal University", "Open to Freelancing Work"];
let count = 0, index = 0, currentText = '', letter = '';

function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
}
document.addEventListener("DOMContentLoaded", type);

// Hamburger Menu Toggle
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});