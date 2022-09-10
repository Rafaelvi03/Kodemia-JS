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
let lapizRojo = new Lapiz ('pequeño', 'redondo', 'rojo') // Un lapiz nuevo es una  instancia
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


function Animal( tieneOjos, ojos, corazon){
    this.tieneOjos = tieneOjos;
    this.ojos= ojos;
    this.corazon= corazon;
    this.comer = (tipoComida) => {
        console.log(`este animal come esto: ${tipoComida}`)
    }

}
const serpiente = new Animal (true, 2, true)// instancia
console.log(serpiente.corazon) // entras a las caracteristicas 
serpiente.comer('ratones');

//constructor se utiliza para las clases
//suggar Sintax's  
class Animal{       
    constructor(tieneOjos, ojos, corazon){
    this.tieneOjos = tieneOjos;
    this.ojos= ojos;
    this.corazon= corazon;
    }
    comer(comida){
        console.log(`Este animal come esto : ${comida}`)
    }
}
const perro = new Animal(true, 2, true)
console.log(perro.corazon)
perro.comer('dowchao')
// Utilizar clases, es mas facil de entender 


// Herencia en JS

class Animal{       
    constructor(tieneOjos, ojos, corazon){
    this.tieneOjos = tieneOjos;
    this.ojos= ojos;
    this.corazon= corazon;
    }
    comer(comida){
        console.log(`Este animal come esto : ${comida}`)
    }
}

// Usa el prototipo de Animal -> extends extiende clases, -> ejemplo extiende la clase animal y hace  un Oviparo  y hace la herencia
class Oviparo extends Animal{
    // con Super, asignas los parametros (tieneOjos, pk)
    constructor(tieneOjos,ojos, tienecorazon, naceDeHuevo){
        super(tieneOjos,ojos, tienecorazon); // es obligatorio mandar a llamar a la funcion super // metodo 
        this.naceDeHuevo = naceDeHuevo;  

    }
}
// generamos un animal oviparo 
const ave = new Oviparo (true, 2, false, true) //argumento de nace de huevo 
console.log(ave )


class Reptil extends Oviparo{
    constructor(tieneOjos, ojos, tienecorazon, naceDeHuevo, seArrastra){
        super(tieneOjos,ojos, tienecorazon, naceDeHuevo)
    }
}
const cocodrilo= new Oviparo (true,2, true, true, false )
console.log(cocodrilo)

