// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Hover effect for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseover', function() {
    this.style.color = '#1a8d5f';
  });
  link.addEventListener('mouseout', function() {
    this.style.color = '#2ecc71';
  });
});
// Animated progress bars on skills section
document.addEventListener('DOMContentLoaded', function() {
  const skillsSection = document.getElementById('skills');
  const progressBars = skillsSection.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});
// Footer year update
document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.querySelector('footer span');
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
