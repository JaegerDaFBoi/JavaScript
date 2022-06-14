// Funciones

// miFuncion(4,2);

// miFuncion(5,9);// Hoisting: Llamar la funcion antes de construirla

// function miFuncion(a, b){
//   console.log("Suma: "+(a+b));
// }


//Declaracion de la funcion
function miFuncion(a,b){
  return a+b;
}

//Llamado de la funcion
let resultado = miFuncion(8,10);
console.log(resultado);


//Declaracion de la funcion en modo expresion
let sumar = function(a,b) {
  return a+b;
}

resultado = sumar(1005,905);
console.log(resultado);

//Self Invoking
(function (a,b){
  console.log('Ejecutando funcion: ' + (a+b))
})(3,4);

console.log(typeof miFuncion);

let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
