//String to number

let miNumero = "18";

let edad = Number(miNumero);

console.log(typeof edad);

/*if (edad >= 18) {
  console.log("Puede votar")
} else {
  console.log("No puede votar")
}*/

let voto = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log(voto); 

