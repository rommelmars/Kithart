// Select all links in the head_links div
const links = document.querySelectorAll('.head_links a');

// Loop through links and add a click event listener to each
links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 600,
        offset: 100,
      });
  });
