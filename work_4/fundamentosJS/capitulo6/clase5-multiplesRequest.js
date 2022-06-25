const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'type/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;

const opts = {crossDomain:true};

const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy ${persona.name}`);
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(5);
obtenerPersonaje(3);
obtenerPersonaje(2);
obtenerPersonaje(54);