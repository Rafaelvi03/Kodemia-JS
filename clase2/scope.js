//global

let variableGlobal = 15; // global

function saludar() {
  let variableLocal = 10; //scope local

  console.log(variableLocal, variableGlobal); // 10, 15
}
saludar();

console.log(variableGlobal, variableLocal); //scope global -> aqui tronaria por que Local solo funciona en la funcion saludar
