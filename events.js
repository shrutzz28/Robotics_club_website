const upcomingEvents = [
    { 
        name: "Robo-Sumo 2026", 
        date: "2026-03-15", 
        time: "10:00 AM", 
        venue: "Main Hall", 
        img: "images/robo_sumo.jpeg", 
        des: "Heavyweight battle-bot tournament." 
    },
    { 
        name: "AI Vision Workshop", 
        date: "2026-02-10", 
        time: "02:00 PM", 
        venue: "Lab 4", 
        img: "images/ai_lab.jpeg", 
        des: "Learning real-time object detection." 
    },
    { 
        name: "Drone Race", 
        date: "2026-05-20", 
        time: "09:00 AM", 
        venue: "Field X", 
        img: "images/drone_race.jpeg", 
        des: "High-speed autonomous racing." 
    },
    { 
        name: "NASA Guest Talk", 
        date: "2026-04-05", 
        time: "05:00 PM", 
        venue: "Auditorium", 
        img: "images/nasa_summit.jpeg", 
        des: "Talk on Mars Rover mechanics." 
    }
];

const ongoingProjects = [
    { 
        title: "Hexapod Explorer", 
        progress: 75, 
        img: "images/hexa.jpeg", 
        des: "LiDAR-based terrain mapping robot." 
    },
    { 
        title: "Bionic Prosthetic", 
        progress: 40, 
        img: "images/bionic.jpeg", 
        des: "EMG sensor controlled robotic arm." 
    }
];

const pastGallery = [
    { name: "Future of Robotics", cat: "Lectures", date: "Jan 2026", img: "images/future.jpeg", des: "Guest talk by Boston Dynamics." },
    { name: "Arduino 101", cat: "Workshops", date: "Oct 2025", img: "images/arduino.jpeg", des: "Basic electronics session." },
    { name: "National Combat", cat: "Competitions", date: "Dec 2025", img: "images/combat.jpeg", des: "30kg bot tournament." },
    { name: "Club Mixer", cat: "Social Events", date: "Nov 2025", img: "images/club.jpeg", des: "Networking night." },
    { name: "PCB Design", cat: "Workshops", date: "Aug 2025", img: "images/pcb.jpeg", des: "Professional circuit layout." },
    { name: "Maze Solver", cat: "Competitions", date: "July 2025", img: "images/maze1.jpeg", des: "Autonomous bot race." }
];

/* --- RENDERING ENGINE --- */

function init() {
    renderUpcoming(upcomingEvents);
    renderProjects();
    renderGallery();
    
    // Automatic scroll every 3 seconds
    setInterval(() => {
        moveNext();
    }, 3000);

    // Initialize reveal effect on scroll
    handleScrollReveal();
}

function renderUpcoming(data) {
    document.getElementById('eventSlider').innerHTML = data.map(ev => `
        <div class="item" style="background-image: url('${ev.img}'), url('https://via.placeholder.com/1200x800?text=Event+Image');">
            <div class="content">
                <div class="name">${ev.name}</div>
                <div style="color:#e100ff; font-size:12px; margin-bottom:10px;">${ev.date} | ${ev.time} | ${ev.venue}</div>
                <p style="font-size:14px;">${ev.des}</p>
                <button onclick="location.href='register.html'">Register Interest</button>
            </div>
        </div>
    `).join('');
}
function renderProjects() {
    document.getElementById('projectGrid').innerHTML = ongoingProjects.map(p => `
        <div class="proj-card">
            <img src="${p.img}" alt="Project">
            <div style="padding:20px;">
                <h3>${p.title}</h3>
                <p style="font-size:13px; color:#ccc; margin-top:5px;">${p.des}</p>
                <div class="progress-bar"><div class="progress-fill" style="width:${p.progress}%"></div></div>
                <span style="font-size:11px;">Status: ${p.progress}% Complete</span>
            </div>
        </div>
    `).join('');
}

function renderGallery(filter = 'all') {
    const galleryContainer = document.getElementById('pastGallery');
    
    // Convert both to lowercase to ensure "Social" matches "Social Events"
    const filtered = filter === 'all' 
        ? pastGallery 
        : pastGallery.filter(e => e.cat.toLowerCase().includes(filter.toLowerCase()));

    galleryContainer.innerHTML = filtered.map(e => `
        <div class="gallery-item">
            <img src="${e.img}" alt="${e.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
            <div class="gallery-overlay">
                <span style="color:#008cff; font-size:11px;">${e.cat}</span>
                <h4 style="margin:5px 0;">${e.name}</h4>
                <p style="font-size:12px; color:#ccc;">${e.date} - ${e.des}</p>
            </div>
        </div>
    `).join('');
}

// Logic for moving slider forward
function moveNext() {
    let items = document.querySelectorAll('.item');
    if (items.length > 0) {
        document.getElementById('eventSlider').appendChild(items[0]);
    }
}

// Slider Controls
document.querySelector('.next').onclick = () => {
    moveNext();
};

document.querySelector('.prev').onclick = () => {
    let items = document.querySelectorAll('.item');
    document.getElementById('eventSlider').prepend(items[items.length - 1]);
};

document.getElementById('sortEvents').onchange = (e) => {
    const sorted = [...upcomingEvents];
    if(e.target.value === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
    else sorted.sort((a,b) => new Date(a.date) - new Date(b.date));
    renderUpcoming(sorted);
};

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filterValue = this.getAttribute('data-filter');
        renderGallery(filterValue);
    };
});

/* --- APPEAR ON SCROLL LOGIC --- */
function handleScrollReveal() {
    // Select sections and cards to animate
    const revealElements = document.querySelectorAll('.section, .proj-card, .gallery-item');
    
    // Add reveal class to set initial hidden state
    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
}

window.onload = init();
// --- MOBILE SIDEBAR TOGGLE LOGIC ---
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburgerBtn && closeMenuBtn && mobileMenu) {
    // Open menu
    hamburgerBtn.onclick = () => {
        mobileMenu.classList.add('active'); //
    };

    // Close menu (The Cross Sign)
    closeMenuBtn.onclick = () => {
        mobileMenu.classList.remove('active'); //
    };

    // Close menu when a link is clicked
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.onclick = () => {
            mobileMenu.classList.remove('active'); //
        };
    });
}