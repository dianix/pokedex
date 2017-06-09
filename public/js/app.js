$.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
    console.log(response);
    var pokemons = response.results;
    crearPokemons(pokemons);
});

function crearPokemons(pokemons) {
	var contenedorPokemones = $("#pokemons");
    var fila = $("<div class='row center'/>")
    $(pokemons).each(function (i,pokemon) {
        var cajaPokemon = $("<div class='card col s12 m3'/>");
        console.log(pokemon.name)
		var nombre = $("<h6/>").text(pokemon.name);
        cajaPokemon.append(nombre);
		fila.append(cajaPokemon);
        contenedorPokemones.append(fila)
	});
};




var pokeImg = [
    {
        "pokemon" : ""
    }
]



