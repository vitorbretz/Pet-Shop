export default function openMenu() {
    const abrirBtn = document.querySelector("#open-loguin");
    const fecharBtn = document.querySelector(".x-btn");
    const loguin = document.querySelector(".conteiner-loguin");
    
  
    if (!abrirBtn || !fecharBtn || !loguin) return;

    
    abrirBtn.addEventListener("click", () => {
        loguin.classList.add("ativo");
        loguin.style.opacity = '1'; 
    });
  
    
    fecharBtn.addEventListener("click", () => {
        loguin.classList.remove("ativo");
        loguin.style.opacity = '0'; 
    });

    
    window.addEventListener('click', (event) => {
        if (!loguin.contains(event.target) && !abrirBtn.contains(event.target)) {
            loguin.classList.remove("ativo");
            loguin.style.opacity = '0'; 
        }
    });
}
