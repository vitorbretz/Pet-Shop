export default function slideShow() {
    const slideWrapper = document.querySelector('[data-slide="wrapper"]');
    const slideList = document.querySelector('[data-slide="slide-list"]');
    const slideItems = document.querySelectorAll('[data-slide="slide-item"]');

    const state = {
        startingPoint: 0,
        savedPosition: 0,
        currentTranslate: 0,
        movement: 0 ,
        currentIndex: 0
    }
    function onMouseDown(event, index) {
        state.startingPoint = event.clientX - state.savedPosition;
        state.currentIndex = index;
       

        // Adiciona eventos no `slideWrapper` para garantir que funcionem corretamente
        slideWrapper.addEventListener('mousemove', onMouseMove);
        slideWrapper.addEventListener('mouseup', onMouseUp);
        slideWrapper.addEventListener('mouseleave', onMouseUp);
    }

    function onMouseMove(event) {
        const slideItem = event.currentTarget;
        const slidewidth = slideItem.clientWidth;
        if(state.movement < -150){
            slideList.style.transform = `translateX(${state.movement}px)`;  
        }
        state.movement = event.clientX - state.startingPoint;
        state.currentTranslate = state.movement;
        slideList.style.transform = `translateX(${state.movement}px)`;
    }

    function onMouseUp() {
        state.savedPosition = state.currentTranslate; // Salva a posição atual
        slideWrapper.removeEventListener('mousemove', onMouseMove);
        slideWrapper.removeEventListener('mouseup', onMouseUp);
        slideWrapper.removeEventListener('mouseleave', onMouseUp);
    }

    // Impede o comportamento padrão de arrastar imagens no navegador
    slideItems.forEach((item, index) => {
        item.addEventListener('dragstart', (event) => event.preventDefault());
        item.addEventListener('mousedown', function(){
            onMouseDown(event, index)
        });
        item.addEventListener('mouseup', onMouseUp)
    });
}
