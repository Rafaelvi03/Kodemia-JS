// un prototipo es alguien que le delegamosa algo
// prototipo es un templeate que se hereda 


const cheff= {
    tipo: ' cocina basica',
    cocinar : function(platillo){  // metodo 
        console.log(`cocinando el  ${platillo}`)
    }
}
const rafael = {
    nombre: 'rafael',
    edad : 24,
    profesion: 'develop'
            
}
// sobrescribio el prototipo  // se comparten                          
// rafael.__proto__ = cheff; //proto es un metodo 
Object.setPrototypeOf(rafael, cheff) // nos permite encadenar prototipos  (prototipo de Rafa le va encadenar el prototipo de cheff)
rafael.cocinar ('filete'); // mandas a llamar que cocine aldo un filete 


// Como debe de utilizar correctamente
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true

