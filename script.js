document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const backgroundElement = document.getElementById("background");
    const searchBar = document.getElementById("search-bar");
    const cardGrid = document.getElementById("card-grid");
    const sidebarLinks = document.querySelectorAll(".search-item");

    let isDynamicBackground = true;

    // Initialize particles.js
    function initParticles() {
        particlesJS("background", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true,
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.5 } },
                    bubble: { distance: 400, size: 40, duration: 2 },
                    repulse: { distance: 200 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 },
                },
            },
            retina_detect: true,
        });
    }

    // Stop particles.js (turn off dynamic background)
    function disableParticles() {
        backgroundElement.innerHTML = ''; // Removes the dynamic particles effect
    }

    // Toggle the dynamic background based on the checkbox
    themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
            isDynamicBackground = true;
            initParticles(); // Re-enable the dynamic background
        } else {
            isDynamicBackground = false;
            disableParticles(); // Disable the dynamic background
        }
    });

    // Initialize the dynamic background by default
    if (isDynamicBackground) {
        initParticles();
    }

    // Search functionality for tools
    searchBar.addEventListener("input", function () {
        const query = searchBar.value.toLowerCase();
        const cards = cardGrid.getElementsByClassName('card');
        const sidebarItems = document.querySelectorAll(".sidebar ul li a");

        // Filter cards based on the search input
        Array.from(cards).forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Filter sidebar links based on the search input
        sidebarItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
