export default class ScrollStaggerReveal {
    constructor(selector, activeClass = 'ativo', delay = 200, threshold = 0.75) {
      this.items = document.querySelectorAll(selector);
      this.activeClass = activeClass;
      this.delay = delay;
      this.threshold = window.innerHeight * threshold;
      this.activated = false;
  
      this.handleScroll = this.handleScroll.bind(this);
    }
  
    revealItemsSequentially() {
      this.items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add(this.activeClass);
        }, index * this.delay);
      });
    }
  
    handleScroll() {
      if (!this.activated && this.items.length > 0) {
        const firstItemTop = this.items[0].getBoundingClientRect().top;
  
        if (firstItemTop < this.threshold && firstItemTop > 0) {
          this.revealItemsSequentially();
          this.activated = true;
        }
      }
    }
  
    init() {
      if (this.items.length) {
        this.handleScroll(); // ativa no carregamento
        window.addEventListener('scroll', this.handleScroll);
      }
      return this;
    }
  }
  