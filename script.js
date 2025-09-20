// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close menu when a nav link is clicked (for mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }
});;