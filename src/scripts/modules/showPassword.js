export default function showPassword() {
    const eyesButton = document.querySelector(".eyes");
    const inputPassword = document.querySelector('#senha');
    eyesButton.addEventListener('click',verificador)
    function verificador(){
      if (inputPassword.type === "password") {
        inputPassword.type = "text";
      } else {
        inputPassword.type = "password";
      }
    }
}