
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

const viewImage = document.querySelectorAll('.view-images');
const carousel = document.getElementById("customCarousel");
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const closeBtn = document.querySelector('.close-btn');

let currentIndex = 0;

const imageSets = [
    ["terrace 1.jpg", "terrace 2.jpg", "terrace 3.jpg"],
    ["bedroom 1.jpg", "bedroom 2.jpg", "bedroom 3.jpg"],
    ["toilet 1.jpg", "toilet 2.jpg"],
    ["living 1.jpg", "living 2.jpg", "living 3.jpg"],
    ["kitchen 1.jpg", "kitchen 2.png", "kitchen 3.png", "kitchen 4.jpg"],
    ["closet 1.jpg", "closet 2.png"],
    ["private 1.jpg", "private 2.jpg"],
];

function showImage(index) {
    const images = carouselInner.querySelectorAll('img');
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

viewImage.forEach((card, index) => {
    card.addEventListener("click", function () {
        carouselInner.innerHTML = "";
        const images = imageSets[index];

        images.forEach((imgName, i) => {
            const imgElement = document.createElement("img");
            imgElement.src = `/images/${imgName}`;
            if (i === 0) {
                imgElement.classList.add("active");
            }
            carouselInner.appendChild(imgElement);
        });

        currentIndex = 0;
        carousel.style.display = "flex";
    });
});

prevBtn.addEventListener("click", function () {
    const images = carouselInner.querySelectorAll('img');
    if (images.length === 0) return;
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = images.length - 1;
    }
    showImage(newIndex);
});

// Navigate to the next image
nextBtn.addEventListener("click", function () {
    const images = carouselInner.querySelectorAll('img');
    if (images.length === 0) return;
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
        newIndex = 0;
    }
    showImage(newIndex);
});

// Close button functionality
closeBtn.addEventListener("click", function () {
    carousel.style.display = "none";
});

// Close when clicking outside the carousel content
carousel.addEventListener("click", function (event) {
    if (event.target === carousel) {
        carousel.style.display = "none";
    }
});
