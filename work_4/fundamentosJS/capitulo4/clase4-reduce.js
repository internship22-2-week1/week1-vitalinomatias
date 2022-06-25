var vitalino = {
    nombre: 'vitalino',
    apellido: 'matias',
    altura: 1.70,
    cantidadDeLibros: 64
}

var vicky = {
    nombre: 'vicky',
    apellido: 'zapata',
    altura: 1.65,
    cantidadDeLibros: 185
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barrios',
    altura: 1.76,
    cantidadDeLibros: 74
}

var dario = {
    nombre: 'dario',
    apellido: 'juarez',
    altura: 1.71,
    cantidadDeLibros: 29
}

var alan = {
    nombre: 'alan',
    apellido: 'perez',
    altura: 1.86,
    cantidadDeLibros: 42
}

var martin = {
    nombre: 'martin',
    apellido: 'gomez',
    altura: 1.85,
    cantidadDeLibros: 19
}

var personas = [vitalino, vicky, paula, dario, alan, martin];

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}

var totalLibros = personas.reduce(reducer, 0);

console.log(`en total todos tienen ${totalLibros} libros`);