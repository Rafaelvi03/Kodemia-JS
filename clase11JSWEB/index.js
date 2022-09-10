// creo un variable = entro con document . y con el querySelector escogo el nodo ('input')
const input = document.querySelector('input');

input.addEventListener('keypress',(event)=>{
const key= event.key;
const value = input.value;
console.log(`Alguien presiono la tecla ${key}, y el  valor input se actualizo a : ${value}`)
 })