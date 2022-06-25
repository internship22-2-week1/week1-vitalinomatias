var vitalino = {
    nombre: 'vitalino',
    apellido: 'matias', 
    edad: 31,
    ingeniero: false,
    cocinero: true,
    cantante: false,
    dj: true,
    guitarrista: false,
    dron: false
}

var vitalinoPequeño = {
    nombre: 'vitalino Pequeño',
    apellido: 'matias', 
    edad: 17,
}

const MAYORIA_DE_EDAD = 18;

// forma comun de escribir una funcion normal , se le llama funcion anonima

// function esMayordeEdad(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// existe otra manera de escribir funcionespersona.

// a una variable se le puede asignar una funcion

// var esMayordeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// otra forma puede ser escribir una arrow function

// al escribir una arrow function si solo lleva un parametro se pueden obvian los parentesis

// const esMayordeEdad = persona => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// si una funcion solo retorna un valor en una sola linea se puede escribir de esta forma

const esMayordeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;

const esMenordeEdad = (esMayordeEdad) => !esMayordeEdad;


function imprimirMayorEdad(persona) {    
    if (esMayordeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}


function permitirAcceso(persona) {
    if (!esMayordeEdad(persona)) {
        console.log('ACCESO DENEGADO');
    }
}
