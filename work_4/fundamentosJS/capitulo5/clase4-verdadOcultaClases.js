function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.alto = function () {
    // debugger
    return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre,
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}  soy desarrollador`);
}



// var vitalino = new Persona('Vitalino', 'matias', 1.7);
// var ericka = new Persona('Erika', 'Luna', 1.8);
// var arturo = new Persona('arturo', 'martinez', 1.9);
