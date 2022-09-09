let lapiz ={
    tamanio: 'pequenio',
    forma: 'hexagonal',
    color: 'amarillo',
    escribir(texto)=>{
        return 'Use mi lapiz para escribir el texto ' + texto 
    }
}

console.log(lapiz.color)
console.log(lapiz.forma)
console.log(lapiz.tamanio)
console.log(lapiz.escribir('Rafael Villaseñor Reyes'))

//Funcion constructora, crear objetos que pertenece a una categoria especifica siempre va con Mayuscula
// se usa una funcion convencional  por el contexto
/*acuerdate que la funcion constructora tiene que ser una funcion comun por el contexto que guarda this
si usaramos una arrow function this no es lo que queremos
las mismas instrucciones
*/ 

function Lapiz(tamanio, forma, color ){ //argumentos 
    this.tamanio= tamanio;
    this.forma = forma;     // Esto que estoy creando tiene un tamanio 
    this.color= color;
    this.escribir = (texto)=>{
        return 'Use mi lapiz para escribir el texto ' + texto 
    }
}
let lapizRojo = new Lapiz ('pequeño', 'redondo', 'rojo') // Un lapiz nuevo
let textoRojo= lapizRojo.escribir('rojo')
console.log(textoRojo)
console.log(lapizRojo)


function Dinosaurios(habitad, epoca, alimetacion){
    this.habitad=habitad;
    this.epoca= epoca;
    this.alimetacion=alimetacion;
    this.sonido=(sonidos)=>{
            return 'Soy un Spinosaurus y ' + sonidos
    }
}
let Spinosaurus= new Dinosaurios ('agua','Cretacico', 'carnivoro')  
let sonidoSpinosaurus = Spinosaurus.sonido('rawww')
console.log(sonidoSpinosaurus)
console.log(Spinosaurus)

// prototipo base para construir algo en especifico     
// Extencion es algo nuevo de tu clase  Oviparo      
// Instancia   reptil, iguana            
//buscar imagen en telefono xd         