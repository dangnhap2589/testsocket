var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var mangUsersOnline = [];
var mang=[];
var mangtest=[];

io.on('connection', function(socket){
  
  


});
  




http.listen(port, function(){
  console.log('listening on *:' + port);
});
