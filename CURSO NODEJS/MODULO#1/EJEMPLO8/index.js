const persona = {
    nombre: 'Luis',
    edad: 17,
    saludar() {
        console.log('Hola, yo soy '+ this.nombre);
    }
};

const printName = ({ nombre }) => {
    console.log(nombre);
}

printName(persona);

const { nombre, edad } = persona;
console.log(nombre, edad);

const pasatiempos = ['Futbol','Basketball'];

const [pasatiempo1, pasatiempo2] = pasatiempos;
console.log(pasatiempo1, pasatiempo2);