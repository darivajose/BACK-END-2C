/* const numero = 0;
console.log(numero) */




    const http = require('http'); // Aspas retas simples

http.createServer((req, res) => {  
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Aspas retas
    res.end('Olá Mundo\n'); // Aspas retas
}).listen(3000);

console.log('Servidor rodando em http://localhost:3000/');