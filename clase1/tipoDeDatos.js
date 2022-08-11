//TIPO DE DATOS PRIMITIVOS
/*Tipos de datos Number (numeros) 
10
12345
123
*/
let miEdad = 30;

// Con '' declaras un string
let miNombre = "Rafael";

//backticks ´´  La interpolacion es utilizar el valor para crear una nueva expresion o string mas complejo

let nombreCompleto = `<h1>Hola yo soy ${miNombre}</h1> `;

//boolean Sirve para hacer validaciones de si o no
let esMayorDeEdad = true;
let esMenorDeEdad = false;

// tiene un valor definido cuando  inicializamos  una variable
let noEstaDefinido = undefined;

//Es de tipo object , esta vacio
let usuarioLoggeado = null;

// Cannot read property ‘propertyName’ of null/undefined "Erros comun de Js"

//Tipo de dato objeto con ayuda de las llaves = {} tiene propiedades y propiedades dentro de las propiedades
let carro = {
  motor: true,
  color: "negro",
  llantas: 4,
  puertas: 3,
  pasajeros: {
    aldo: {
      edad: 30,
      nombre: "alberto ",
    },
  },
};

//Cuando queremos acceder al objeto y a la propiedad
console.log(carro.color);

// Otra forma de acceder 
console.log( carro['pasajero']['aldo ']['alberto']);

let miniCooper = coche;
miniCooper.motor = 'Electrico';

// Coleccion de datos es un arreglo 
let arreglo =[ 'strings', 10, true, {},[]];

// Los arreglos podemos preguntar cual es el tamaño del arreglo, cuantas frutas estan almacenadas = 3 
let arregloCanastaDeFrutas =['manzanas', 'durazno','uvas' ];
console.log(arregloCanastaDeFrutas.length);         
