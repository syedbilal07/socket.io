var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile('I:\\Bilal\\Aptech\\Tutorials Point Practice\\Socket.IO\\Chapter 2 - Event Handling\\Sending Message From Client To Console\\index1.html');
});

// To Handle Client Events
io.on('connection', function(socket){
    socket.on('clientEvent', function (data) {
        console.log(data);
    });
});

io.on('connection', function(socket){
    console.log("A User Connected");

    socket.on('disconnect', function(){
        console.log("A User Disconnected");
    });
});

http.listen(3000, function(){
    console.log("Listening On Port : 3000");
});