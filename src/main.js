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
  carrusel2.scrollLeft += carrusel.offsetWidth;
});
flechaIzq2.addEventListener("click", () => {
  carrusel2.scrollLeft -= carrusel.offsetWidth;
});
/*<<<<<<<<<<<<<------>>>>>>>>>>  */

/* Permite el funcionamiento del carrusel especialess */
const carrusel3 = document.querySelector("#carrusel-combos3");
const flechaIzq3 = document.querySelector("#flechaIzquierda3");
const flechaDer3 = document.querySelector("#flechaDerecha3");
flechaDer3.addEventListener("click", () => {
  carrusel3.scrollLeft += carrusel.offsetWidth;
});
flechaIzq3.addEventListener("click", () => {
  carrusel3.scrollLeft -= carrusel.offsetWidth;
});
/*<<<<<<<<<<<<<------>>>>>>>>>>  */

/* Permite el funcionamiento del carrusel especialess */


if(document.querySelector('#container-slider')){
  setInterval('fntExecuteSlide("next")',5000);
}
//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function(link) {
     link.addEventListener('click', function(e){
        e.preventDefault();
        let item = this.getAttribute('itlist');
        let arrItem = item.split("_");
        fntExecuteSlide(arrItem[1]);
        return false;
     });
   });
}

function fntExecuteSlide(side){
   let parentTarget = document.getElementById('slider');
   let elements = parentTarget.getElementsByTagName('li');
   let curElement, nextElement;

   for(var i=0; i<elements.length;i++){

       if(elements[i].style.opacity==1){
           curElement = i;
           break;
       }
   }
   if(side == 'prev' || side == 'next'){

       if(side=="prev"){
           nextElement = (curElement == 0)?elements.length -1:curElement -1;
       }else{
           nextElement = (curElement == elements.length -1)?0:curElement +1;
       }
   }else{
       nextElement = side;
       side = (curElement > nextElement)?'prev':'next';

   }
   //RESALTA LOS PUNTOS
   let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
   elementSel[curElement].classList.remove("item-select-slid");
   elementSel[nextElement].classList.add("item-select-slid");
   elements[curElement].style.opacity=0;
   elements[curElement].style.zIndex =0;
   elements[nextElement].style.opacity=1;
   elements[nextElement].style.zIndex =1;
}
