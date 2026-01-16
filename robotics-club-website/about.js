// Initialize AOS (Animate On Scroll)
AOS.init({ 
    duration: 1000, 
    once: false 
});

// Back to Top Logic
const topBtn = document.getElementById("backToTop");

window.onscroll = function() {
    // Show button after scrolling 500px
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Smooth scroll to top when button is clicked
topBtn.onclick = function() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
};
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const navList = document.getElementById('nav-list');

// Open Sidebar Function
mobileMenu.addEventListener('click', () => {
    navList.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scrolling
});

// Close Sidebar Function
menuClose.addEventListener('click', () => {
    navList.classList.remove('active');
    document.body.style.overflow = 'auto'; // Unlock scrolling
});

// Close menu if user clicks anywhere outside the sidebar
document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !mobileMenu.contains(e.target)) {
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});