import slideShow from './modules/slide.js';
import menuShow from './pages/header.js';
import ScrowProduct from  '../scripts/modules/scrowProduct.js';
import initScrollSuave from './modules/scrollSuave.js';
import initAnimationScroll from './modules/animationsScrow.js';
import showPassword from './modules/showPassword.js';
import openMenu from './modules/openMenu.js';


document.querySelectorAll('.wrapper-product').forEach(wrapper => {
    const slide = wrapper.querySelector('.slide-product');
    if (slide) {
      const scrow = new ScrowProduct(slide, wrapper);
      scrow.init();
    }
  });



slideShow();
menuShow();
initScrollSuave();
initAnimationScroll();
showPassword();
openMenu();
