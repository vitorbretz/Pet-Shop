export default class ScrowProduct {
    constructor(slide, wrapper) {
        this.slide = slide;
        this.wrapper = wrapper;
        this.dist = { finalPosition: 0, startX: 0, movement: 0 };
        this.bindEvent();
      }

    moveSlide(distX) {
    const maxMove = 0; // Define um limite máximo (ex: primeira posição)
    const minMove = -(this.slide.scrollWidth - this.wrapper.offsetWidth); // Limite mínimo baseado no tamanho do conteúdo

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
        this.wrapper.removeEventListener('mousemove', this.onMove);
        this.wrapper.removeEventListener('mouseup', this.onEnd);
        this.wrapper.removeEventListener('touchmove', this.onMove);
        this.wrapper.removeEventListener('touchend', this.onEnd);
    }

    addSlideEvents() {
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('touchstart', this.onStart);
    }

    bindEvent() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    init() {
        this.addSlideEvents();
        return this;
    }
}
