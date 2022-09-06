//Funciones agrupan sentencias, para no volver a repetir codigo

//declarativa

//concatenar
//backticks ``
// Parametros cuando se declaro la funcion
function generarNombreCompleto(texto1, texto2) {
  //Parametros (texto1, texto2)
  // console.log(texto1 + ' ' + texto2);
  console.log(`${texto1} ${texto2}`);
}
let nombre = "Rafael";
let apellido = "Villasenor";
generarNombreCompleto(nombre, apellido); //ejecucion de mi funcion
// Cuando se ejecuta la funcion se conocen como argumentos (nombre, apellido)
nombre = "Juan ";
apellido = "V";
generarNombreCompleto(nombre, apellido);
nombre = "Raul ";
apellido = "Villa";
generarNombreCompleto(nombre, apellido);

//expresion no tienen nombre 
let expresion = function(){
    return true;
}


// Ejercicio de multplicar 
function multiplicar(numero1, numero2) {
  let resultado = numero1 * numero2;
  console.log(resultado);
  console.log(`El resultado de la multplicacion es : ${resultado}`);
return resultado; // Return  Cuando se ejecuta el parametro, lo expulsa y sale resultado  y se puede cachar en cualquier otro lado 
};
multiplicar(19, 5);
let multplicacion = multiplicar (19, 5) // Despues de que salga el return de multiplicar lo cachamos en multiplicacion con el = lo asigna         

// Otro ejemplo  de cual es mayotr
function esMayor (numero){
    return numero > 5;
}
if(esMayorQue(10)=== true){
    console.log('es mayor que 5');
 }
// return nos retorna un valor 
// Tambien le sirve a Js para que sirva que ahi se deja de ejecutar  return; (salida de emergencia)


// Otro ejemplo EXPRESION   

function discoteca(edad){
    if (edad <18){
        return;
    }else{
        console.log('Que baile');
    }
}
discoteca(15);
discoteca(18);




let arrowFunction = () =>{
// Una especie de funcion con caracteristicas Scope, si recibes un parametro lo puedes omitir, no tiene estado
//investigarlas  y sus diferencias 
};




//DIFERENCIA ENTRE METODO Y FUNCION
// un metodo le pertenece a un objeto 
//Programacion dinamica
let objeto  ={

    saludar:function(){ // metodo
        console.log('HOLA');
    }
};
objeto['saluda']();

