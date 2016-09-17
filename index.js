var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
	  res.sendfile('index.html');
});

io.on('connection', function(socket){
	  console.log('a user connected');
		socket.on('mood', function(data) {
			console.log('mood is ', data);
      io.emit('track', {track: 'https://open.spotify.com/track/6b3b7lILUJqXcp6w9wNQSm'});
		});
		
});

http.listen(3000, function(){
	  console.log('listening on *:3000');
});
