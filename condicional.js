let adulto = 18;
let menor= 17
let edad=20;
if(edad<adulto){
    console.log("es menor");
}else {
    console.log("es mayor")
}

// ocn && 

let j=11;
let valmin = 0, valmax = 10;

if(j>=valmin && j<=valmax){
    console.log("Esta dentro deel rango")
}else{
    console.log("no esta dentro de rango")
}

let vacaciones=true, descanso=false;
if(vacaciones || descanso){
    console.log("padre ira al evento");
}else{
    console.log("el padre no puede ir al evento");
}

// operador ternario ??

let resul = (1>2)? "verdadero" : "false";
console.log(resul);


let por = 40;
let par = (por%2==0)? "el numero es par" : "es impar";
console.log(par);

//String to number
let minumero= "18";
let edad1 = Number(minumero);
console.log(typeof edad1);

if(edad >= 18){
    console.log("puede votar");
}else {
    console.log("no puede votar");
}

// con ternario

let nrt = "19";

let nedad= Number(nrt);
let vot = (nedad>=19)? "no puede votar" : "puede votar";
console.log(vot);


// ejemplo isNan= is not a number

if ( isNaN(nrt)) {
    console.log("No es un numero");
    
}else{
    console.log("si es numero")
}

//solitos
let numeroio = 10;

if (numero == 1){
    console.log("El numero es uno");
}
else if( numero == 2){
    console.log("Numero dos");
}
else if ( numero == 3){
    console.log("Numero tres");
}
else{
    console.log("Numero desconocido");
}  

//switch 
let numero1 = 9;
switch (numero1){

    case 1:
       console.log("Numero uno");
    break;

    case 2:
        console.log("numero dos");
    break;

    case 3:
        console.log("esta en el rango");
    break;

    case 4:
        console.log("esta en el rango");
    break;

    default: 
    console.log("esta fuera del rango");
}