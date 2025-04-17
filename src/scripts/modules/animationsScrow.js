export default function initAnimationScrow(){
    const sections = document.querySelectorAll('.js-scroll');

    function animaScroll(){
        sections.forEach((section)=>{
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop < 0){
                section.classList.add('scroll-ativo');
            }
        })
    }

    window.addEventListener('scroll', animaScroll)

}