let persona = {
  nombre: 'Jose',
  apellido: 'Lopez',
  email: 'jlopez@mail.com',
  edad: 20,

  nombreCompleto: function() {
    return this.nombre+' '+this.apellido;
  }
}

console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.apellido = 'Dimas'
persona2.direccion = 'Av Santander  # 65';
persona2.tel = '3555565';
console.log(persona2);

persona2.nombreCompleto = function() {
  return this.nombre +' '+ this.apellido;
}

console.log(persona2.nombreCompleto());

//for in

for (nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}

//Formas de imprimir objetos

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

