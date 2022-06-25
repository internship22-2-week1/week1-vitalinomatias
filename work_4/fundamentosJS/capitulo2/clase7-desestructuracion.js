var vitalino = {
    nombre: 'vitalino',
    apellido: 'matias',
    edad: 31
}

var darido = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre;
    var {nombre} = persona;
    console.log(nombre);
}

imprimirNombreEnMayusculas(vitalino);
imprimirNombreEnMayusculas(darido);

// imprimirNombreyEdad --- hola me llamo sacha y tengo 28 años

function imprimirNombreyEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;

    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreyEdad(vitalino);