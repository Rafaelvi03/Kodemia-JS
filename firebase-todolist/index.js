import { saveTask } from "./firebase.js"; // importo la funcion SaveTask
// Obtener datos de mi interfaz
const buttom = document.querySelector('#button');
buttom.addEventListener('click',(event) =>{ // addEvent te permite escuchar los eventos que estan escuchando alguien (usuario)
event.preventDefault();
const titulo = document.querySelector('#titulo').value;
const descripcion = document.querySelector('#descripcion').value;
saveTask(titulo,descripcion)
})


