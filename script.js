// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    // Add your backend code here to handle form submission
});
// Hero Section Animation
window.addEventListener('scroll', function() {
    const heroSection = document.getElementById('hero');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        heroSection.classList.add('animate');
    } else {
        heroSection.classList.remove('animate');
    }
});
