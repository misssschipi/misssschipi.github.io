document.addEventListener("DOMContentLoaded", () => {
  const gif = document.getElementById("gif");

  function reproducirSecuencia() {
    gif.src = "assets/hola_1_1.gif";
    setTimeout(() => {
      gif.src = "assets/hola_2.gif";
      setTimeout(() => {
        reproducirSecuencia(); // vuelve a empezar
      }, 2500); // duración del gif2 en ms
    }, 1990); // duración del gif1 en ms
  }

  reproducirSecuencia();
});
