export default function menuShow(){
const btnBurguer = document.querySelector('.btn-burguer');
const menu = document.querySelector('#nav');
btnBurguer.addEventListener('click', ToggleEvent);
function ToggleEvent(){
  menu.classList.toggle('active-menu')
}  

}