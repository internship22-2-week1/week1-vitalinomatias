class Calculadora {
    constructor (cadena) {
        this.cadena = cadena;
        this.longitudMaxima();
    }
     

    longitudMaxima() {
        if (this.cadena.length > 20) {
            return console.log(`la cadena ${this.cadena} contiene mas de 20 caracteres`);
        } else {
            this.verificarOperaciones();
        }
    }

    verificarOperaciones() {
        let total = 0;
        let positivos;
        if (this.cadena.includes('/')){
            console.log('division');
            return this.operacion('/');
        } else if (this.cadena.includes("*") ) {
            console.log('multiplicacion');
            return this.operacion('*');
        } else if (this.cadena.includes('-')) {
            console.log('resta');
            if (this.cadena[0] == '-') {
                console.log('entro al if');
                return this.cambioPosicion(this.cadena);

            } else {
                console.log('no entro al if');
                return this.operacion('-');
            }
        } else if (this.cadena.includes('+')) {
            this.cadena = this.cadena.split('+');
            console.log(this.cadena);
            console.log('suma');
            for (let i = 0; i < this.cadena.length; i++) {
                total += parseFloat(this.cadena[i]);
            }
            console.log(total);
        }
    }

    operacion(simboloOperacion){
        let operador = this.cadena.indexOf(simboloOperacion);
        let operacionAnterior = this.cadena.substring(operador,-1);
        let operacionSiguiente = this.cadena.substring(operador+1);
        let operadores = ['/','*','+','-'];
        let valorAnterior;
        let valorSiguiente;
        let resultado;
        let posicionAnterior;
        let posicionSiguiente;
        let nuevaCadena;

        for (let i = operacionAnterior.length; i >=0; i--) {
            if (operacionAnterior[i] == '+' || operacionAnterior[i] == '-' || operacionAnterior[i] == '*' || operacionAnterior[i] == '/') {
                valorAnterior = operacionAnterior.substring(i+1);
                posicionAnterior = i+1;
                break
            } else {
                valorAnterior = operacionAnterior.substring(0)
                posicionAnterior = ''; 
            }
        }

        for (let i = 0; i <=operacionSiguiente.length; i++) {
            if (operacionAnterior[i] == '+' || operacionAnterior[i] == '-' || operacionAnterior[i] == '*' || operacionAnterior[i] == '/') {
                valorSiguiente = operacionSiguiente.substring(0,i);
                posicionSiguiente = operacionSiguiente.substring(valorSiguiente.length)
                break
            } else {
                valorSiguiente = operacionSiguiente.substring(0)
                posicionSiguiente = ''; 
            }
        }

        if (simboloOperacion == '+') {
            resultado = parseFloat(valorAnterior) + parseFloat(valorSiguiente);
        } else if (simboloOperacion == '-') {
            resultado = parseFloat(valorAnterior) - parseFloat(valorSiguiente);
        } if (simboloOperacion == '*') {
            resultado = parseFloat(valorAnterior) * parseFloat(valorSiguiente);
        } if (simboloOperacion == '/') {
            resultado = parseFloat(valorAnterior) / parseFloat(valorSiguiente);
        }

        nuevaCadena = this.cadena.substring(0,posicionAnterior);
        
        nuevaCadena = nuevaCadena.concat(resultado);
        
        nuevaCadena = nuevaCadena.concat(posicionSiguiente);
        
        this.cadena = nuevaCadena;
        console.log('resultado', resultado);
        console.log('nuevaCadena', nuevaCadena);
        console.log('posicionAnteriro', posicionAnterior);
        console.log('posicionsiguiente', posicionSiguiente);
        
        return this.verificarOperaciones(this.cadena)
    }

    cambioPosicion(cadena){
        console.log('esta es la cadena',cadena);
        let posicion;
        for (let i = 1; i < cadena.length; i++) {
            if (cadena[i] == '+' || cadena[i] == '-' || cadena[i] == '*' || cadena[i] == '/') {
                cadena = cadena.substring(i+1);
                posicion = i;
                console.log(cadena);
                console.log(this.cadena);
                break
            }
        }
        cadena = cadena.concat(this.cadena.substring(0,posicion))
        this.cadena = cadena;
            console.log('nuevaCadena', cadena);
            return this.verificarOperaciones(this.cadena)
    }

    // siguienteOperacion(cadena) {
    //     console.log(this.cadena);
    // }

    

}

const cadena = '3+5*2-9/6';

const cadena1 = '4-7+8+9/2*3'

const calculadora = new Calculadora(cadena1);