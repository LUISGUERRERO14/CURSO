const persona = {
    nombre: 'Luis',
    edad: 17,
    saludar() {
        console.log('Hola, yo soy '+ this.nombre);
    }
};

//console.log(persona);

persona.greet();