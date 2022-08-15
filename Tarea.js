// Ejercicio 1: Crea una funcion que reciba un arreglo  y lo regrese en orden invertido

const invertirArray = () => {
  // arrowFuction
  let array = [1, 2, 3, 4, 5]; //declaramos array
  let largo = array.length - 1; // hacemos que el array empiece desde la ultima posicion
  for (let i = 0; i < array.length; i++) {
    const element = array[largo]; // Este lo pinta array = 1,2,3,4,5  largo [invierta ]
    largo--;
    console.log(element);
  }
};
invertirArray();

//Ejercicio 2 Crea una funcion que reciba una array de numeros || y devuelva el valor mas grande que se encuentre en el arreglo

const numerosArray = () => {
  let arrayn = [100, 25, 3, 4]; // declaramos el array
  let numMayor = 0;
  for (
    i = 0; i < arrayn.length; i++) // recorremos el arreglo
    if (arrayn[i] > numMayor) {
      // Si lo que hay en el arreglo [nuestro indice ] > mayor que numMayor
      numMayor = arrayn[i]; // numMayor es igual a lo que hay en nuestro array, nuestro indice
      console.log(numMayor);
    }
};

numerosArray();

// Ejercicio 3 Crea una funcion que reciba un arreglo que pueda contar cuanto elementos de un arreglo sean mayores  a X valor dado en los parametros
const elemtosMayoresArray = (num = 40) => {
  // damos a X un parametro que es 40
  let array = [20, 60, 30, 70]; // declaramos un array
  for (
    let i = 0; i < array.length; i++) // recorremos el array
    if (array[i] > num) {
      // Si el array(de lo que recorre mi indice ) >de lo que asignamos a  num  que es el parametro
      console.log(' Los elementos mayores al valor X en los parametros son : '+' '+ array[i])   // imprimir
    }
};
elemtosMayoresArray();

// Ejercicio 4  Crea una funcion que reciba un arreglo de numeros y reciba un arreglo de numeros y regrese la lista de numeros pares que se encuentren en el arreglo

const numerosPares = () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log('Los numeros pares son: ' +' '+ array[i]);
    }
  }
};
numerosPares();

// Ejercicio 5: Crea una funcion que pueda contar cuantas veces aparece un elemeto dado en los parametros en un arreglo tambien dado en los parametros
// falta guardarlo en una variable para que diga num se repitio
const elementoRepetido = (num = 2) => {
  let array = [2, 2, 2, 2, 4, 5, 6, 7];
  let resultado = 0;
  for (i = 0; i < array.length; i++)
    if (array[i] === num) {
      console.log("Los numeros repetidos son " + array[i]);
    }
};
elementoRepetido();

//Ejercicio 6  Crea una funcion que recibe un arreglo de string la funcion devuelve true si ese string
// se encuentra en el arreglo y false si no se encuentra
const arregloString = () => {
  let array = ["rafael"];
  //let nombre ='rafael'; // aqui da True
  let nombre = "aldo"; // Aqui da False
  for (i = 0; i < array.length; i++)
    if (array[i] != nombre) {
      resultado = array[i] = false;
      console.log(resultado);
    } else if (nombre === array[i]) resultado = nombre = true;
  console.log(resultado);
};

arregloString();

// Ejercicio 7 Crea una funcion que parta un arreglo por la mitad y retorne la mitad del arreglo

const mitadArreglo = () => {
  let array = [1, 2, 3, 4, 5, 6];
for ( i =0; i < array.length; i++){
  console.log('arreglo completo : '+ ' ' + array)
  for (i=3; i<array.length; i++){
    console.log( 'mitad del arreglo: '+' '+ array[i])
  }
}
};

 mitadArreglo();

 // ejercicio 8: Crea una funcion que recibe 3 arreglos, los concatena y retorna un solo arreglo 
 // Incompleto 

  const Onearreglo = () =>{
    let arrayUno = [1,2,3];
    let arrayDos = [4,5,6];
    let arrayTres = [7,8,9,10];
    // Hice varias soluciones pero no me salieron 
    console.log(arrayUno +' '+arrayDos+' '+arrayTres)
    }
  Onearreglo ();

  // Otra solucion del ejercicio 8 con ayuda de .contac()
  const Onearray = () =>{
    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [7, 8, 9];
    
    const numbers = num1.concat(num2, num3);
    console.log(numbers);
    }
  Onearray ();


  // Ejercicio 9 Serie Fibunnaci Crea una funcion que pueda generar 'n' elementos de la serie fibunacci donde 'n' esta dado por argumento de la funcion 

  const  fibonacci =  (elementos = 10) => {
    let fibo =[0,1]; // valores iniciales por default 
    for(i =2; i < elementos; i++){ // Inicializo en 2 por que ya tenemos el 0 y 1 recorremos
      fibo[i] = fibo[i-1] + fibo[i-2]; // se suman las dos anteriores i -1 suma la anterios y la i-2 suma las dos anteriores 
      console.log(fibo[i]) // imprimimos 
    }
  };
   fibonacci();

   //ejercicio 10 Crea una funcion que recibe un string  y regresa false si el string contiene al menos una letra mayuscula
const letraMayus = () =>{
      let letras  = 'Rafael  ';
   };
   letraMayus ();
