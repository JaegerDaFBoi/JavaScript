// Parametros y argumentos
let sumar = function(a = 4, b = 5){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b + arguments[2];
};

// resultado = sumar(4,7,10);
// console.log(resultado);

let resultado = sumarTodo(5,4,13,10,9,10,11,3);

console.log(resultado);
function sumarTodo(){
  let suma=0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}

// Paso por valor

let x = 10;
function cambiarValor(a){
  x = 20;
}

cambiarValor(x);
console.log(x);


// Paso por referencia

const persona = {
  nombre: "JUAN",
  apellido: "LUCUMI"
}
function cambiarValorObjeto(p1){
  p1.nombre="Carlos";
  p1.apellido="Gomez";
}

cambiarValorObjeto(persona);
console.log(persona);

