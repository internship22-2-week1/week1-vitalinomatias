const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'type/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;

const opts = {crossDomain:true};

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $
        .get(url, opts, callback)
        .fail(() => {
            console.log(`Sucedio un error. No se pudo obeter el personaje ${id}`);
        });
    
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`);

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola yo soy ${personaje.name}`);

        obtenerPersonaje(3, function (personaje) {

            console.log(`Hola yo soy ${personaje.name}`);

            obtenerPersonaje(4, function (personaje) {

                console.log(`Hola yo soy ${personaje.name}`);
            }); 
        });        
    });    
});