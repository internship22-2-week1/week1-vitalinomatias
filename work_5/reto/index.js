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
            console.log(`caden ${this.cadena}`);
            return this.operacion('/');
        } else if (this.cadena.includes("*") ) {
            console.log('multiplicacion');
            return this.operacion('*');
        } else if (this.cadena.includes('-')) {
            console.log('resta');
            if (this.cadena[0] == '-') {
                return this.cambioPosicion(this.cadena);
            } else {
                return this.operacion('-');
            }
        } else if (this.cadena.includes('+')) {
            this.cadena = this.cadena.split('+');
            // console.log(this.cadena);
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
                // console.log(`operacionAnterior ${operacionAnterior}`);
                // console.log(`valor Anterior ${valorAnterior}`);
                // console.log(`posicion anterior ${posicionAnterior}`);
                break
            } else {
                valorAnterior = operacionAnterior.substring(0)
                posicionAnterior = ''; 
                // console.log(`operacionAnterior ${operacionAnterior}`);
                // console.log(`valor Anterior ${valorAnterior}`);
                // console.log(`posicion anterior ${posicionAnterior}`);
            }
        }

        for (let i = 0; i <=operacionSiguiente.length; i++) {
            if (operacionSiguiente[i] == '+' || operacionSiguiente[i] == '-' || operacionSiguiente[i] == '*' || operacionSiguiente[i] == '/') {
                valorSiguiente = operacionSiguiente.substring(0,i);
                posicionSiguiente = operacionSiguiente.substring(valorSiguiente.length)
                // console.log(`operacion ${operacionAnterior}`);
                // console.log(`valor Anterior ${valorAnterior}`);
                // console.log(`posicion anterior ${posicionAnterior}`);
                break
            } else {
                valorSiguiente = operacionSiguiente.substring(0)
                posicionSiguiente = ''; 
                // posicionSiguiente = operacionSiguiente.substring(valorSiguiente.length)
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
        
        return this.verificarOperaciones(this.cadena)
    }

    cambioPosicion(cadena){
        // console.log('esta es la cadena',cadena);
        let posicion;
        for (let i = 1; i < cadena.length; i++) {
            if (cadena[i] == '+' || cadena[i] == '-' || cadena[i] == '*' || cadena[i] == '/') {                
                if (cadena[i]== '-') {
                    cadena = cadena.substring(i);
                } else {
                    cadena = cadena.substring(i+1);
                }                
                posicion = i;
                // console.log(cadena);
                // console.log(this.cadena);
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

const cadena1 = '4-7+8+9/2*3';

const cadena3  = '-44-76+83+92/21*35'

const calculadora = new Calculadora(cadena3);