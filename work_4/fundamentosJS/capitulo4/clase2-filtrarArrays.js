var vitalino = {
    nombre: 'vitalino',
    apellido: 'matias',
    altura: 1.70
}

var vicky = {
    nombre: 'vicky',
    apellido: 'zapata',
    altura: 1.65
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barrios',
    altura: 1.76
}

var dario = {
    nombre: 'dario',
    apellido: 'juarez',
    altura: 1.71
}

var alan = {
    nombre: 'alan',
    apellido: 'perez',
    altura: 1.86
}

var martin = {
    nombre: 'martin',
    apellido: 'gomez',
    altura: 1.85
}

// const esAlta = ({altura}) => altura > 1.8;

var personas = [vitalino, vicky, paula, dario, alan, martin];

// var personasAltas = personas.filter(esAlta)

var personasAltas = personas.filter(({altura}) => altura > 1.8)

var personasBajas = personas.filter(({altura}) => altura <= 1.8);

console.log(personasAltas);

console.log(personasBajas);