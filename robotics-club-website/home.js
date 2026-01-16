document.addEventListener("DOMContentLoaded", () => {
    const headingElement = document.getElementById("HIGHLIGHTS");
    const textArray = ["C", "L", "U", "B", " ", "H", "I", "G", "H", "L", "I", "G", "H", "T", "S"];
    // Keep track of the current timeout IDs to clear them if the user scrolls away mid-animation
    let timeoutIds = [];
    
    // Function that performs the typewriter effect using setTimeout
    const typewrite = (element, textArr) => {
        // Clear any previous timeouts if they were mid-animation
        timeoutIds.forEach(clearTimeout);
        timeoutIds = [];
        element.innerHTML = ""; // Clear existing text immediately

        let currentText = "";
        for (let i = 0; i < textArr.length; i++){
            // Save the timeout ID so we can cancel it later if needed
            const id = setTimeout(function () {
                currentText += textArr[i];
                element.innerHTML = currentText;
            }, i * 100);
            timeoutIds.push(id);
        }
    };

    // Intersection Observer configuration
    const observerOptions = {
        root: null,         // observe within the viewport
        threshold: 0.8     // Trigger when 80% of the element is visible
    };

    // Create the observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the animation when it enters the view
                typewrite(entry.target, textArray);
            } else {
                // When the user scrolls away, clear any ongoing animations
                timeoutIds.forEach(clearTimeout);
                // Optional: You can reset innerHTML here if you want it blank while off-screen
                // entry.target.innerHTML = ""; 
            }
        });
    }, observerOptions);

    // Start observing the target element
    if (headingElement) {
        observer.observe(headingElement);
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const EVENT= document.getElementById("upcoming_event");
    const textArray = ["U","P","C","O","M","I","N","G"," ","E","V","E","N","T","S"];
    // Keep track of the current timeout IDs to clear them if the user scrolls away mid-animation
    let timeoutIds = [];
    
    // Function that performs the typewriter effect using setTimeout
    const typewrite = (element, textArr) => {
        // Clear any previous timeouts if they were mid-animation
        timeoutIds.forEach(clearTimeout);
        timeoutIds = [];
        element.innerHTML = ""; // Clear existing text immediately

        let currentText = "";
        for (let i = 0; i < textArr.length; i++){
            // Save the timeout ID so we can cancel it later if needed
            const id = setTimeout(function () {
                currentText += textArr[i];
                element.innerHTML = currentText;
            }, i * 100);
            timeoutIds.push(id);
        }
    };

    // Intersection Observer configuration
    const observerOptions = {
        root: null,         // observe within the viewport
        threshold: 0.8     // Trigger when 80% of the element is visible
    };

    // Create the observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the animation when it enters the view
                typewrite(entry.target, textArray);
            } else {
                // When the user scrolls away, clear any ongoing animations
                timeoutIds.forEach(clearTimeout);
                // Optional: You can reset innerHTML here if you want it blank while off-screen
                // entry.target.innerHTML = ""; 
            }
        });
    }, observerOptions);

    // Start observing the target element
    if (EVENT) {
        observer.observe(EVENT);
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const ACHIEVEMENT = document.getElementById("achievement");
    const textArray = ["A", "C", "H", "I", "E", "V", "E","M","E", "N", "T","S"];
    // Keep track of the current timeout IDs to clear them if the user scrolls away mid-animation
    let timeoutIds = [];
    
    // Function that performs the typewriter effect using setTimeout
    const typewrite = (element, textArr) => {
        // Clear any previous timeouts if they were mid-animation
        timeoutIds.forEach(clearTimeout);
        timeoutIds = [];
        element.innerHTML = ""; // Clear existing text immediately

        let currentText = "";
        for (let i = 0; i < textArr.length; i++){
            // Save the timeout ID so we can cancel it later if needed
            const id = setTimeout(function () {
                currentText += textArr[i];
                element.innerHTML = currentText;
            }, i * 100);
            timeoutIds.push(id);
        }
    };

    // Intersection Observer configuration
    const observerOptions = {
        root: null,         // observe within the viewport
        threshold: 0.8     // Trigger when 80% of the element is visible
    };

    // Create the observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the animation when it enters the view
                typewrite(entry.target, textArray);
            } else {
                // When the user scrolls away, clear any ongoing animations
                timeoutIds.forEach(clearTimeout);
                // Optional: You can reset innerHTML here if you want it blank while off-screen
                // entry.target.innerHTML = ""; 
            }
        });
    }, observerOptions);

    // Start observing the target element
    if (ACHIEVEMENT) {
        observer.observe(ACHIEVEMENT);
    }
});
 const observerOptions = {
            root: null, // use the viewport
            threshold: 0.15 // trigger when 15% is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Item enters viewport
                    entry.target.classList.add('active');
                } else {
                    // Item leaves viewport - this makes it "reappear" every time
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.content-row').forEach(row => {
            observer.observe(row);
        });
        
       

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navItems.classList.toggle("active");
// });


// In script.js - change 'active' to 'show' if you prefer, or update CSS
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function toggleMenu(isOpen) {
        if (isOpen) {
            navMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevents background scroll
        } else {
            navMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enables scroll
        }
    }

    if (hamburger) hamburger.addEventListener('click', () => toggleMenu(true));
    if (closeMenu) closeMenu.addEventListener('click', () => toggleMenu(false));
    if (menuOverlay) menuOverlay.addEventListener('click', () => toggleMenu(false));

    // Ensure menu closes when any link is clicked
    document.querySelectorAll('.nav-container .card').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
});