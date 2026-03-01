// --- 1. INITIALIZE AOS (Animate On Scroll) ---
// This makes elements slide and fade in as you scroll down
AOS.init({
    duration: 1000, // How long animation takes (1000ms = 1 sec)
    once: false,    // Set to 'true' if you only want animations to happen once
    mirror: true    // Animates elements out while scrolling past them
});

// --- 2. INITIALIZE TILT.JS (The 3D Hover Effect) ---
// Grabs all elements with the 'data-tilt' attribute and applies the 3D effect
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,          // Max tilt rotation (degrees)
    speed: 400,       // Speed of the entering/exit transition
    glare: true,      // Adds a shiny light reflection
    "max-glare": 0.2, // Max opacity of the glare
});

// --- 3. AUTO-UPDATE COPYRIGHT YEAR ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- 4. SMOOTH SCROLLING FOR NAV LINKS ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
