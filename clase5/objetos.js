// Un objeto tiene atributos y propiedades
 //objeto 
let carro = {  // en carro estan  guardadas las propiedades ( referencia = carro ) // objeto literal
    puertas: 4,
    color: 'gris',  // propiedades 
    electrico: false,
    acelerar:() => {                     // declaramos una funcion    
        console.log('Estoy avanzando');
    }
}               

//funcion constructora
function Carro(){
this. puertas =0;         
this.color= 'gris';
this.electrico = false;
this.acelerar = () =>{
    console.log('Estoy avanzando');
    }
}

let miniCooper = new Carro();
console.log(miniCooper, carro )


//this agrega propiedades en este (especifico)
//new espacio de memoria 