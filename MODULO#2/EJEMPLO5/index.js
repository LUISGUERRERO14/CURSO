const persona = {
    nombre: 'Luis',
    edad: 17,
    saludar() {
        console.log('Hola, yo soy '+ this.nombre);
    }
};


const pasatiempos = ['Futbol','Basketball'];
//for (let pasatiempo of pasatiempos){
//    console.log(pasatiempo);
//}

console.log(pasatiempos);
console.log(pasatiempos.map(pasatiempo => 'Pasatiempo: '+pasatiempo));