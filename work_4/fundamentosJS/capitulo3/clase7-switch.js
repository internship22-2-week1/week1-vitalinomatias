var signo = prompt('cual es tu signo');

switch (signo) {
    case 'acuario':
        console.log('sos de signo acuario');
        break;
    case 'cancer':
        console.log('sos de signo cancer');
        break;
    case 'leo':
        console.log('sos de signo leo');
        break;
    case 'sagitario':
        console.log('sos de signo sagitario');
        break;
    case 'libra':
        console.log('sos de signo libra');
        break;
    default:
        console.log('no tenes ningun signo aceptado');
        break;
}