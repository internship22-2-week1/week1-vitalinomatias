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

function imprimirNombreEnMayusculas({ nombre }) {
    var nombre = nombre.toUpperCase()
    console.log(nombre);
}

imprimirNombreEnMayusculas(vitalino);
imprimirNombreEnMayusculas(darido);