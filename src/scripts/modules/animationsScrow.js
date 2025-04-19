export default function initAnimationScroll() {
    const sections = document.querySelectorAll('.text-scroll');
    const windowHeight = window.innerHeight * 0.75;
    const windowHeightImg = window.innerHeight * 0.60;
    const opacityImg = document.querySelector('.opacity-img');

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight && sectionTop > 0) {
                section.classList.add('scroll-ativo');
            } else {
                section.classList.remove('scroll-ativo');
            }
        });

        if (opacityImg) {
            const imgTop = opacityImg.getBoundingClientRect().top;

            if (imgTop < windowHeightImg && imgTop > 0) {
                opacityImg.classList.add('img-ativa');
            } else {
                opacityImg.classList.remove('img-ativa');
            }
        }
    }

    animaScroll(); // ativa ao carregar
    window.addEventListener('scroll', animaScroll);
}



