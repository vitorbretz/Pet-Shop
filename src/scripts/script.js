import slideShow from './modules/slide.js';
import menuShow from './pages/header.js';
import ScrowProduct from  '../scripts/modules/scrowProduct.js';

const scrowProduct = new ScrowProduct('slide-product','.itens-product');

scrowProduct.init();

slideShow();
menuShow();