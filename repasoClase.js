
// como acceder a un objeto
const obj = {
    edad :10,  //objeto  generico
    imprimirEdad: fuction(){   // metodo  
        console.log(edad);
    }
}


obj.edad    

// funciones
//declarativa
function carro(parametro ){

}
//expresion
let auto = fuction (){

}

// ejemplo 
function suma( numero1, numero2){ // referencia cuando pasas en los parametros 
    let resultado = numero1 +numero2;
    return resultado;
}
//ejecutas una funcion y le pasas los argumentos que son los parametros 
suma(10,10 )

/*fuction nombre de la funcion  (parametros){
Cuerpo de la funcion
Puede ir n cantidad e intrucciones 
}
nombre de la funcion (ejecucion //   que son parametros pero aqui son argumentos )
*/

bmw => Carro => Object 



// repaso de una funcion 
function areaDelCuadrado(valor1, valor2){

    let area = valor1 *valor2;
    return area;
} 
console.log(areaDelCuadrado(10,20))


// repaso de un Objeto constructor
function Carro(puertas, color, electrico = true, acelerar  ){
    this. puertas =puertas;         
    this.color= color;
    this.electrico = electrico ;
    this.acelerar = acelerar;
        }
    let miniCooper = new Carro(4,'azul',true, () => {console.log('No entiendo callbacks')})
console.log(miniCooper)


//IFFE
// Las IIFE sirven para decirle  a node que ejecute ese codigo // exprsion de funcion invocada inmediatamente 
(function (){
    console.log('ALV)
})

// funciones de expresion  no tienen nombre 
let miFuncion   =function(){
    console.log('ALV')
}


let nombre = 'Aldo';
//scope global piso 2
(function() {
    //scope local
    let nombre = 'Juan'
    console.log(nombre);

    // piso 1
})();
// piso 2
console.log(nombre)
// lo que declares en el documento, lo puedes usar en todo lo que quieras, lo que declares adentro de las llaves solo se usa asi










