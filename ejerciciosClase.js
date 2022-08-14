//Generar un programa en JV si un numero es mayor que otro
//Declarar dos variables
//Declarar una variable donde este el resultado

let numeroUno = 5;
let numeroDos = 10;
if (numeroUno >= numeroDos) {
  console.log("El numero mayor es: " + numeroUno, "numero uno");
} else if (numeroUno < numeroDos) {
  console.log("El  numero mayor es: " + numeroDos, "numero dos ");
} else {
  console.log("El numero dos es igual que numero uno:");
}

//ejercicio1
function sumar(numero1, numero2) {
  let resultado = numero1 + numero2;
  console.log(resultado);
  return;
}
sumar(5, 10);
sumar(15, 20);
sumar(100, 50);

function saludo(nombre = "amigo") {
  console.log("Hola koders" + " " + nombre);
}
saludo("Rafael");

// Ejercicio 1 Tarea

let variableGlobal = 10;

function alterar() {
  variableGlobal = --variableGlobal;
  console.log(variableGlobal);
  return;
}
alterar();


//ejercicio 2 Tarea

function num(numero){
  let variableResultado;
  if(numero % 2 == 0){
    variableResultado = true;
  }else{
    variableResultado = false;
  }
  return variableResultado;
}
console.log(num(5));
console.log(num(2));

//Tarea Fin De semana




