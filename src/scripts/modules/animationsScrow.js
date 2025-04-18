export default function initAnimationScroll() {
    const sections = document.querySelectorAll('.text-scroll');
    console.log(sections)
    const windowHeight = window.innerHeight * 0.75;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight) {
                section.classList.add('scroll-ativo');
            }
        });
    }

    animaScroll(); // ativa ao carregar
    window.addEventListener('scroll', animaScroll);
}

