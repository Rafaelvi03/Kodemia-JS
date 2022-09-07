/*
For IN 
Itera a través de todas las propiedades enumerabkes de un objeto
for (variable de la propiedad donde se recorre el objeto in nombre del objeto)  
RECORRE OBJETOS
*/

const libro ={
    titulo: 'Harry potter y el misterio de JS',
    autor: 'Rafael ',
    paginas: 300
};
// para obtener la propiedad del objeto
libro.titulo
libro ['titulo']
for(let nombrePropiedad in libro ){
    //console.log(nombrePropiedad)  // Aqui se trae las propiedades titulo, autor, paginas 
    //libro[nombrePropiedad] // aqui se trae  todo lo que contiene las propiedades del objeto  Harry poter, Rafael 300
    console.log(nombrePropiedad, libro[nombrePropiedad])

}


/*For of
Nos ayuda a recorrer arreglos, posiciones especificas
Array, Map, Set, arguments, objects
Objeto Iterable: Tiene indices que puede controla la poscion del elemento  
*/

let frutas = [ 'fresa', 'mango', 'melon'];
for (let fruta of frutas){
    console.log(fruta) // mestra fresa, mango , melon 
}


//ejemplo for in- for of
let obj= {
    frutas : ['fresa', 'mango ', 'melon'],
    personajes: ['harry', 'sina', 'benja']
}
for (let propiedad in obj){
    //propiedad frutas obj[propieda]= ['fresa']
    //propiedad personajes obj['personajes']= ['harry']
    for(let elemento of obj[propiedad]){
        console.log(elemento);
    }
}|