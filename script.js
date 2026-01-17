document.addEventListener('DOMContentLoaded', () => {
    const hamburgerInput = document.querySelector('#hamburger1-input');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    if (!hamburgerInput || !navLinks) {
        console.error("Elements not found!");
        return;
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
});

hamburgerInput.addEventListener("click", () => console.log("Document clicked"));