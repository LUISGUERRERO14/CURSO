const nombre = 'Luis';
let edad = 17;
const pasatiempos = true;

//nombre= 'alberto' //genera error al ser una constante
edad= 20;

function resumenUsuario(userName, userAge, userHobbies) {
    return ('El nombre de usuario es '+userName+', La edad que tiene el usuario es '+userAge+' y  tiene hobbies el usuario: '+userHobbies);
}

console.log(resumenUsuario(nombre, edad, pasatiempos));