var http=require('http');

var fserver = function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>Ma page Node.js !</title>'+
' </head>'+
' <body>'+
' <p>Voici un paragraphe <strong>HTML</strong> !</p>'+
' </body>'+
'</html>');
    res.end();
}

var server = http.createServer(fserver);

server.listen(8080);
