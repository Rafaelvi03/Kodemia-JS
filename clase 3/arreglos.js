let frutas = []; //inicializar arreglo vacio de frutas
let indice = 0; // En la posicion cero
// declaras funcion

function comprarFrutas(nombreFruta) {
  frutas[indice] = nombreFruta; //
  indice++;
}
comprarFrutas("manzana");
comprarFrutas("melon");
comprarFrutas("sandia");
comprarFrutas("cereza");
console.log(frutas);

//asignarle posiciones que nosotros queramoos
frutas[0] = "fruta 1";
frutas[1] = "fruta 2";
frutas[2] = "fruta 3";
frutas[3] = "fruta 4";
frutas[4] = "false ";
frutas[5] = "true 1";

let nombre = "rafael";
console.log(nombre.length);
console.log(frutas[frutas.length - 1]); //obtener la longitud de la ultima posicion del arreglo

//pregunta de entrevista 
let frutas=[1,2,3];
console.log(frutas[length]) // da el resultado undefine 


//Arreglo const = Siempre va almacenar una posicion de memoria 

const arreglo = [1,2,3];
arreglo[0] = 'String';



const verduras = new Array(2); // Genera un arreglo de dos posiciones vacio
console.log(verduras);

// clase aldo 
let frutas = []; // inicializar el arreglo con un arreglo vacio
let indice = 0;

frutas[0] = 'fruta1';
frutas[0] = 'frutassss';
frutas[1] = 'fruta2'
frutas[2] = 'fruta3';

frutas[4] = true;
frutas[5] = false;

console.log(frutas);

function comprarFrutas(nombreFruta) {
    frutas[indice] = nombreFruta;
    indice++;
}

let nombre = 'aldo';
true && true
console.log(nombre.length);
// pregunta de entrevista tecnica JR
let frutas = [1,2,3];
console.log(frutas[frutas.length]);//undefined

console.log(frutas[frutas.length - 1]);

comprarFrutas('manzana');
comprarFrutas('fresa');
comprarFrutas('platano');
comprarFrutas('cereza');

console.log(frutas);

const arreglo = [1,2,3];
arreglo[0] = 'String';

const verduras = new Array(2);

console.log(verduras);

