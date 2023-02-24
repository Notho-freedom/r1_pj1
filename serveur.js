var http=require('http');
var url = require("url");
var querystring = require('querystring');

var mmodule = require('./monmodule');

var app = mmodule.App();


var fserver = function(req,res){
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);


    console.log(page);
    console.log(params);

    res.writeHead(200, {"Content-Type": "text/html"});

    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' +params['nom']);
        }else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');}

    if (page == '/') {
    res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
    res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
    res.write('Hé ho, c\'est privé ici !');
    }
    else if (page == '/perdu') {
    res.write('vous êtes perdu!!');
    res.writeHead(404, {"Content-Type": "text/html"});
    res.write("404 \n page not Found!");
    console.log('page inconnu!');
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h0 style='align: center;justify: center; text-align: center; font-size: 150px;color: darkred;font-familly: impact; justify-content: center'>404 \n page not Found!</h0>");
        console.log('page inconnu!');
    }
    res.end();
}


var server = http.createServer(fserver);


var after= function(){
    console.log('Serveur déconnecter!');
}
server.on("close",after);


var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();
jeu.on('gameover', function(message){
console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');


mmodule.salutationMatin();
console.log('===============');
mmodule.salutationSoir();
console.log('===============');

server.listen(8080);
