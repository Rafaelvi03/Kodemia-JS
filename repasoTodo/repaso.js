/*
Se hace referencia a un lugar de memoria , existen tipos de datos primitivos y tipo de datos de objeto */
// Declaracion de variables
let nombre;
//Inicializacion
nombre = "Rafael"; // string

let numero = 10; // numero

let esHombre = true; // boleano

let usuario = undefined; // undefine significa que no tiene ningun valor definido

let auto = null; // Esta vacio

/*TypeOf es un operardor unario que permite saber el valor de una variable */

let tipoDato = typeof nombre; // almacenas en tipoDato lo que contiene typeof nombre;
console.log(tipoDato);

// declaracion de un Objeto, los objetos son coleeciones de valores, tiene llave(nombre) y valor(cualquier tipo de dato)
let fruta = {
  color: "rojo",
  sabor: "acido",
  precio: 97,
  hermana: {
    // una propieda que esta adentro del objeto fruta
    color: "amarilla",
    sabor: "dulce",
    precio: 110,
    hermana: {
      // una propieda que esta adentro del objeto fruta
      color: "azul",
      sabor: "agridulce",
      precio: 120,
      hermana: {
        // una propieda que esta adentro del objeto fruta
        color: "verde",
        sabor: "dulce",
        precio: 10,
        hermana: {
          // una propieda que esta adentro del objeto fruta
          color: "rosa",
          sabor: "dulce",
          precio: 80,
        },
      },
    },
  },
  meses: ["enero", "febrero"],
};

//forma Estatica // accedemos a los objetos
console.log(fruta.hermana.hermana.hermana.hermana.precio); // buscas la 4ta hermana su precio $80

// acedemmos a los arreglos
let mesesDeCosecha = fruta.meses; // Traes el arreglo de los meses
mesesDeCosecha[0]; // aqui entras a Enero, primera posicion de tu arreglo, dentro del objeto
mesesDeCosecha[1]; // febrero

const PI = 3.1416;

//Operadores
let resultadoSuma = 10 + 10; // sumar valores numericos
console.log(resultadoSuma);

let concatenacion = "rafa" + " villasenor"; // Concatenar

console.log(concatenacion);

//Operador de suma
let prueba = "5" + 5; //type cohersion (concatena el string con el numero ) //Implicito cuando lo hace JS por nosotros
let prueba2 = Number("5") + 5; //conversion explicita
console.log(prueba);
console.log(prueba2);

//Operador de Resta
let resta = 5 - 5;
let resta2 = 5 - "5";
let resta3 = "5" - "5";
console.log(resta, resta2, resta3);

//Potencia
let potencia = 5 ** 2;
// Division
let division = 10 / 2;
//multiplicacion
let multiplicacion = 10 * 2;

console.log(potencia, division, multiplicacion);

// operadores logicos && ,|| >=, <=, == , ===

//estructuras de control
/* 
if( condicion){
}
En la condicion controla lo que tu quieras que pase
*/

// ejemplo1:

let esHumano = true;
if (esHumano === true) {
  console.log("Rafa es humano ");
}
//ejemplo2: if/else
let usuarioMayor = 17;
if (usuarioMayor >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

//ejemplo 3
let usuarioMayor2 = 16;
if (usuarioMayor2 >= 18) {
  console.log("Es mayor de edad");
} else if (usuarioMayor2 >= 0) {
  console.log("Es adulto mayor ");
} else {
  console.log("Es menor de edad");
}

//Switch
//Regularmente Switch se usan con strings
// ejemplo1: Mala practica
let usuarioMayor3;
switch (true) {
  case usuarioMayor3 >= 18:
    console.log("Es mayor de edad");
    break;
  case usuarioMayor3 >= 30:
    console.log("Es un adulto mayor");
    break;
  default:
    console.log("Es menor de edad");
}

//ejemplo 2
let string = "adios";
switch (string) {
  case "adios":
    console.log("Es la despedida");
    break;
  case "hola":
    console.log("Hola mundo");
    break;
  default:
    console.log("Es menor de edad");
}

//CICLOS 
/*WHILE:
Nos va ayudar a ejecutar el codigo siempre y cuando la condicion se cumpla 
-> accion infinita */

let usuarioMayor4 = 19;
while(usuarioMayor4 > 18 && usuarioMayor4 <30){
    console.log('Es mayor de edad')
    usuarioMayor4++;
}

//FOR 
/*
for(valor inicial; condicion donde se detenga; control (incremental, decrementar)  
  */
 
let annie =19;
for(let annie = 18; annie <30; annie++){
    console.log('Annie es mayor de edad', annie)
}
ny    8i.4bju g
// Buscar for of, for in 
