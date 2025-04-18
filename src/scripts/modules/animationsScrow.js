export default function initAnimationScroll() {
    const sections = document.querySelectorAll('.text-scroll');
    const windowHeight = window.innerHeight * 0.75;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight && sectionTop > 0) {
                section.classList.add('scroll-ativo');
            } else {
                section.classList.remove('scroll-ativo');
            }
        });
    }

    animaScroll(); // ativa ao carregar
    window.addEventListener('scroll', animaScroll);
}


