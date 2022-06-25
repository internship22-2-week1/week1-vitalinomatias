const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'type/3'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const lukeUrl = `${API_URL}${PEOPLE_URL}`;
const opts = {crossDomain:true};

$.get(lukeUrl, opts, function (data) {
    console.log(`Hola yo soy ${data.name}`);
})