import slideShow from './modules/slide.js';
import menuShow from './pages/header.js';
import ScrowProduct from  '../scripts/modules/scrowProduct.js';

document.querySelectorAll('.wrapper-product').forEach(wrapper => {
    const slide = wrapper.querySelector('.slide-product');
    if (slide) {
      const scrow = new ScrowProduct(slide, wrapper);
      scrow.init();
    }
  });

// scrowProduct.init()

slideShow();
menuShow();