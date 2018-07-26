var ws = require("nodejs-websocket")//引入nodejs-websoket模块
var PORT = 3000;//端口号
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {//调用cretteServer，里面有个参数（这个参数是一个回调函数）当一个客户端链接过来时，会回调一个函数，而conn则代表这个链接
	console.log("New connection")
	conn.on("text", function (str) {//ontext:当客户端有消息发送过来时，会回调一个函数，回调函数也接受一个参数，这个参数则是客户端传过来的消息，而这个函数又将这个参数发送回去
		console.log("Received "+str)
		conn.sendText(str)
	})
	conn.on("close", function (code, reason) {//onclose:当链接关闭之后，里面打印了一句话
		console.log("Connection closed")
	});
	conn.on("error",function(err){//当关闭对话窗口，链接意外关闭时的错误提示，而server也不会断连
		console.log('handle err');
		console.log(err)
	})
}).listen(PORT);//监听端口
console.log('websocket server listening on port' + PORT);//检测server运行情况