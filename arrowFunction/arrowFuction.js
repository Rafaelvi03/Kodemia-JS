// Es una forma de generar una funcion de forma compacta

//funcion de expresion 
//cuando tenemosun solo parametro omitimos el parentesis () 
const arrowFunction =() =>{


};
//ejemplo
const saludar =(prefijo ,nombre) =>{
    console.log(`Hola {prefijo } ${nombre}`);
};
saludar('Sr' ,'Rafael');            

//ejemplo 
const saludarDos =(prefijo ,nombre) =>{
    console.log(`Hola {prefijo } ${nombre}`);
};
saludarDos

//arguments es un objeto que js 

// CLASE ALDO const saludar = (prefijo, nombre) => {
  console.log(`Hola ${prefijo} ${nombre}`);
  console.log(arguments);
  for(const argument in arguments) {
    console.log(argument);
  }


function saludar(prefijo, nombre) {
  console.log(`Hola ${prefijo} ${nombre}`);
  console.log(arguments);
  for(const argument of arguments) {
    console.log(argument);
  }
}

saludar('Sr.', 'Aldo');

(function() {
    this.a="una cosa";
    this.b="otra cosa";
    
    function MiClase() {
      this.a="hola";
      this.b="adios";
    }
    
    let obj = new MiClase();

    let getA=function () {
      return this.a;
    };
    let getB=() => {
      return this.b
    };

    obj.getA=getA;
    obj.getB=getB;
    
    console.log(getA());
    console.log(getB());
    
    console.log(obj.getA());//funcion normal en el objeto
    console.log(obj.getB());// arrow function en donde la declararon
})();
