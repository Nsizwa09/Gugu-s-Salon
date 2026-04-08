// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// WhatsApp form functionality
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userSurname').value;
    const style = document.getElementById('style').value;
    const successNote = document.getElementById('successNote');

    const myNumber = "27782996745";

    const message = `Hello! I'd like to book an appointment.%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Surname:* ${phone}%0A` +
                    `*Style:* ${style}`;

    const whatsappUrl = `https://wa.me/${myNumber}?text=${message}`;

    successNote.style.display = 'block';

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
        this.reset();
        successNote.style.display = 'none';
    }, 5000);
});