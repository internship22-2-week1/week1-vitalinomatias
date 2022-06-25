class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.altura = altura
    }

    saludar(fn) {
        var { nombre, apellido} = this;
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido);
        }
    }
    alto() {
        // debugger
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        // debugger;
        super(nombre,apellido,altura);
    }

    saludar(fn) {
        var nombre = this.nombre;
        var apellido = this.apellido;
        console.log(`Hola me llamo ${nombre} ${apellido}  soy desarrollador`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`ah mirá no sabia quereas desarrollador`);
    }
}



var vitalino = new Persona('Vitalino', 'matias', 1.7);
var ericka = new Persona('Erika', 'Luna', 1.8);
var arturo = new Desarrollador('arturo', 'martinez', 1.9);

vitalino.saludar();
ericka.saludar(responderSaludo);
arturo.saludar(responderSaludo);