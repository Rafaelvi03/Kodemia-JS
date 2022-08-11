//Operadore de asignacion '='
let variable = 'valor';

//Operadores aritmeticos
+ - * / % **
++ --


// Concatenacion aldo aldaco "cuidado"
let var1 = 'aldo';
let var2 = 'aldaco';
console.log (var1 +  var2);

let var1 = '1';
let var2 = '1'; 
// Juntaria un 11 por que son diferentes variables 

//operador suma
let num1 = 10;
let num2= 10;
    console.log(num1+num2);

//Operador resta 
let numero1 = 10;
let numero2 = 10;
console.log(numero1-numero2);

//operador multiplicacion 
let numero1 = -10;
let numero2 = 10;
console.log(10*10);

//operador de division
let numero1 = 10;
let numero2 = 2;
console.log(num1/num2);
//suma resta multiplicacion division -> operaciones Binarios


//exponenciacion ** Calcular la potencia 
// Math.pow es una variable global para sacar la potencia  
console.log(num1**num2);
// modulo % residuo de la division 
console.log(num1 % num2);

// incremento ++ Operacion unario, solo necesita de un operador , incrementa 1 sola vez

console.log(++numero1); // Aqui sigue valiendo 10
console.log(numero1 ++) // Aqui se incrementa vale 11
//decremental --
console.log(--numero1); // Aqui sigue valiendo 10
console.log(numero1 --) // Aqui se incrementa vale 9


//OPERADORES LOGICOS 
//NOS AYUDAN A VALIDAR N VARIABLES TIPO DE DATOS BOOLEAN
let logueado = null;
let tieneTDC = true;

 //operador logico and &&  con que uno sea falso, todo es falso 
console.log (logueado && tieneTDC);

//BUSCAR type coercion

//Operador || OR  con que uno es              


// >=
console.log(10 >= 5);  //true 
console.log(10 >= 11);  //false

//<=
console.log(10 <= 5);  //false
console.log(10 <= 11);  //true

// > mayor que
console.log (10 > 11); // false

// < menor que 
console.log(10<11); // true

// Normal compara valores  ==
let carro1 ={}; // las variables que son de tipo objeto almacenan referencias  (direccion en memoria) 
let carro = {};

console.log(carro1 == carro2); // false

/// Otro ejemplo 

let carro1 = ' mercerdez'
let carro2 = ' audi'   
console.log(carro1 == carro2); // false// Nos daria false 

//Otro ejemplo
let carro1 = ' mercerdez'
let carro2 = ' mercedes'   
console.log(carro1 == carro2); // true 

// Estrictamente igual al mismo valor y tipo ===    
clet carro1 = '1'
let carro2 = 1   
console.log(carro1 === carro2); // type cohersion          