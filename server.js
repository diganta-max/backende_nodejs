const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Your Name: [Diganta]');
});

server.listen(4001, 'localhost', () => {
  console.log('Server is running on http://localhost:4001');
});
