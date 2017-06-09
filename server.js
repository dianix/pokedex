var express = require("express");
var app = express();

/*app.get("/", function(req,res){
    res.send("hola, como estas");
});*/

app.use(express.static(__dirname + "/public/"))
//console.log(__dirname);
app.listen(3000, function(){
    console.log("Servidor escuchando en http://localhost:3000");
});