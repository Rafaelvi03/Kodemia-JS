//contexto de ejecucion donde va a vivir
let fecha = '06/09/2022' // scope global se puede ejecutar cualquier parte 
function hacerGelatina(sabor, forma){
    let gelatina = `esta es la gelatina de ${sabor} y con forma ${forma} fue echa ${fecha}`;
    return gelatina;  //scope local
}

let gelatinaIsra = hacerGelatina('jerez','gato');
console.log(gelatinaIsra);          

