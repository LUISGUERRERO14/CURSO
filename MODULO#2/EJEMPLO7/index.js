const persona = {
    nombre: 'Luis',
    edad: 17,
    saludar() {
        console.log('Hola, yo soy '+ this.nombre);
    }
};

const copiedPerson = {...persona};
console.log(copiedPerson);

const pasatiempos = ['Futbol','Basketball'];
//for (let pasatiempo of pasatiempos){
//    console.log(pasatiempo);
//}

//console.log(pasatiempos);
//console.log(pasatiempos.map(pasatiempo => 'Pasatiempo: '+pasatiempo));

const copieArray = pasatiempos.slice();
const copieArray2 = [pasatiempos];
const copieArray3 = [...pasatiempos];

console.log(copieArray3);

//const toArray = (arg1, arg2, arg3) => {
//    return [arg1, arg2, arg3];
//};

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4));