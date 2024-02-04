document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.menu a');
    var previousLink = null;
  
    // Add event listener to each link
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
  
        // Reset color of previously clicked link
        if (previousLink !== null) {
          previousLink.style.color = ''; // Reset to original color
        }
  
        // Remove active class from all links
        links.forEach(function(link) {
          link.classList.remove('active');
        });
  
        // Add active class to the clicked link
        link.classList.add('active');
  
        
  
        // Update the previous link to the current one
        previousLink = link;
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.side-menu a');
    var previousLink = null;
  
    // Add event listener to each link
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
  
        // Reset color of previously clicked link
        if (previousLink !== null) {
          previousLink.style.color = ''; // Reset to original color
        }
  
        // Remove active class from all links
        links.forEach(function(link) {
          link.classList.remove('active');
        });
  
        // Add active class to the clicked link
        link.classList.add('active');
  
     
  
        // Update the previous link to the current one
        previousLink = link;
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.side-menuu a');
    var previousLink = null;
  
    // Add event listener to each link
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
  
        // Reset color of previously clicked link
        if (previousLink !== null) {
          previousLink.style.color = ''; // Reset to original color
        }
  
        // Remove active class from all links
        links.forEach(function(link) {
          link.classList.remove('active');
        });
  
        // Add active class to the clicked link
        link.classList.add('active');
  
      
        // Update the previous link to the current one
        previousLink = link;
      });
    });
  });
  
  