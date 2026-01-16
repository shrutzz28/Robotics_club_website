/* FILTER LOGIC (CARD SIZE UNCHANGED) */
const filterButtons = document.querySelectorAll(".filter-btn");
const newsCards = document.querySelectorAll(".news-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    newsCards.forEach(card => {
      card.style.display =
        category === "all" || card.classList.contains(category)
          ? "block"
          : "none";
    });
  });
});

/* POPUP LOGIC */
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupContent = document.getElementById("popupContent");
const popupClose = document.getElementById("popupClose");

document.addEventListener("click", e => {
  if (e.target.classList.contains("read-more")) {
    e.preventDefault();
    popupTitle.textContent = e.target.dataset.title;
    popupContent.textContent = e.target.dataset.content;
    popup.classList.add("active");
  }
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("active");
});

popup.addEventListener("click", e => {
  if (e.target === popup) popup.classList.remove("active");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") popup.classList.remove("active");
});

 const cards = document.querySelectorAll('.card-B')
        cards.forEach(element => {
            element.onmousemove = (e)=>{
                let x = e.pageX - element.offsetLeft;
                let y = e.pageY - element.offsetTop;
                element.style.setProperty('--x', x + "px")
                element.style.setProperty('--y', y + "px")
            }
        });
        const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const navList = document.getElementById('nav-list');

// Open Sidebar
mobileMenu.addEventListener('click', () => {
    navList.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close Sidebar
menuClose.addEventListener('click', () => {
    navList.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close when clicking outside the menu
document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !mobileMenu.contains(e.target)) {
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});