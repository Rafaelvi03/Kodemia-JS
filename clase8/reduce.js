// reduce pertenece al prototipo de array
//Se le pasan 4 parametros : acumular, posicion actual, posicion , referencia al arreglo mismo
// solo se ocuparan dos 
let frutas =[{nombre: 'pera', color : 'verde'},{nombre: 'manzana', color: 'roja'}, {nombre: 'platano', color: 'amarillo'}];

// en los parametros se le pasa un callback y un valor inicial                                
let poncheDeFrutas = {acumulador, fruta} =>{
    acumulador = acumulador + ' '+ fruta.nombre;
    return acumulador;
}
    const ponche = frutas.reduce(poncheDeFrutas, 'ponche de');