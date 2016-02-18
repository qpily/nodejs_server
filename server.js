var http = require("http");

http.createServer(function(request, response) {
  var options = {
    port: 9999
  };
  http.request(options, function(r) {
    r.on('data', function(data){
      console.log(data);
    });
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("haha");
    response.end();
  }).end();
}).listen(8888);

http.createServer(function(request, response) {
  response.writeHead(201, {'Content-Type':'text/plain'});
  response.write("Hehe");
  response.end();
}).listen(9999);