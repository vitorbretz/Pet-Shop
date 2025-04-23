export default function openMenu() {
    const abrirBtn = document.querySelector("#open-loguin");
    const fecharBtn = document.querySelector(".x-btn");
    const loguin = document.querySelector(".conteiner-loguin");
  
    if (!abrirBtn || !fecharBtn || !loguin) return;
  
    abrirBtn.addEventListener("click", () => {
      loguin.classList.add("ativo");
    });
  
    fecharBtn.addEventListener("click", () => {
      loguin.classList.remove("ativo");
    });
  }
  
