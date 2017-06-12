var cargarPagina = function() {
    $('.modal').modal();
    $("body").on("click",".datos", mostrarDatos);
    $.getJSON("https://pokeapi.co/api/v2/pokemon/", function (response) {
        //console.log(response);
        var pokemons = response.results;
        crearPokemons(pokemons);
    });
};

function crearPokemons(pokemons) {
    var contenedorPokemones = $("#pokemons");
    var fila = $("<div class='row center'/>")
    $(pokemons).each(function (i, pokemon) {
        var cajaPokemon = $("<div class='card col s6 m3 hoverable'/>");
        var pokeFoto = $("<img />").attr("src", pokeimagenes[i].imagen);
        //console.log(pokeFoto)
        var nombre = $("<a class='datos center-text'/>").text(pokemon.name).attr("data-info", pokemon.url).attr('href', "#modal1");
        cajaPokemon.append(pokeFoto).append(nombre);
        fila.append(cajaPokemon);
        contenedorPokemones.append(fila)
    });
};

var plantillaModal = '<div class="row">'+
                         '<div class="col s6">'+
                             '<img src="__src__" alt="__pokemon__">'+
                         '</div>'+
                         '<div class="col s6">'+
                            '<div class="row">'+
                             '<h4>__nombrePokemon__</h4>'+
                             '</div>'+
                             '<div class="row">'+
                                 '<h6 class="col s6">Color: __color__</h6>'+
                                 '<h6 class="col s6">Shape: __forma__</h6>' +                               
                                 '<h6 class="col s6">Habitat: __habitat__</h6>'+
                                 '<h6 class="col s6">Genero: __genero__</h6>'+
                            '</div>'+
                         '</div>'+
                     '</div>';

var mostrarDatos = function(){
    var info = $(this).data("info");
    //console.log(this)
    var $modal = $("#modal1")
    $.getJSON(info,function(response){
        console.log(response)
        var especie = response.species.url;
        datosPokemon(especie);
        //console.log(especie)    
        
    });    
};

var datosPokemon = function(especie){
    console.log(especie)
    $.getJSON(especie,function(response){
            console.log(response);
            console.log(response.habitat.name);
            console.log(response.color.name);
            console.log(response.shape.name);
            console.log(response.genera[0].genus);
        })
};

/*var obtenerDatos = function(){
    $.getJSON(dato,function(response){
        var contenido = response
    })
}*/



var pokeimagenes = [
    {
        "imagen": "assets/imgs/1-Bulbasaur.png"
    },
    {
        "imagen": "assets/imgs/2-Ivysaur.png"
    },
    {
        "imagen": "assets/imgs/3-Venusaur.png"
    },
    {
        "imagen": "assets/imgs/4-Charmander.png"
    },
    {
        "imagen": "assets/imgs/5-Charmaleon.png"
    },
    {
        "imagen": "assets/imgs/6-Charizard.png"
    },
    {
        "imagen": "assets/imgs/7-squirtle.png"
    },
    {
        "imagen": "assets/imgs/8-Wartortle.png"
    },
    {
        "imagen": "assets/imgs/9-Blastoise.png"
    },
    {
        "imagen": "assets/imgs/10-Caterpie.png"
    },
    {
        "imagen": "assets/imgs/11-Metapod.png"
    },
    {
        "imagen": "assets/imgs/12-Butterfree.png"
    },
    {
        "imagen": "assets/imgs/13-Weedle.png"
    },
    {
        "imagen": "assets/imgs/14-Kakuna.png"
    },
    {
        "imagen": "assets/imgs/15-Beedrill.png"
    },
    {
        "imagen": "assets/imgs/16-Pidgey.png"
    },
    {
        "imagen": "assets/imgs/17-Pidgeotto.png"
    },
    {
        "imagen": "assets/imgs/18-Pidgeot.png"
    },
    {
        "imagen": "assets/imgs/19-Rattata.png"
    },
    {
        "imagen": "assets/imgs/20-Raticate.png"
    }
];


$(document).ready(cargarPagina);
