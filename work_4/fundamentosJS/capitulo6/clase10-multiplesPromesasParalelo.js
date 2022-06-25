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


var ids = [1,2,3,4,5,6,7]

// tambien se puede pasar como una arrow function
// var promesas = ids.map(function (id) {
//     return obtenerPersonaje(id)
// })

var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)