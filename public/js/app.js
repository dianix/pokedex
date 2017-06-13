var cargarPagina = function () {
    $('.modal').modal();
    $("body").on("click", ".datos", obtenerDatos);
    $("#siguiente").click(siguientePokeLista);
    $.getJSON("https://pokeapi.co/api/v2/pokemon/", function (response) {
        //console.log(response);
        var pokemons = response.results;
        var siguientesPk = response.next;
        $("#siguiente").attr("data-url", siguientesPk);
        crearPokemons(pokemons);
    });
};

var crearPokemons = function (pokemons) {
    console.log(pokemons)
    var contenedorPokemones = $("#pokemons");
    var fila = $("<div class='row center-align'/>")
    $(pokemons).each(function (i, pokemon) {
        var cajaPokemon = $("<div class='card col s6 m3 hoverable'/>");
        var pokeFoto = $("<img class='responsive-img'/>").attr("src", pokeimagenes[i].imagen);
        var nombre = $("<a class='datos'/>").text(pokemon.name).attr("data-info", pokemon.url).attr('href', "#modal1");
        cajaPokemon.append(pokeFoto).append(nombre);
        fila.append(cajaPokemon);
        contenedorPokemones.append(fila)
    });
};

var plantillaModal = '<div class="row">' +
    '<div class="col s6">' +
    '<img src="__src__" alt="__pokemon__">' +
    '</div>' +
    '<div class="col s6">' +
    '<div class="row">' +
    '<h4>__nombrePokemon__</h4>' +
    '</div>' +
    '<div class="row">' +
    '<h6 class="col s6"><b>Color:<b/>&ensp; __color__</h6>' +
    '<h6 class="col s6"><b>Forma:<b/>&ensp; __forma__</h6>' +
    '<h6 class="col s6"><b>Habitat:<b/>&ensp; __habitat__</h6>' +
    '<h6 class="col s6"><b>Genera:<b/>&ensp; __genera__</h6>' +
    '</div>' +
    '</div>' +
    '</div>';

var obtenerDatos = function () {
    var info = $(this).data("info");
    var foto = $(this).prev().attr("src");
    var nombre = $(this).text();
    //console.log(nombre)
    var $modal = $("#modal1")
    $.getJSON(info, function (response) {
        //console.log(response)
        var especie = response.species.url;
        $.getJSON(especie, function (response) {
            var habitat = response.habitat.name;
            var color = response.color.name;
            var shape = response.shape.name;
            var genera = response.genera[0].genus;

            mostrarDatos({
                foto: foto,
                nombre: nombre,
                habitat: habitat,
                color: color,
                shape: shape,
                genera: genera
            });
        })
    });
};

var mostrarDatos = function (datos) {
    //console.log(datos)
    var contenedorModal = $(".modal-content");
    var plantillaFinal = "";
    plantillaFinal += plantillaModal.replace("__src__", datos.foto)
        .replace("__pokemon__", datos.nombre)
        .replace("__nombrePokemon__", datos.nombre)
        .replace("__color__", datos.color)
        .replace("__forma__", datos.shape)
        .replace("__habitat__", datos.habitat)
        .replace("__genera__", datos.genera);
    contenedorModal.html(plantillaFinal);
};

var limpiarModal = function () {

};

var siguientePokeLista = function () {
    var siguienteUrl = $("#siguiente").attr("data-url");
    var botonSiguiente = $("#siguiente");
    var botonAnterior = $("#anterior");
    //console.log(siguienteUrl)
    $.getJSON(siguienteUrl, function (response) {
        var pokemons = response.results;
        var siguientesPk = response.next;
        //console.log(siguientesPk)        
        var anterioresPk = response.previous;
        //console.log(anterioresPk)        
        botonSiguiente.attr("data-url", siguientesPk);
        botonAnterior.attr("data-url", anterioresPk);
        console.log(botonSiguiente.data("url"))
        console.log(botonAnterior.data("url"))
        crearPokemons(pokemons);
    });
}

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
