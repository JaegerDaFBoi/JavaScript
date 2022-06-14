// Arreglos

const autos = ['BMW','VOLVO','AUDI'];
console.log(autos);

console.log(autos[0]);

for(let i=0; i < autos.length; i++){
  console.log(i + ' : ' + autos[i]);
}

autos[1] = "MAZDA";

console.log(autos);

autos.push('MAZERATTI');

console.log(autos);

console.log(autos.length);

autos[autos.length] = "CADILLAC";

console.log(autos);

autos[5] = "CHEVROLET";

console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);