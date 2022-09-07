/*
Funciones:
fuction nombre de la funcion  (parametros){
Cuerpo de la funcion
Puede ir n cantidad e intrucciones 
}
nombre de la funcion (ejecucion //   que son parametros pero aqui son argumentos )
¿Que va resolver? suma
¿Que necesito? numeros     
*/

//declaracion de funcion 
function imprimirNombre(nombre){
    console.log('mi nombre es '+ nombre);
}
imprimirNombre('Rafa');


//ejemplo
function hacerGelatina(sabor, forma){
    return `esta es la gelatina de ${sabor} y con forma ${forma}`;
}

let gelatinaIsra = hacerGelatina('jerez','gato');
let gelatinaRafa = hacerGelatina ('fresa', 'redonda')
