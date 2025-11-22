const imagenes = [
  "assets/hola_1_1.gif",
  "assets/hola_2.gif",
  "assets/ochocaras_1_1.gif",
  "assets/ochocaras_2.gif",
  "assets/ochocaras_3.gif",
  "assets/protopix1.gif",
  "assets/protopix2.gif",
  "assets/protopix3.gif",
  "assets/protopix4.gif",
  "assets/fronteraviva.gif",
  "assets/encuentro_3.gif",
  
];

const preloads = [];

imagenes.forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = () => console.log("Cargada:", src);
  img.onerror = () => console.log("ERROR al cargar:", src);

  preloads.push(img);
});

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
