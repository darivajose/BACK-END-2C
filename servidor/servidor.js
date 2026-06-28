const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Servidor funcionando!');
}).listen(3000);

console.log("Acesse http://localhost:3000");

//node servidor/servidor.js