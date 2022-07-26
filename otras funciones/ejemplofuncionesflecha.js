let miFuncion = function(){
    console.log('Prueba desde mi Funcion');
}
const saludar = () => 'Saludos desde funcion flecha';

console.log(saludar() );

const regresaObjeto = () => ({ nombre: 'Juan', apellido: 'Perez'});
console.log(typeof regresaObjeto());

const funcioncConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

funcioncConParametrosClasico('Hola');

const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('prueba con parametros');

const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};

console.log(funcionConVariosParametros(2000,1));

