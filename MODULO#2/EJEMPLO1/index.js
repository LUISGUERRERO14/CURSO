var nombre = 'Luis';
var edad = 17;
var pasatiempos = true;

function resumenUsuario(userName, userAge, userHobbies) {
    return ('El nombre de usuario es '+userName+', La edad que tiene el usuario es '+userAge+' y  tiene hobbies el usuario: '+userHobbies);
}

console.log(resumenUsuario(nombre, edad, pasatiempos));