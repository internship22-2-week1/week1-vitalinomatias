var vitalino = {
    nombre: 'vitalino',
    apellido: 'matias',
    edad: 31,
    peso: 75
}

const INCREMENTO_PESO = 0.2;
const DECREMENTO_PESO = 0.2;
const DIAS = 365;

console.log(`Al inicio del año ${vitalino.nombre} pesa ${vitalino.peso}kg`);

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;

const adelgazar = (persona) => persona.peso -= DECREMENTO_PESO;

for (var i = 1; i <= DIAS; i++) {
    var random = Math.random(0,1);

    if (random < 0.25) {
        //aumenta de peso
        aumentarDePeso(vitalino);
    } else if (random < 0.5) {
        //adelgazar
        adelgazar(vitalino);
    }
}


console.log(`Al final del año ${vitalino.nombre} pesa ${vitalino.peso.toFixed(2)}kg`);