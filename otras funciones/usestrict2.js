"use strict";

try {
    let x = 10;
} catch (error) {
    console.log(error);
}
finally{
    console.log('Se culmina la revision de errores');
}
console.log('continua con la aplicacion....');

let resultado = 'b';

try {
    if(isNaN(resultado)) throw 'No es un numero';
    else if (resultado === '') throw 'Es cadena vacia';
    else if (resultado = 0) throw 'Valor positivo';
    else if (resultado < 0) throw 'Valor negativo';
} catch (error) {
    console.log(error);
}
finally{

}
