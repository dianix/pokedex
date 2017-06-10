$.getJSON("https://pokeapi.co/api/v2/pokemon/", function(response){
    console.log(response);
    var pokemons = response.results;
    crearPokemons(pokemons,pokeimagenes);
});

function crearPokemons(pokemons) {
	var contenedorPokemones = $("#pokemons");
    var fila = $("<div class='row center'/>")
    $(pokemons).each(function (i,pokemon) {
        console.log(pokeimagenes[i].imagen)
        var cajaPokemon = $("<div class='card col s6 m3 hoverable '/>");
        var pokeFoto = $("<img data-info_'__url__'/>").attr("src",pokeimagenes[i].imagen);
		var nombre = $("<h5/>").text(pokemon.name);
        cajaPokemon.append(pokeFoto).append(nombre);
		fila.append(cajaPokemon);
        contenedorPokemones.append(fila)
	});
};

var pokeimagenes = [
    {
        "imagen" : "assets/imgs/1-Bulbasaur.png"
    },
    {
        "imagen" : "assets/imgs/2-Ivysaur.png"
    },
    {
        "imagen" : "assets/imgs/3-Venusaur.png"
    },
    {
        "imagen" : "assets/imgs/4-Charmander.png"
    },
    {
        "imagen" : "assets/imgs/5-Charmaleon.png"
    },
    {
        "imagen" : "assets/imgs/6-Charizard.png"
    },
    {
        "imagen" : "assets/imgs/7-squirtle.png"
    },
    {
        "imagen" : "assets/imgs/8-Wartortle.png"
    },
    {
        "imagen" : "assets/imgs/9-Blastoise.png"
    },
    {
        "imagen" : "assets/imgs/10-Caterpie.png"
    },
    {
        "imagen" : "assets/imgs/11-Metapod.png"
    },
    {
        "imagen" : "assets/imgs/12-Butterfree.png"
    },
    {
        "imagen" : "assets/imgs/13-Weedle.png"
    },
    {
        "imagen" : "assets/imgs/14-Kakuna.png"
    },
    {
        "imagen" : "assets/imgs/15-Beedrill.png"
    },
    {
        "imagen" : "assets/imgs/16-Pidgey.png"
    },
    {
        "imagen" : "assets/imgs/17-Pidgeotto.png"
    },
    {
        "imagen" : "assets/imgs/18-Pidgeot.png"
    },
    {
        "imagen" : "assets/imgs/19-Rattata.png"
    },
    {
        "imagen" : "assets/imgs/20-Raticate.png"
    }
];



