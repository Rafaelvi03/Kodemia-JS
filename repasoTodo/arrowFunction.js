// Que necesito
/*Formas de generar funciones de forma corta

=> Esta significa que estas haciendo una arrow funcion 
*/
// funcion Normal 
let correrF (){
    return''
}


let correr = () =>{
// podemos agregar return , pero no es obligatorio ,// aqui el return  implicito para generarlo es sin llaves 
}

//ejemplo
let correr = () => '' 


//Ejemplo suma
function sumar(numero1, numero2){
    return numero1 + numero2;

}
let suma = (10,10);
console.log(suma)

//ejemplo suma arrowFuction
let sumarTwo = (numero1, numero2) => numero1 + numero2;
let sumaTwo = sumarTwo(10,10);
console.log(sumaTwo)

//ejemplo concatenar
let concatenar = (palabra1, palabra2)=> palabra1 +  palabra2;
let palabras = concatenar('Hola', 'Tqm')
console.log(palabras)

// ejemplo suma y suma un tercer numero declarado
let sumarTrees = (numero1, numero2) => {
const PI = 3.1416;
let resultado = numero1 +numero2 +PI 
return resultado;
}

let resultado= sumarTrees(25,30);
console.log(resultado)

//8.
let saludar = ()=> 'Hola Koder'
console.log(saludar())

//9.
let operacionMatematica = (operacion, numero1, numero2) => {
    let resultados;
 if(operacion === 'suma'){
    resultados = numero1 + numero2
 }else if( operacion === 'resta'){
    resultados = numero1 - numero2; 
 }else {
        resultados = numero1 * numero2; 
 } 
 return resultados
}
let resultados = operacionMatematica()
let resultadoSuma = operacionMatematica ('suma',10,10)
let resultadoResta = operacionMatematica ('resta',10,10)
let resultadoMultiplicacion = operacionMatematica ('multiplicacion ',10,10)
console.log(resultadoSuma, resultadoResta, resultadoMultiplicacion)

/*generar una función que me retorne un objeto literal con las siguientes propiedades(nombre, edad, genero, dirección), 
la propiedad nombre debe ser un objeto que tenga las siguientes propiedades(nombre, apellidoPaterno y apellidoMaterno)*/

let  objetoLiteral = () => {
    let persona = {
        nombre:{
            apellidoPaterno: 'Villaseñor',
            apellidoMaterno: 'Reyes',
        }, 
        edad: 24,
        genero: 'masculino',    
        direccion: 'Tlahuac',
    }
  return persona
}
console.log(objetoLiteral())

//11.generar una función que me retorne un arreglo que contenga los nombres de los koders de la generación 21 
 let retornoLista =()=>  ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 
 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie'];
 console.log(retornoLista())

//12.- generar una función que imprima el nombre de un koder en particular si es que existe en la lista si 
// no existe imprimir el mensaje 'Ese alumno no pertenece a esta generación'

let lista =  ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 
'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie'];

let imprimirKoders = (nombre) =>{
    for (let i of lista) {
        if (i === nombre){
            return i;
    }
}
    for (let i of lista) {
        if (i != nombre){
            return 'No existe';
    }
}
}
console.log((imprimirKoders('Rafa')));
