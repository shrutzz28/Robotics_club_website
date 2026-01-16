// Global state to track both active filters
let currentCategory = 'all';
let currentYear = 'all';

/**
 * Handles Category selection and updates the Hero background
 */
function filterCategory(category, btn, heroUrl) {
    currentCategory = category;
    
    // Update Hero image if provided
    const hero = document.getElementById('category-hero');
    if (hero && heroUrl) {
        hero.style.backgroundImage = `url('${heroUrl}')`;
    }
    
    // Update button UI state
    updateButtonUI(btn);
    
    // Logic for smooth transitions
    closeAllExpanded();
    applyFilters();
}

/**
 * Handles Year selection
 */
function filterYear(year, btn) {
    currentYear = year;
    
    // Update button UI state
    updateButtonUI(btn);
    
    // Logic for smooth transitions
    closeAllExpanded();
    applyFilters();
}

/**
 * Core filtering logic that checks both Category AND Year
 */
function applyFilters() {
    const cards = document.querySelectorAll('.real-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const year = card.getAttribute('data-year');
        
        // Logical AND ensures both conditions must be met unless set to 'all'
        const match = (currentCategory === 'all' || cat === currentCategory) && 
                      (currentYear === 'all' || year === currentYear);

        if (match) {
            card.classList.remove('hide');
            visibleCount++;
        } else {
            card.classList.add('hide');
        }
    });

    // Toggle the "No Results" message visibility
    const noResults = document.getElementById('no-results');
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

/**
 * Handles the expansion of a card
 */
function toggleBox(btn) {
    const parent = btn.closest('.img-glass');
    
    // Close other expanded cards before opening this one
    document.querySelectorAll('.img-glass.expanded').forEach(card => {
        if (card !== parent) {
            card.classList.remove('expanded');
            const otherTrigger = card.querySelector('.trigger');
            if (otherTrigger) otherTrigger.style.opacity = "1";
        }
    });

    parent.classList.add('expanded');
    btn.style.opacity = "0"; // Hide the "See More" button while expanded
}

/**
 * Closes the expanded card via the internal "Close" button
 */
function closeFromBtn(closeBtn) {
    const parent = closeBtn.closest('.img-glass');
    parent.classList.remove('expanded');
    
    // Delay restoring the "See More" trigger for visual smoothness
    setTimeout(() => {
        const trigger = parent.querySelector('.trigger');
        if (trigger) trigger.style.opacity = "1";
    }, 400);
}

/**
 * Utility: Closes all expanded cards
 */
function closeAllExpanded() {
    document.querySelectorAll('.img-glass.expanded').forEach(card => {
        card.classList.remove('expanded');
        const trigger = card.querySelector('.trigger');
        if (trigger) trigger.style.opacity = "1";
    });
}

/**
 * Utility: Updates 'active' class on filter buttons
 */
function updateButtonUI(btn) {
    if (btn && btn.parentElement) {
        btn.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
}

/**
 * Global click listener to close cards when clicking outside
 */
window.onclick = (e) => {
    // Only close if the click is outside the cards and filter controls
    if (!e.target.closest('.img-glass') && !e.target.closest('.filter-controls')) {
        closeAllExpanded();
    }
};
document.getElementById('trigger1').addEventListener('click', function() {
    document.getElementById('hidden-box1').scrollIntoView({
      behavior: 'smooth', // or 'auto' for instant
      block: 'center'     // aligns box to center, 'start' for top
    });
  })
  document.getElementById('trigger2').addEventListener('click', function() {
    document.getElementById('hidden-box2').scrollIntoView({
      behavior: 'smooth', // or 'auto' for instant
      block: 'center'     // aligns box to center, 'start' for top
    });
  })
  document.getElementById('trigger3').addEventListener('click', function() {
    document.getElementById('hidden-box3').scrollIntoView({
      behavior: 'smooth', // or 'auto' for instant
      block: 'center'     // aligns box to center, 'start' for top
    });
  })
  document.getElementById('trigger4').addEventListener('click', function() {
    document.getElementById('hidden-box4').scrollIntoView({
      behavior: 'smooth', // or 'auto' for instant
      block: 'center'     // aligns box to center, 'start' for top
    });
  })
  document.getElementById('trigger5').addEventListener('click', function() {
    document.getElementById('hidden-box5').scrollIntoView({
      behavior: 'smooth', // or 'auto' for instant
      block: 'center'     // aligns box to center, 'start' for top
    });
  })
  document.getElementById('trigger6').addEventListener('click', function() {
    document.getElementById('hidden-box6').scrollIntoView({
      behavior: 'smooth', // or 'auto' for instant
      block: 'center'     // aligns box to center, 'start' for top
    });
  })
  // --- MOBILE SIDEBAR TOGGLE ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (hamburgerBtn && closeMenuBtn && mobileMenu) {
      // Open sliding menu
      hamburgerBtn.onclick = () => {
          mobileMenu.classList.add('active');
      };
  
      // Close sliding menu (The Cross Sign)
      closeMenuBtn.onclick = () => {
          mobileMenu.classList.remove('active');
      };
  
      // Close menu when any link inside is clicked
      document.querySelectorAll('.mobile-nav-links a').forEach(link => {
          link.onclick = () => {
              mobileMenu.classList.remove('active');
          };
      });
  }
//   see more
function toggleBox(btn) {
    const parent = btn.closest('.img-glass');
    
    // Toggle the expansion
    parent.classList.toggle('expanded');
    
    if (parent.classList.contains('expanded')) {
        btn.innerHTML = "See Less"; // Change button text
        
        // On mobile, scroll the card into view so the content below is visible
        if (window.innerWidth < 991) {
            setTimeout(() => {
                parent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    } else {
        btn.innerHTML = "See More";
    }
}
