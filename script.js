
const hamburgerInput = document.querySelector('#hamburger1-input');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');

if (!hamburgerInput || !navLinks) {
    console.error("Elements not found!");
}

hamburgerInput.addEventListener('change', () => {
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburgerInput.checked = false;
    });
});



const header = document.querySelector("header");
const hero = document.querySelector("#hero");

window.addEventListener("scroll", () => {

    const heroHeight = hero.offsetHeight;
    const scrollPosition = window.scrollY;

    let opacity = scrollPosition / heroHeight;

    if (opacity > 1) {
        opacity = 1;
    }

    // header.style.background = `rgba(255,255,255,${opacity})`;\
    header.style.background = `rgba(40,54,82,${opacity})`
});