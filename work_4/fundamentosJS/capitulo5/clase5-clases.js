class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.altura = altura
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    }
    alto() {
        // debugger
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        debugger;
        super(nombre,apellido,altura);
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}  soy desarrollador`);
    }
}




// var vitalino = new Persona('Vitalino', 'matias', 1.7);
// var ericka = new Persona('Erika', 'Luna', 1.8);
// var arturo = new Persona('arturo', 'martinez', 1.9);
