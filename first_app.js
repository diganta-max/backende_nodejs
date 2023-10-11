// console.log('Hello from node.js');
////const fs = require('fs');
//fs.writeFileSync('Hello.txt', 'hello from1 node.js');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Your Name: [Diganta]');
});

server.listen(4000, 'localhost', () => {
  console.log('Server is running on http://localhost:4001');
});
