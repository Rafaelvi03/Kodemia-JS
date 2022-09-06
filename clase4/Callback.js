/**
 * Funciones pasadas como argumentos de otras funciones
 * Podemos trabajar con funciones como si fueran  cualquier otro tipo de valoer
 *
 */
function calculadora(num1, num2, callback) {
  return callback(num1, num2); // retornamos la ejecucucion de la funcion que nos estan pasando con los valores que nos estan pasando  // pasamos ese argumento y en algun momento se va ejecutar
}
let suma = (num1, num2) => {
  return num1 + num2;
};

console.log(calculadora(10, 10, suma));

let padre = (hijo1, hijo2, hijo3) => {
  hijo2();
  hijo1();
  hijo3();
};
let fun1 = () => {
  console.log("funcion 1");
};
let fun2 = () => {
  console.log("funcion 2");
};
let fun3 = () => {
  console.log("funcion 3");
};
//Referencia es un espacio en la memoria

//revisar github de Aldo   



function mandarMensajeAlaEx(hacerAlgoRespuesta){ // solicitamos datos a alguien (servidor)

// manda mensaje a nuestra ex's nos va responder o no, y si si, nos va poner un mensaje y con esos datos podemos hacer algo
// responder o ignorarlos
  let callback =() => { 
  let respuesta = 'Yo tambien te extraño'
  if(respuesta!== undefined){
    hacerAlgoRespuesta(respuesta);
  }

};
setTimeout(callback, 5000 )   // recibedos parametros un tiempo  y un callback que le pertenece a SetTimeout      

}
function hacerAlgoRespuesta(respuesta){
  console.log(respuesta) 
  console.log('Bloqueada ALV');
}

mandarMensajeAlaEx(hacerAlgoRespuesta);








// ejemplo  Parsear

const personas = [{
  nombre: 'Rafael' , // propiedades
  edad: 20
},{

  nombre: 'aldo',
  edad: 25
},{}]; //arreglo que tiene adentro personas 

function parsearPersonas ( persona){
  let personasTransformadas = [];
  let cont =0;
  for( let personas of persona){ // pasa los objetos de las personas 

    personasTransformadas[cont]= { nombre: personas.nombre };
    cont++; // el contador lo usa para guardar el valor de personas en posicion 0 vale algo cuando recorre el for pasa a la posicion 1 y vale otra cosa

  }
  return personasTransformadas;
}
console.log(parsearPersonas(personas));

