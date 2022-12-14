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

//13. 13.- generar una función que genere un arreglo a partir de una cadena de texto por ejemplo:
	// let arreglo = generarArreglo('hola'); 
	//console.log(arreglo) // ['h', 'o', 'l', 'a']

    let  generarArreglo  = (string)=> string.split('')
    let arreglo = generarArreglo('hola')
   console.log( arreglo)
/*14.- generar una función que sume todos los números que están dentro de una lista de números, por ejemplo

	let suma = sumarElementos([1,2,3,4,5]); 
	console.log(suma) 
*/
const listaNumeros = [1, 2, 3, 4];
let  sumar = (valor1, valor2) => valor1 + valor2;
console.log(listaNumeros.reduce(sumar));

/*15.- generar una función que quite todos los números que sean mayores al numero 10 de una lista de números, por ejemplo

	let nuevoArreglo = limpiarArreglo([11,12,3,4,15,5,8,10,20,1,2]); 
	console.log(nuevoArreglo) // [3,4,5,8,10,1,2]*/
  
 

|









/*16.- generar una función que imprima el numero de día de la semana según el día que reciba, por ejemplo 

	recibimos 'lunes' entonces imprimira 0 
	recibimos 'martes' entonces imprimira 1 
	recibimos 'miércoles' entonces imprimira 2 
	recibimos 'jueves' entonces imprimira 3 
	recibimos 'viernes' entonces imprimira 4
	recibimos 'sábado' entonces imprimira 5
	recibimos 'domingo' entonces imprimira 6  */
let impresionDeDias = (dia)=> {
    if (dia == 'lunes'){
      console.log(0);
    }else if (dia== 'martes'){
      console.log(1);
    }else if(dia == 'miercoles'){
      console.log(2);
    }else if(dia == 'jueves'){
      console.log(3);
    }else if (dia == 'viernes'){
      console.log(4);
    }else if (dia == 'sabado'){
      console.log(5);
    }else if (dia == 'domingo'){
      console.log(6);
    }
  }
  impresionDeDias('jueves')