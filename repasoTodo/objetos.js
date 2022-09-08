/*Objetos
Una estructura de de la vida real, con propiedades 
*/

let carro = {
    puerta: 5,
    color: 'negro',
    marca: 'BMW',
    llantas: 4
}; 
carro.duenio = 'Rafael ' // reasignarel valor 
// para validar si duenio  existe o no
if(carro.duenio !== undefined){
    console.log('La propiedad si existe')
}else{
    console.log('La propiedad no existe ')
}


// para entrar a uno en especifico  dos formas 
console.log(carro['puerta'])
console.log(carro.puerta)


//for in  recorremos objetos 
for( let caracteristicas in carro){
    console.log(caracteristicas, carro[caracteristicas])
}

