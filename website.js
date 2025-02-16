document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.pricing-item button');
  
    contactButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
  
        const targetId = this.getAttribute('data-target'); // Get target ID from data attribute
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error('Target element with ID "' + targetId + '" not found.');
        }
      });
    });
  });