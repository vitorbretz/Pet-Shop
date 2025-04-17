export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('#menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
  
      if (section) {
        const startPosition = window.pageYOffset;
        const targetPosition = section.offsetTop;
        const distance = targetPosition - startPosition;
  
        const duration = 800; // tempo fixo em ms
        const startTime = performance.now();
  
        function animate(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1); // de 0 a 1
  
          // movimento linear (sem easing)
          window.scrollTo(0, startPosition + distance * progress);
  
          if (elapsed < duration) {
            requestAnimationFrame(animate);
          }
        }
  
        requestAnimationFrame(animate);
      }
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
  