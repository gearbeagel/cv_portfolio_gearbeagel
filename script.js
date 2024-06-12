function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === sectionId) {
            link.style.textDecoration = 'underline';
        } else {
            link.style.textDecoration = 'none';
        }
    });
}
  
  // Initially show the home section only
  document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
  });