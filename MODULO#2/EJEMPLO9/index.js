//const recuperarDatos = callback => {
//    setTimeout(() => {
//        callback('Completado!');
//    }, 1500);
//};

const recuperarDatos = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Completado!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('El tiempo se ha completado!');
    recuperarDatos()
    .then(texto => {
        console.log(texto);
        return recuperarDatos();
    })
    .then(texto2 => {
        console.log(texto2);
    });
}, 2000);

console.log('Hola');
console.log('Bienvenido!');