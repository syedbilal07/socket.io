var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('I:\\Bilal\\Aptech\\Tutorials Point Practice\\Socket.IO\\Chapter 3 - Broadcasting\\Sending Message To All Connected Clients\\index.html');
});

var clients = 0;

io.on('connection', function (socket) {
    clients++;
    io.sockets.emit('broadcast', {description: clients + ' Clients Connected'});
    socket.on('disconnect', function(){
        clients--;
       io.sockets.emit('broadcast', {description: clients + ' Clients Connected'});
    });
});

http.listen(3000, function(){
   console.log("Server Running On Port : 3000");
});