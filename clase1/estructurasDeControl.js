// Nos permiten generar caminos
//Evaluar boleanos si fueran verdaderos o falsos

// If pregunta si esto es verdadero
// ejecutar el login
let loggeado = true;
let tarjedaDeCredito = true;

//If else
if (loggeado && tarjedaDeCredito) {
  console.log("Puede revisar su detalle de la tarjeta");
} else {
  console.log("el usuario no esta logeado o no tiene tarjeta de credito ");
}

// else if
if (loggeado && tarjedaDeCredito) {
  console.log("Puede revisar su detalle de la tarjeta");
} else if (loggeado === false && tarjetaDeCredito) {
  console.log("el usuario no esta logeado o no tiene tarjeta de credito ");
} else {
  console.log(
    "Si no pasa ninguna de las dos validadciones pasa el ultimo else "
  );
}

//if anidado
if (loggeado) {
  if (tarjetaDeCredito) {
    console.log("Puede  revisar su detalle de la tarjeta");
  }
}

//SWITCH
let paso = 2;
switch (paso) {
  case 1:
    console.log("Datos personales ");
    break;
  case 2:
    console.log("Datos academicos ");
    break;
  default:
    console.log("aun no hay datos que llenar");
}


