const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'type/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;

const opts = {crossDomain:true};

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;    
        $
        .get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id));
    })    
}

function onError(id) {
    console.log(`sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`Hola yo soy ${personaje.name}`);
    })
    .catch(onError)