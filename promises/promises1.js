let miPromesa = new Promise((resolver,rechazar) => {
    let expresion = true;
    if (expresion) 
        resolver('Resolvio Correcto');
        else
        rechazar('Se produjo un error');
});

// miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    console.log('Iniciando la promesa');
    setTimeout(() => resolver('Prueba con promesa y timeout'), 3000);
    console.log('Fin de la promesa');
});

promesa.then(valor=>console.log(valor));

