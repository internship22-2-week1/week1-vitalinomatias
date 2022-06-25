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

function cumpleanios(persona) {
    return {
        ...persona,
        edad: persona.edad +1
    }
}

