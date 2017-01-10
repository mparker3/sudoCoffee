var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , url = require('url')
  , fs = require('fs')

app.listen(8080);

function handler(req, res) {
  response.end('It Works!!');
  var path = url.parse(req.url).pathname;

  if (path == '/small') {
    console.log('small coffee request received');
  } else if (path == "/medium") {
    console.log('medium coffee request received');
  } else if (path == "/large") {
    console.log('large coffee request received');
  } else {
    console.log('unknown command received');
  } 
}
  
