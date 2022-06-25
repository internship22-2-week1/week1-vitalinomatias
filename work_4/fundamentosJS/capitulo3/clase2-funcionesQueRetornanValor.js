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

function esMayordeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirMayorEdad(persona) {    
    if (esMayordeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

