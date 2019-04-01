var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile('I:\\Bilal\\Aptech\\Tutorials Point Practice\\Socket.IO\\Chapter 1 - Hello World\\index.html');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){
   console.log("A User Connected");
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function(){
        console.log("A User Disconnected");
    });
});



http.listen(3000, function(){
   console.log("Listening On Port *: 3000");
});