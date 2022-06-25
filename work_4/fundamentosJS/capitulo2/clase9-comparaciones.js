var x = 4;
var y = '4';

// x == y esto es true por que las dos variables son 4 independiente de que uno sea numero y otro string
// x === y esto es false por que compara valores y que sean del mismo tipo las dos variables

var vitalino = {
    nombre: 'vitalino'
}

var otroVitalino = {
    nombre: 'vitalino'
}

// vitalino == otroVitalino, esto es falso ya que la comparacion entre objetos es diferente ya que compara las referencias de las variables

var vitalinomas = vitalino;

// vitalino == vitalinomas, esto si es verdadero ya que solo se copia el mismo objeto
