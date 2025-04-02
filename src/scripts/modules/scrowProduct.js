export default class ScrowProduct {
    constructor(slide, wrapper){
      this.slide = document.querySelector(slide);
      this.wrapper = document.querySelector(wrapper) ;
      this.dist = {
        finalPosition: 0,
        startX: 0,
        movement: 0
      } 
    }
    moveSlide(distX) {
        this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
    }
    updatePostion(clientX){
        this.dist.movement = this.dist.startX - clientX;
        return this.dist.movement;
    }
   
    onStart(event){
        event.preventDefault();
        this.dist.startX = event.clientX;
        
        this.wrapper.addEventListener('mousemove', this.onMove);
        
    }
    bindEvent(){
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this)
       }

    onMove(event){
        const finalPosition = this.updatePostion(event.clientX);
        this.moveSlide(finalPosition)
        
    }
    onEnd(event){
        this.wrapper.removeEventListener('mousemove', this.onMove)
        
    }
    
    addSlideEvents(){
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('mouseup', this.onEnd);
      
    }
   
    init(){
        this.bindEvent();
        this.addSlideEvents();
        return this;
    }
}