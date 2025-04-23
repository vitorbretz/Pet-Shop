export default function openMenu() {
    const abrirBtn = document.querySelector("#open-loguin");
    const fecharBtn = document.querySelector(".x-btn");
    const loguin = document.querySelector(".conteiner-loguin");
  
    if (!abrirBtn || !fecharBtn || !loguin) return;

    // Abrir o container de login
    abrirBtn.addEventListener("click", () => {
        loguin.classList.add("ativo");
        loguin.style.opacity = '1'; // Assegura que a opacidade esteja visível ao abrir
    });
  
    // Fechar o container de login
    fecharBtn.addEventListener("click", () => {
        loguin.classList.remove("ativo");
        loguin.style.opacity = '0'; // Opcional: pode adicionar uma transição de opacidade se desejar
    });

    // Fechar o container ao clicar fora
    window.addEventListener('click', (event) => {
        if (!loguin.contains(event.target) && !abrirBtn.contains(event.target)) {
            loguin.classList.remove("ativo");
            loguin.style.opacity = '0'; // Opacidade zero quando fechado
        }
    });
}
