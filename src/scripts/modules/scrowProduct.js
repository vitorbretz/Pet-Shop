export default class ScrowProduct {
    constructor(slide, wrapper) {
        this.slide = slide;
        this.wrapper = wrapper;
        this.dist = { finalPosition: 0, startX: 0, movement: 0 };
        this.bindEvent();
    }

    moveSlide(distX) {
        const maxMove = 0;
        const minMove = -(this.slide.scrollWidth - this.wrapper.offsetWidth);

        const newPosition = Math.max(Math.min(distX, maxMove), minMove);
        this.slide.style.transform = `translate3d(${newPosition}px, 0, 0)`;
    }

    updatePosition(clientX) {
        this.dist.movement = this.dist.startX - clientX;
        return this.dist.finalPosition - this.dist.movement;
    }

    onStart(event) {
        event.preventDefault();
        this.dist.startX = event.clientX || event.touches[0].clientX;
        this.wrapper.addEventListener('mousemove', this.onMove);
        this.wrapper.addEventListener('mouseup', this.onEnd);
        this.wrapper.addEventListener('touchmove', this.onMove);
        this.wrapper.addEventListener('touchend', this.onEnd);
    }

    onMove(event) {
        const clientX = event.clientX || event.touches[0].clientX;
        const finalPosition = this.updatePosition(clientX);
        this.moveSlide(finalPosition);
    }

    onEnd() {
        this.dist.finalPosition = this.dist.finalPosition - this.dist.movement;
        this.slide.classList.add('smooth');
        this.wrapper.removeEventListener('mousemove', this.onMove);
        this.wrapper.removeEventListener('mouseup', this.onEnd);
        this.wrapper.removeEventListener('touchmove', this.onMove);
        this.wrapper.removeEventListener('touchend', this.onEnd);

        setTimeout(() => {
            this.slide.classList.remove('smooth');
        }, 300);
    }

    onWheel(event) {
        const scrollSpeed = 1.5;
        const delta = event.deltaY * scrollSpeed;
        const finalPosition = this.dist.finalPosition - delta;
    
        // Limites
        const maxMove = 0;
        const minMove = -(this.slide.scrollWidth - this.wrapper.offsetWidth);
    
        // Verifica se pode mover
        if (finalPosition <= maxMove && finalPosition >= minMove) {
            event.preventDefault();
            this.moveSlide(finalPosition);
            this.dist.finalPosition = finalPosition;
        }
    }
    

    addSlideEvents() {
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('touchstart', this.onStart);
        this.wrapper.addEventListener('wheel', this.onWheel, { passive: false });
    }

    bindEvent() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.onWheel = this.onWheel.bind(this);
    }

    init() {
        if (this.slide.scrollWidth > this.wrapper.offsetWidth) {
            this.addSlideEvents();
        }
        return this;
    }
}
