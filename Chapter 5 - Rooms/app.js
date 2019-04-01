var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('I:\\Bilal\\Aptech\\Tutorials Point Practice\\Socket.IO\\Chapter 5 - Rooms\\index.html');
});

var roomno = 1;

io.on('connection', function(socket){
   // If more than 2 clients connect on a room, increase the room
    if(io.nsps['/'].adapter.rooms["room-" +roomno] && io.nsps['/'].adapter.rooms["room-" + roomno].length > 1)
        roomno++;
        socket.join("room-"+ roomno);

        //Send this event to everyone in the room.
        io.sockets.in("room-" + roomno).emit('connectToRoom', "You Are In Room No : " + roomno);
});

http.listen(3000, function(){
    console.log("Running On Port : 3000");
})