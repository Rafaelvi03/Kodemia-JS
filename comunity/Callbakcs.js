

// Callback es la declaracion de una funcion que va pasar como parametro de otra funcion para 
//ser ejecutada posterior


//declaracion de la funcion 
function irAlSuperMercado(callback){

    console.log('Llendo al super mercado ')
    console.log('Llegue al supermercado')
    callback() // ejecuta la funcion avisar avisar ()
}
function avisar (){
    console.log('Mamá , ya llegue al supermercado')
}

//ejecucion  de la funcion  
irAlSuperMercado(avisar()) // correcta declaracion de la funcion 
irAlSuperMercado (avisar); // pasando la declaracion de la ejecuccion esta mal



//Problema
/*
1. Avisar cuando llegue
2. Avisar cuando vaya de regreso
3. Avisar cuando llegue a la casa
*/

//declaracion de la funcion 
function irAlSuperMercado(callback){

    console.log('Llendo al super mercado ')
    console.log('Llegue al supermercado')
    callback('Hola mamá ya llegue al supermercado') // ejecuta la funcion avisar avisar ()
    console.log('Compre la despensa')
    console.log('Pague la cuenta')
    callback('Hola mamá ya voy de regreso')
    console.log('Ya estoy en casa')
    callback('Hola mamita ya estoy en casa :D ')
}

//callback 
function avisar(mensaje){
    console.log('llamando-------')
    console.log(mensaje)
    console.log('Colgando-------')
}

// lo mismo de la fuction con arrow function
/*irAlSuperMercado((mensaje))=>{
    console.log(mensaje)
}*/

irAlSuperMercado(avisar)




