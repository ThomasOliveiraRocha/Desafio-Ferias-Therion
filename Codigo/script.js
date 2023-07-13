document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
  
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetSection = this.getAttribute('data-section');
        showSection(targetSection);
      });
    });
  
    function showSection(targetSection) {
      sections.forEach(function(section) {
        section.style.display = 'none';
      });
  
      const selectedSection = document.getElementById(targetSection);
      selectedSection.style.display = 'block';
    }
  });
  