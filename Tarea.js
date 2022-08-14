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
  for ( i = 0;  i < arrayn.length; i++) // recorremos el arreglo 
  if (arrayn[i] > numMayor) {
      // Si lo que hay en el arreglo [nuestro indice ] > mayor que numMayor
      numMayor = arrayn[i]; // numMayor es igual a lo que hay en nuestro array, nuestro indice
      console.log(numMayor);
    }
};

numerosArray();

// Crea una funcion que reciba un arreglo que pueda contar cuanto elementos de un arreglo sean mayores  a X valor dado en los parametros
const elemtosMayoresArray = (num = 40) => {
  // damos a X un parametro que es 40
  let array = [20, 60, 30, 70]; // declaramos un array
  for ( let i = 0; i < array.length;   i++ )// recorremos el array 
    if (array[i] > num) {
      // Si el array(de lo que recorre mi indice ) >de lo que asignamos a  num  que es el parametro
      console.log(array[i]); // imprimir
    }
};
elemtosMayoresArray();

 // Crea una funcion que reciba un arreglo de numeros y reciba un arreglo de numeros y regrese la lista de numeros pares que se encuentren en el arreglo

 const numerosPares = () => {
  let array = [ 1,2,3,4,5,6,7,8,9,10];
  for (let i =0; i < array.length; i++){
      if(array[i] % 2 === 0){
          console.log(array[i]);      
      }
  }
};
numerosPares();


