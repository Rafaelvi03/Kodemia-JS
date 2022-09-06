/*
Crea una funcion map que acepte un array un callback y que:
Por cada elemento del array ejecute el callback pasandole dicho elemento como argumento 
obtenga el resultado
lo agregue a un nuevo array
devuelva el array final con el resultado de cada una de las llamadas al callback 
*/

//[2,5,8,8] -> [4,10,16,16]
//[2,5,8,8]->[1,4,7,7]
// Siguientes casos:
// ['Jonatan', 'Manu', 'Annie', 'Cin'] -> ['J', 'M', 'A', 'C']
// ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'] -> ['M. C. R.', 'C. R. V.', 'F. P. L.']

function map(myArray, callback){
    let newArray =[]
    for(let i=0; i<myArray.length; i++){
    const elementCurrent=myArray[i]
    const newElement = callback(elementCurrent)
    newArray.push(newElement)
    
 }
 return newArray
}



const numbersArray = [2,5,8,8]

const numberDuplicate = (number) =>{
    return number * 2 

}
const numbersDuplicate = map(numbersArray,numberDuplicate)
console.log(numbersDuplicate)



const restaArray =[2,5,8,8]

const resta =(number)=>{
    return number - 1
}
const  restas= map(numbersArray, resta)
console.log(restas)

// ['Jonatan', 'Manu', 'Annie', 'Cin'] ['J', 'M', 'A', 'C']

const getfirstLetter = ['Jonatan', 'Manu', 'Annie', 'Cin']

const firsLetter =  (iniciales) =>{
     return iniciales[0]
    
}
const inicialesTodos= map(getfirstLetter,firsLetter)
console.log(inicialesTodos)

// ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'] -> ['M. C. R.', 'C. R. V.', 'F. P. L.']

const firsLetterLastName = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva']

const firstletra(init) =>{

}