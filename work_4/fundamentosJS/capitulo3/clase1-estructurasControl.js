var vitalino = {
    nombre: 'vitalino',
    apellido: 'matias', 
    edad: 17,
    ingeniero: false,
    cocinero: true,
    cantante: false,
    dj: true,
    guitarrista: false,
    dron: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es :`);
    if (persona.ingeniero) {
        console.log('Ingeniero');    
    } else {
        console.log('no es ingeniero');
    }
    if (persona.cocinero) {
        console.log('cocinero');    
    }
    if (persona.cantante) {
        console.log('cantante');    
    }
    if (persona.dj) {
        console.log('dj');    
    }
    if (persona.guitarrista) {
        console.log('guitarrista');    
    }
    if (persona.dron) {
        console.log('dron');    
    }

}


// desafio  imprimir si es mayor de edad, imprimirSiEsMayorDeEdad(), manda el texto vitalino es mayor de edad o vitalino es menor de edad

function imprimirsiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }   
}