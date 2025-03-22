export default function menuShow(){
const btnBurguer = document.querySelector('.btn-burguer')
btnBurguer.addEventListener('click', ToggleEvent);
function ToggleEvent(){
  btnBurguer.classList.toggle('active-menu')
}  
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item-menu");

  items.forEach((item, index) => {
      setTimeout(() => {
          item.classList.add("show");
      }, index * 200); // 200ms de diferença entre cada item
  });
});
}