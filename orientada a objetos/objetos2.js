let persona = {
  nombre: 'Jose',
  apellido: 'Lopez',
  email: 'jlopez@mail.com',
  edad: 20,
  idioma: 'es',

  get nombreCompleto() {
    return this.nombre+' '+this.apellido;
  },
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(Lang) {
    this.idioma = Lang.toUpperCase();
  }
}

console.log(persona.nombreCompleto);
console.log(persona.lang);
persona.lang = 'en';
 console.log(persona.lang);