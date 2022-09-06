/*Date 
Javascript nos provee de un tipo de dato llamado date (objeto) con el que podemos trabajar de forma facil
y practica con fechas. Sin embargo, trabajar con fechas no es facil y la primera vez que tenemos que hacerlo es muy 
sencillo equivocarse si no tenemos claros ciertos conceptos 
Date.now = Nos retorna al tiempo transcurrido (fecha especifica) 1 enero 1970 
Los metodos estaticos significan que los vamos a mandar a llamar desde las funcnoiones contructoreas o de la clase
static now() == esta declarada estatica
Un metodo estatico no hace referencia  a ningun dato 
// La clases por debajo es un contructor 


 checar repo aldo, ejemplo      
*/



const diaHoy = () => {
    //genere un objeto de tipo Date
    const hoy = new Date();
    // obtuve el dia del mes a partir del objeto que genere
    const dia = hoy.getDate();
    // obtuve el numero de mes del dia de hoy
    const mes = hoy.getMonth();
    // obtuve el anio del dia de hoy
    const anio = hoy.getFullYear();
    const fecha = `${anio} ${mes} ${dia}`;

    const PI = 3.1415;

    console.log(fecha);    
};

diaHoy();
/*
Math
Javascript nos provee de un tipo de dato llamado Math(objeto)
con el que podemos trabajar de forma facil y ptractica con numeros 



*/
function areaCirculo(radio){
    let area = Math.PI * Math.pow (radio,2)
    console.log(area)

}
areaCirculo(9)

                                 