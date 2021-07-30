const nombre = 'Luis';
let edad = 17;
const pasatiempos = true;

const resumenUsuario = (userName, userAge, userHobbies) => {
    return ('El nombre de usuario es '+userName+', La edad que tiene el usuario es '+userAge+' y  tiene hobbies el usuario: '+userHobbies);
};

console.log(resumenUsuario(nombre, edad, pasatiempos));

//const add = (a,b) => {
//    return a + b;
//};

//const add = (a,b) => a + b;

//console.log(add(1,2));

//const addOne = a => a + 1; //si tiene un solo argumento no hace falta encerrarlo en parentesis pero si son 2 si se hace necesario por ejemplo (a,b)

//console.log(addOne(2));

const addRandom = () => 1 + 2;

console.log(addRandom());