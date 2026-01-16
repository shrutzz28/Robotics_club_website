// Reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Counter animation
document.querySelectorAll('.counter').forEach(counter => {
  const target = +counter.dataset.target;
  let count = 0;

  const update = () => {
    count += target / 90;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Timeline subtle scroll animation
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  item.style.transition = "all 0.6s ease";
  timelineObserver.observe(item);
});
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