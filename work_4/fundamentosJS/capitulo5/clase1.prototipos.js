function Persona(nombre, apellido, altura) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.alto = function () {
    if (this.altura > 1.8) {
        console.log(`Soy una persona alta y mido ${this.altura}m`); 
    }
    else {
        console.log(`Yo no soy una persona alta por que mido ${this.altura}m`); 
    }
}

var vitalino = new Persona('Vitalino', 'matias', 1.7);
// vitalino.saludar();

var ericka = new Persona('Erika', 'Luna', 1.8);

var arturo = new Persona('arturo', 'martinez', 1.9);


// altura

// funcion que diga soy alto sii mide mas de 1.8m