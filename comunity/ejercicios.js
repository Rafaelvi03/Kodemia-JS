/*Crear una función map que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
obtenga el resultado
lo agregue a un nuevo array
devuelva el array final con el resultado de cada una de las llamadas al callback.*/

function map(myArray, callback) {
  let newArray = []; // Arreglo vacio donde se pusheara new Element
  for (let i = 0; i < myArray.length; i++) {
    // recorremos el arreglo
    const elementCurrent = myArray[i]; // guarda en elemento my array lo que contiene [i]
    const newElement = callback(elementCurrent);
    newArray.push(newElement);
  }
  return newArray; // retornamos el valor nuevo de newArray
}

const numberArray = [1, 2, 3];
const duplicate = (number) => {
  return number * 2;
};
const numbersDuplicate = map(numberArray, duplicate);
console.log(numbersDuplicate);

/*Crear una función filter que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
SI dicho callback devuelve true, agregar el elemento a un nuevo array
devuelva el array final con los elementos que pasaron el "filtro"*/

function filters(myArray, callback) {
  let newArray = []; // Arreglo vacio donde se pusheara new Element
  for (let i = 0; i < myArray.length; i++) {
    // recorremos el arreglo
    const elementCurrent = myArray[i]; // guarda en elemento my array lo que contiene [i]
    const newElement = callback(elementCurrent);
    newArray.push(newElement);
  }
  return newArray; // retornamos el valor nuevo de newArray
}

const pairArray =[12,45,67,24,12]
const pair = pairs =>{
  return pairs %2 ==0;
}

const numPair = filters(pairArray, pair)
console.log(numPair)
