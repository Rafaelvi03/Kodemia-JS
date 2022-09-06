console.log(Array.prototype)

//metodo concat
let array1 =[1,2,3,4,5]
let array2 =[6,7,8,9,10,]

 const newArry=  array1.concat(array2)
 console.log(newArry)



 //Ejercio

 const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    passengers: [{
        name: 'aldo',
        edad: 30
    }, {
        name: 'Juan',
        edad: 30
    },
    {
        name: 'Alberto',
        edad: 30
    },
    {
        name: 'Judith',
        edad: 30
    }]
};


let schedules = ['09:00', '10:00', '11:00', '12:00'];

let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']

function parsear (flight) {
    return flight.passengers 
}
parsear();

// 1.- Funcion que se encargue de parsear elementos
// 2.- Funcion que concatene los elementos(arreglos)
// 3.- Que mande llamar las dos funciones anteriores 
// 4.- El resultado debe ser algo parecido a lo siguiente
// let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']





array.prototype.slice
array.prototype.sort
array.prototype.filter
array.prototype.find
array.prototype.map
array.prototype.reduce


// ejercicio
const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmisio     n: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];

function ordenarAutos(autosColor){
    let compare =function(color1, color2){
               
    }

autosColor.sort();
return autos;
}
let autosOrdenados = ordenarAutos(autosColor)
console.log(ordenarAutos)



//  

let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ];
  
  let alumnosMayorDiez = students.filter((aprobados) =>{
      return aprobados.score >= 10
  })
  console.log(alumnosMayoraDiez)


//find Primer elemento que tu buscas que se encuentra en el array ese te va dar
// entras a un objeto mediante . auto . marca  

// Array clase 9 de Aldo


