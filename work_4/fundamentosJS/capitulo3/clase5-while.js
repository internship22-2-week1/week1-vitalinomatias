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

const comeMucho = () => Math.random() < 0.3;

const realizaDeporte = () => Math.random() < 0.4;

const META = vitalino.peso -3;

var dias = 0;

while (vitalino.peso > META) {
    // debugger
    if (comeMucho()) {
        aumentarDePeso(vitalino);
    }
    if (realizaDeporte()) {
        adelgazar(vitalino)
    }
    dias += 1;
}



console.log(`pasaron ${dias} hasta que ${vitalino.nombre} adelgazo 3kg`);