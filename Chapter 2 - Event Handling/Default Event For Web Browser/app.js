var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile('I:\\Bilal\\Aptech\\Tutorials Point Practice\\Socket.IO\\Chapter 2 - Event Handling\\Default Event For Web Browser\\index.html');
});

io.on('connection', function(socket){
    console.log("A User Connected");
    //Send a message after a timeout of 4seconds
    setTimeout(function(){
       socket.send('You Have Received This Message After 4 Seconds Of Connection');
    }, 4000);
    socket.on('disconnect', function(){
        console.log("A User Disconnected");
    });
});

http.listen(3000, function(){
    console.log("Listening On Port : 3000");
});