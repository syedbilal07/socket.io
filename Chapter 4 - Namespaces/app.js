var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('I:\\Bilal\\Aptech\\Tutorials Point Practice\\Socket.IO\\Chapter 4 - Namespaces\\index.html');
});

var nsp = io.of('/my-namespace');

nsp.on('connection', function(socket){
   console.log('Someone Connected');
   nsp.emit('hi', 'Hello Everyone!');
});

http.listen(3000, function(){
    console.log("Running On Port : 3000");
})