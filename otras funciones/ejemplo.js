"use strict";

let resultado = 10;

try {
    if(resultado%2 == 0) throw 'Es par';
    if(resultado%2 != 0) throw 'Es impar';
    if(resultado == 0) throw 'El valor es cero'
} catch (error) {
    console.log(error)
}