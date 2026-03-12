
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

// const steps = document.querySelectorAll(".step");

// steps.forEach((step, i) => {
//     setTimeout(() => {
//         step.classList.add("active");
//     }, i * 200);
// });

const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    reset: true
});
sr.reveal('.about-content', { delay: 300, origin: 'bottom', });
// sr.reveal('.skill', { delay: 200, origin: 'left', interval: 500 });
sr.reveal('.skill', {
    origin: 'left',
    distance: '40px',
    duration: 800,
    interval: 150
});
sr.reveal('.first-container', { delay: 300, origin: 'left', distance: '40px' });
sr.reveal('.second-container', { delay: 300, origin: 'right', distance: '40px' });
sr.reveal('.project-container', { delay: 300, origin: 'top', distance: '40px', interval: 150 });

function counter(el, target) {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        el.innerText = count + "+";
        if (count === target) clearInterval(interval);
    }, 200);
}

const elements = document.querySelectorAll('.anchor-text-no');

elements.forEach(el => {
    const target = parseInt(el.innerText);

    counter(el, target);
});