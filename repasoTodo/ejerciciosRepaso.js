//. Generar variable  con el nombre que prefieras  por cada tipo de dato :
let minombre = "Rafael";
let numero = 10;
let esMujer = True;
let esHombre = False;
let usuarios = undefine;
let otroUsuario = null;
let carrito  = {
    marca: 'BMW',
    motor: true,
    color: "negro",
    llantas: 4,
    puertas: 5,
    tuneado: true,
  };
  let   jugadores = ['CR7', 'Messi', 'Neymar', 'Haland', 'El gato '];
// Generar  una variable de tipo objeto  que represente un carro
let carro = {
  marca: 'BMW',
  motor: true,
  color: "negro",
  llantas: 4,
  puertas: 5,
  tuneado: true,
};

//Genera una variable de tipo arreglo con el nombre que prefieras
let triologiaChucky = ["Chucky I ", "Chucky II", "La novia de Chucky"];

// Genera un script que  imprima 10 veces el nombre de tu mascota 
for (let i = 0; i < 10; i++) {
    console.log('Loco');
  }
  /*Genera un programa que imprima el nombre de una persona siempre y cuando la persona sea mayor
  de edad de sino es mayor de edad  debe imprimir  mensaje  'No tengo permitido usar tus datos personales 
  */
//let personaMayorDeEdad = 18;
let personaMayorDeEdad = 5;
if ( personaMayorDeEdad >= 18){
    console.log('Rafael')
}else {
    console.log('No tengo permitido usar tus datos ')
}
//Genera un programa que me ayude a imprmir  en consola el valor de cada una  de las propiedades del siguiente objeto
let usuario={
nombre: 'juan',
edad: 20,
constraseña : 'password2022'
}
for(let propiedades in usuario){
    console.log(propiedades, usuario[propiedades])
}
//Genera un programa  que ayude  a imprimir  el contenido de un arreglo  elemento por elemento
let frutas = ['fresa', 'melon ', 'mango ', 'kiwi']
for(let fruta of frutas){
    console.log( fruta)
}