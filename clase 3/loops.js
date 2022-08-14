// WHILE = MIENTRAS se ejecuta mientra su expresion se cumpla es   una funcion de forma repetida

let n = 0;
while (n < 3) {
  console.log(n, "paso por el loop");
  n++;
}
console.log(n);

//ejercicio

// FOR se reíte hasta quye una condicion especifica se evalua como falsa. el bucle for es similar a Java y C

let frutas = ["manzana", "platano", "fresa", "melon "]; //longitud es 4
function imprimirFrutas(frutas) {
  for (let i = 0; i <= frutas.lenght - 1; i++) {
    console.log(frutas[i]);
  }
}
imprimirFrutas(frutas);

//For in Itera atraces de todas las propiedades enumerables de un objeto
//nos ayudan a recorrer estructuras de datos

let persona = {
  nombre: "rafael",
  edad: 24,
  sex: "masculino ",
};
for (llave in persona) { //lave hace referencia a las propiedades 
    console.log(persona[llave]); // Con los corchetes entras a un string 
}


// FOR OF Crea un ciclo que itera sobre objetos iterables (oncluidos Arrya, Map. Set, argument ext) 
//que ejecuta acciones con los  valores obtenidos en cada iteracion
for (const i of arreglo){
    console.log (i); // 
}


let frutasPreferidas = ["manzana amarilla ", "platano", "fresa", "sandi "]; //longitud es 4

for(const fruta of frutasPreferidas){
    console.log(fruta);
}


//For in atraves de la llaves For of a traves de los valores 










