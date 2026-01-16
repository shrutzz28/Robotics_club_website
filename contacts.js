        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navMenu = document.getElementById('navMenu');
            
            if (mobileMenuBtn && navMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    navMenu.classList.toggle('show');
                    mobileMenuBtn.innerHTML = navMenu.classList.contains('show') 
                        ? '<i class="fas fa-times"></i>' 
                        : '<i class="fas fa-bars"></i>';
                });
                
                // Close mobile menu when clicking outside
                document.addEventListener('click', function(event) {
                    if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target) && navMenu.classList.contains('show')) {
                        navMenu.classList.remove('show');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                });
            }
            
            // FAQ Accordion
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const faqItem = question.parentElement;
                    faqItem.classList.toggle('active');
                    
                    // Close other FAQ items
                    faqQuestions.forEach(otherQuestion => {
                        if (otherQuestion !== question) {
                            const otherFaqItem = otherQuestion.parentElement;
                            otherFaqItem.classList.remove('active');
                        }
                    });
                });
            });
            
            // Contact Form Submission
            const contactForm = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');
            
            if (contactForm && successMessage) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // Basic form validation
                    const name = document.getElementById('name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const subject = document.getElementById('subject').value.trim();
                    const purpose = document.getElementById('purpose').value;
                    const message = document.getElementById('message').value.trim();
                    
                    if (!name || !email || !subject || !purpose || !message) {
                        alert('Please fill in all required fields.');
                        return;
                    }
                    
                    // Show success message
                    successMessage.classList.add('show');
                    
                    // Scroll to success message
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Reset form after 5 seconds
                    setTimeout(() => {
                        contactForm.reset();
                        successMessage.classList.remove('show');
                    }, 5000);
                });
            }
            
            // Set current year in footer
            const currentYear = new Date().getFullYear();
            const yearElement = document.querySelector('.footer-bottom p:first-child');
            if (yearElement) {
                yearElement.textContent = `©${currentYear} Robotics Club NIT Patna - All Rights Reserved`;
            }
        });
