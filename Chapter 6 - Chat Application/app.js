var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile('I:\\Bilal\\Aptech\\Tutorials Point Practice\\Socket.IO\\Chapter 6 - Chat Application\\index.html');
});

users = [];

// If User Exist, Show Error, Otherwise Chat Function
io.on('connection', function(socket){
    console.log("A User Connected");
    socket.on('setUsername', function(data){
        console.log(data);
        if(users.indexOf(data) > -1){
            socket.emit('userExists', data + ' User Name Is Already Taken. Please Try Some Other Name');
        }
        else{
            users.push(data);
            socket.emit('userSet', {username: data});
        }
    });
    socket.on('msg', function(data){
        //Send message to everyone
        io.sockets.emit('newmsg', data);
    });
});

http.listen(3000, function(){
   console.log("Running On Port : 3000");
});