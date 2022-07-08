//Permite mostrar el menú lateral del header en dispositivos moviles

let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});



/* Permite el funcionamiento del carrusel Pollos  */
const carrusel = document.querySelector("#carrusel-combos");
const flechaIzq = document.querySelector("#flechaIzquierda");
const flechaDer = document.querySelector("#flechaDerecha");
flechaDer.addEventListener("click", () => {
  carrusel.scrollLeft += carrusel.offsetWidth;
});
flechaIzq.addEventListener("click", () => {
  carrusel.scrollLeft -= carrusel.offsetWidth;
});
/*<<<<<<<<<<<<<------>>>>>>>>>>  */

/* Permite el funcionamiento del carrusel sandwiches */
const carrusel2 = document.querySelector("#carrusel-combos2");
const flechaIzq2 = document.querySelector("#flechaIzquierda2");
const flechaDer2 = document.querySelector("#flechaDerecha2");
flechaDer2.addEventListener("click", () => {
  console.log("entro");
  carrusel2.scrollLeft += carrusel.offsetWidth;
});
flechaIzq2.addEventListener("click", () => {
  carrusel2.scrollLeft -= carrusel.offsetWidth;
});
/*<<<<<<<<<<<<<------>>>>>>>>>>  */


