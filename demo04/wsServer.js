var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(3000);

io.on('connection', function (socket) {//socket相当于我们和客户端之间的链接
  socket.emit('news', { hello: 'world' });//emit发送数据
  socket.on('my other event', function (data) {
    console.log(data);
  });
});