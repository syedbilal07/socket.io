var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile('I:\\Bilal\\Aptech\\Tutorials Point Practice\\Socket.IO\\Chapter 2 - Event Handling\\Custom Event For Web Browser\\index1.html');
});

io.on('connection', function(socket){
    console.log("A User Connected");
    //Send a custom message after a timeout of 4seconds
    setTimeout(function(){
       socket.emit('testerEvent', {description: 'A Custom Event Named Tester Event'});
    }, 4000);
    socket.on('disconnect', function(){
        console.log("A User Disconnected");
    });
});

http.listen(3000, function(){
    console.log("Listening On Port : 3000");
});