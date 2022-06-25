const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'type/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;

const opts = {crossDomain:true};

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(url, opts, function (persona) {
        console.log(`Hola yo soy ${persona.name}`);
        if (callback) {
            callback();
        }
    })
}



obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4);         
        });        
    });    
});