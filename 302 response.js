const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const messages = fs.readFileSync('messages.txt', 'utf-8').split('\n').filter(Boolean);
  res.send(messages.join('<br>'));
});

app.post('/submit', (req, res) => {
  const message = req.body.message + '\n';
  fs.appendFileSync('messages.txt', message);
  res.redirect(302, '/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
