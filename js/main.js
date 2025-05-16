// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('nav-trigger');
  const menuLabel = document.querySelector('label[for="nav-trigger"]');
  
  menuLabel.addEventListener('click', function() {
    const isChecked = menuButton.checked;
    menuButton.checked = !isChecked;
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Lazy load images
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          imageObserver.unobserve(lazyImage);
        }
      });
    });
    
    lazyImages.forEach(function(lazyImage) {
      imageObserver.observe(lazyImage);
    });
  }
});
