export default function slideShow() {
    const slideWrapper = document.querySelector('[data-slide="wrapper"]');
    const slideList = document.querySelector('[data-slide="slide-list"]');
    const slideItems = document.querySelectorAll('[data-slide="slide-item"]');

    if (slideItems.length === 0) return; // Evita erro se não houver slides

    // Clona primeiro e último slide
    const firstClone = slideItems[0].cloneNode(true);
    const lastClone = slideItems[slideItems.length - 1].cloneNode(true);

    // Adiciona clones ao DOM
    slideList.appendChild(firstClone);
    slideList.insertBefore(lastClone, slideItems[0]);

    // Atualiza a lista de slides após a clonagem
    const allSlides = document.querySelectorAll('[data-slide="slide-item"]');
    const totalSlides = allSlides.length;

    const state = {
        startingPoint: 0,
        savedPosition: -allSlides[1].offsetWidth, // Começa no primeiro slide real
        movement: 0,
        currentIndex: 1, // Iniciamos no primeiro slide real
        slideWidth: allSlides[1].offsetWidth,
        isDragging: false,
        autoplayInterval: null
    };

    // Aplica a posição inicial (ignorando o clone inicial)
    slideList.style.transform = `translateX(${state.savedPosition}px)`;

    function goToNextSlide() {
        state.currentIndex++;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        state.savedPosition = -state.currentIndex * state.slideWidth;
        slideList.style.transition = 'transform 0.6s ease-in-out';
        slideList.style.transform = `translateX(${state.savedPosition}px)`;

        // Corrige a posição após a transição, caso esteja no clone
        setTimeout(() => {
            if (state.currentIndex === totalSlides - 1) {
                slideList.style.transition = 'none';
                state.currentIndex = 1;
                state.savedPosition = -state.currentIndex * state.slideWidth;
                slideList.style.transform = `translateX(${state.savedPosition}px)`;
            } else if (state.currentIndex === 0) {
                slideList.style.transition = 'none';
                state.currentIndex = totalSlides - 2;
                state.savedPosition = -state.currentIndex * state.slideWidth;
                slideList.style.transform = `translateX(${state.savedPosition}px)`;
            }
        }, 300);
    }

    function startAutoplay() {
        state.autoplayInterval = setInterval(goToNextSlide, 4000); // Passa o slide a cada 4s
    }

    function stopAutoplay() {
        clearInterval(state.autoplayInterval);
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    function onMouseDown(event) {
        state.startingPoint = event.clientX;
        state.isDragging = true;
        stopAutoplay(); // Pausa o autoplay enquanto o usuário interage

        slideList.style.transition = 'none';
        slideWrapper.addEventListener('mousemove', onMouseMove);
        slideWrapper.addEventListener('mouseup', onMouseUp);
        slideWrapper.addEventListener('mouseleave', onMouseUp);
    }

    function onMouseMove(event) {
        state.movement = event.clientX - state.startingPoint;
        const newPosition = state.savedPosition + state.movement;
        slideList.style.transform = `translateX(${newPosition}px)`;
    }

    function onMouseUp() {
        state.isDragging = false;
        const movedDistance = state.movement;
        const threshold = state.slideWidth / 3;

        if (movedDistance < -threshold) {
            state.currentIndex++;
        } else if (movedDistance > threshold) {
            state.currentIndex--;
        }

        updateSlidePosition();
        resetAutoplay(); // Reinicia o autoplay após interação

        slideWrapper.removeEventListener('mousemove', onMouseMove);
        slideWrapper.removeEventListener('mouseup', onMouseUp);
        slideWrapper.removeEventListener('mouseleave', onMouseUp);
    }

    // Impede o comportamento padrão de arrastar imagens
    allSlides.forEach((item) => {
        item.addEventListener('dragstart', (event) => event.preventDefault());
        item.addEventListener('mousedown', onMouseDown);
    });

    startAutoplay(); // Inicia o autoplay ao carregar
}
