// ejercicio 1 Crea una funcion que te salude cada dos segundos
let fun = () => {
   console.log ('Hola Rafa')
}
setInterval(fun, 2000 );   

// Ejercicio 2
function saludame(){
   console.log('Hola Rafael ')
}

setTimeout(saludame, 1000);

//Ejercicio 3

const  automovil ={ // objeto generico de automovil
   puerta:4,
   electrico: false,
   acelerar: () =>{
      console.log('voy acelerando');
   }

}
const auto = new Object();
auto.puertas = 4;
auto.electrico = false;
auto.acelerar= () =>{
   console.log('voy acelerar');
}


//Ejemplo

//funcion constructora 
function Carro(puertas){
   this.puertas =4;
   this.electrico = false;
   this.acelerar= ()=>{
      console.log('voy acelerando ')
   }
}


const casas = {
pisos :2,
antiguedad :20,
fiesta:( )=>{
   console.log('Fiesta')
}
}

//al objeto casa obten pisos
casas.pisos

//objetos genericos
function Koder(){
   this.entusiasmo=true;
   this.odiaJS= true;
   this.consoleLog = true;
   this.programar = ()=>{
      console.log ('Estoy programando');
   }
}


//Otra forma de generar Objetos
//Cuando hablamos de class estamos hablando de la estructura de un Objeto 
// el metodo constructor es 

class PersonajugadorPS5{ // Templeate  ES6 Sugar syntax
   constructor(entusiasmo, gordo, lentes) { //en el constructor le pasas los parametros         
      this.entusiasmo =entusiasmo;
      this.gordo =gordo ;
      this.lentes = lentes;       // vamos a generar los atributos (caracteristica)

   }      
    // es un metodo
   saludar(){
      console.log('Le da amsiedad hablar con la demas gente ', this.lentes);   
      this.jugarPS5();
   } 
   jugarPS5(){
      console.log('Todo el tiempo se la pasa jugando ')
   }
}

const gordoFriki = new PersonajugadorPS5(false, false, false );         
gordoFriki.saludar();

const  flakoFriki =new PersonajugadorPS5(true, true, false); // nuevo objeto de direccion en memoria 
flakoFriki.saludar();

//contexto de ejecucuon es quien nos esta ejecutando 