export default function initAnimationScroll() {
    const sections = document.querySelectorAll('.text-scroll');
    const windowHeight = window.innerHeight * 0.75;
    const windowHeightImg = window.innerHeight * 0.60;
    const opacityImg = document.querySelector('.opacity-img');
    const servicoAnimation = document.querySelectorAll('.servico-js');
    const profissionalAnimation = document.querySelector('.texto-animado')
    let servicosAnimados = false;

    function animaServicosSequencialmente() {
        servicoAnimation.forEach((servico, index) => {
            setTimeout(() => {
                servico.classList.add('servico-ativo');
            }, index * 200); // 200ms entre cada item
        });
    }

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight && sectionTop > 0) {
                section.classList.add('scroll-ativo');
            } else {
                section.classList.remove('scroll-ativo');
            }
        });
        if(profissionalAnimation){
            const textTop = opacityImg.getBoundingClientRect().top;
            if(textTop < windowHeightImg && textTop > 0){
                profissionalAnimation.classList.add('text-ativo');
            }else{
                profissionalAnimation.classList.remove('text-ativo');
            } 
        }

        if (opacityImg) {
            const imgTop = opacityImg.getBoundingClientRect().top;

            if (imgTop < windowHeightImg && imgTop > 0) {
                opacityImg.classList.add('img-ativa');
            } else {
                opacityImg.classList.remove('img-ativa');
            }
        }

        // Anima os serviços uma única vez ao entrar na tela
        if (!servicosAnimados && servicoAnimation.length > 0) {
            const servicoTop = servicoAnimation[0].getBoundingClientRect().top;

            if (servicoTop < windowHeight && servicoTop > 0) {
                animaServicosSequencialmente();
                servicosAnimados = true;
            }
        }
    }

    animaScroll(); // ativa ao carregar
    window.addEventListener('scroll', animaScroll);
}
