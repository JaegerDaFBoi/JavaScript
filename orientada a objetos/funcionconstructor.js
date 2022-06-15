//Funcion Constructor

function Persona(nombre,apellido,email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function() {
    return this.nombre + ' ' + this.apellido;
  }
}

let madre = new Persona('Sandra', 'Pacheco', 'sp@mail.com');
console.log(madre);

let padre = new Persona('Antonio','Casale','a@mail.com');
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());