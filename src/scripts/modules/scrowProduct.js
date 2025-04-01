export default class ScrowProduct {
    constructor(slide, wrapper){
      this.slide = document.querySelector(slide);
      this.wrapper = document.querySelector(wrapper)  
    }
    
   
    onStart(event){
        event.preventDefault();
        this.wrapper.addEventListener('mousemove', this.onMove);
        console.log('mousedown')
    }
    bindEvent(){
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
       }

    onMove(event){
    console.log('moveu')
    }
    
    addSlideEvents(){
        this.wrapper.addEventListener('mousedown', this.onStart);
      
    }
   
    init(){
        this.bindEvent();
        this.addSlideEvents();
        return this;
    }
}