
//declaracion de la funcion 
function saludo(nombre ) {
return  `Hola ${nombre}, bienvenid@ a kodemia`
}
// ejecuto la funcion 
const resultado = nombre('Rafael')
console.log(resultado)




// funciones anonimas 
const sum = function (num1 , num2){
    return num1+ num2;
}
console.log(sum(10,16));


// arrow function
// para1, param2 --- paramN9 => {
    // cuerpo de la funcion
//}


const resta = (num1, num2) =>{
    return num1 -num2
}
resta (110,5)

// Si las arrow function recibe un unico parametro, podemos omitir los parentesis

const formatted = word =>{
    return word.toLowerCase()
}


//cuando recibamos mas de un parametro es necesario colocar los parentesis 

const sumar = (num1,num2, num3)=>{

}


// return implicito
/*
Solo aplica a los arrow function 
Si lo que esta ejecutando mi funcion se puede reducir
a una sola linea, podemos omitir las llaves y el return 
*/

const resta22 = (num1, num2)=> num1-num2

