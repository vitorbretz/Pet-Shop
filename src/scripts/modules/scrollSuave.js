export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('#menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
  
      if (section) {
        const targetPosition = section.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 700; // tempo total da animação em ms
        let start = null;
  
        function animationScroll(timestamp) {
          if (!start) start = timestamp;
          const elapsed = timestamp - start;
          const progress = Math.min(elapsed / duration, 1);
          window.scrollTo(0, startPosition + distance * progress);
          if (elapsed < duration) {
            requestAnimationFrame(animationScroll);
          }
        }
  
        requestAnimationFrame(animationScroll);
      }
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
  