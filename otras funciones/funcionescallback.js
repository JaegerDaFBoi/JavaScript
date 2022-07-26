//Funcion dentro de una funcion

miFuncion1();

miFuncion2();

function miFuncion1(){
    console.log('funcion 1');
}

function miFuncion2(){
    console.log('funcion 2');
}

//Funciones tipo callback

let imp = function imprimir(mensaje){
    console.log(mensaje);
};

function sumar(op1, op2, functionCallback){
    let res = op1 + op2;
    functionCallback(`Resultado: ${res}`);
}

sumar(5,10, imp);

//Llamadas asincronas con setTimeout

function miFuncionCallback(){
    console.log('Prueba asincrona despues de 5 segundos');
}

setTimeout(miFuncionCallback, 5000);

setTimeout(function(){console.log('Prueba 2 con 2 segundos de retardo')},2000);

setTimeout( () => console.log('Saludo asincrono con 3 segundos de retardo'), 3000);

