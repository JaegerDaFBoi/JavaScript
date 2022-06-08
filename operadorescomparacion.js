//Operadores de comparacion

let a = 3, b = 2, c ="3";

let z = a == c;  //Se revisa el valor sin importar el tipo
console.log(z);

z = a === c;  // Se revisan los valores y tambien los tipos de las variables;

 
let z1 = a != c;
console.log(z1);

z1 = a !== c;  //Revisa valores validando el tipo
console.log(z1);

//Operadores relacionales

let z2 = a <= b;
console.log(z2);

z2 = a < b;
console.log(z2);

z2 = a > b;
console.log(z2);

z2 = a >= b;
console.log(z2);


//Calculo de numeros 
let a2 = 25;
if (a2 % 2 == 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

//Calculo adultos
let edad = 18, adulto = 18;
if (edad >= adulto) {
  console.log("Es adulto");
} else {
  console.log("Es niño");
}

//And

let a3 = 5;
let valMin = 0, valMax = 10;
if (a3 > valMin && a3 <=valMax) {
  console.log("Valor dentro del rango");
} else {
  console.log("Valor fuera del rango");
}
  
//Or

let vacaciones = true, descanso = false;

if (vacaciones || descanso) {
  console.log("Esta libre");
} else {
  console.log("No esta libre");
}
